const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const router = require('express').Router();
const schedule = require('../data/schedule.json');

dayjs.extend(utc)

router.get('/next-event', (req, res) => {
  const now = dayjs().utc();
  let nextEvent = null;
  let smallestDifference = Infinity;
  schedule.forEach((event) => {
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
  res.status(200).send({
    nextEvent,
    now : now.toISOString(),
    timeUntil : nextEvent ? smallestDifference : -1
  });
});

module.exports = router;
