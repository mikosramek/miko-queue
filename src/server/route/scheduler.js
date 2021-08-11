const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const spacetime = require('spacetime')
const router = require('express').Router();
const db = require('../../utility/mongodb/db');
const { sort } = require('../../utility/schedule-utils');

dayjs.extend(utc)

router.get('/next-event', async (req, res) => {
  const events = await db.getSchedule();
  const now = dayjs().utc();
  let nextEvent = null;
  let smallestDifference = Infinity;
  events.forEach((event) => {
    const { hour, minute, text } = event;
    let eventTime = dayjs().utc().hour(hour).minute(minute);
    if (eventTime.isBefore(now)) {
      eventTime = eventTime.add(1, 'd');
    }
    const difference = eventTime.diff(now, 'm');
    if (difference < smallestDifference) {
      smallestDifference = difference;
      nextEvent = event;
    }
  });


  const timeArray = [
    now.hour(),
    now.minute(),
    now.second(),
    now.date(),
    now.month() + 1,
    now.year()
  ];

  res.status(200).send({
    nextEvent,
    dateTime : now.toISOString(),
    now : timeArray,
    timeUntil : nextEvent ? smallestDifference : -1
  });
});


router.get('/events', async (req, res) => {
  try {
    const events = await db.getSchedule();
    return res.status(200).send(events);
  }
  catch (error) {
    console.error('scheduler.js@:', error.message);
    return res.status(500).send(error.message);
  }
});

router.post('/events', async (req, res) => {
  const { events } = req.body;
  if (!events) return res.status(403).send('No events found in body');
  try {
    await db.setSchedule(events);
  }
  catch (error) {
    console.error('scheduler.js@:', error.message);
    return res.status(500).send(error.message);
  }
  res.status(204).send();
});

router.delete('/events', async (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(403).send('No events found in body');
  try {
    await db.removeSchedule(id);
  }
  catch (error) {
    console.error('scheduler.js@:', error.message);
    return res.status(500).send(error.message);
  }
  res.status(204).send();
});

router.get('/', async (req, res) => {
  const reject = () => {
    res.setHeader('www-authenticate', 'Basic')
    res.sendStatus(401)
  }

  const authorization = req.headers.authorization;

  if (!authorization) {
    return reject()
  }
  const [username, password] = Buffer.from(authorization.replace('Basic ', ''), 'base64').toString().split(':');
  if (!(username === process.env.SCHEDULE_USER && password === process.env.SCHEDULE_PW)) {
    return reject();
  }

  const events = await db.getSchedule();
  const parsedEvents = sort(events.map(({ hour, minute, ...event}) => {
    const eventTime = dayjs().utc().hour(hour).minute(minute);
    const localeEventTime = spacetime(new Date(eventTime.toISOString()).toUTCString(), 'UTC').goto('America/Toronto');
    return {
      ...event,
      hour : localeEventTime.hour(),
      minute : localeEventTime.minute()
    }
  }));
  res.render('schedule', { events : parsedEvents });
});

module.exports = router;
