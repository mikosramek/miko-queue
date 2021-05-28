const router = require('express').Router();
const XHR = require('../../utility/xhr');

router.post('/request', async (req, res) => {
  const { url } = req.body;
  try {
    const data = await XHR.get(url, '');
    res.status(200).send(data);
  }
  catch (error) {
    console.error('proxy.js@:', error.message);
    res.status(400).send(error.message);
  }
});

module.exports = router;
