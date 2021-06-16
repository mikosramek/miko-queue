 function secondsToString(secondsInput)
{
  const years = Math.floor(secondsInput / 31536000);
  const days = Math.floor((secondsInput % 31536000) / 86400);
  const hours = Math.floor(((secondsInput % 31536000) % 86400) / 3600);
  const minutes = Math.floor((((secondsInput % 31536000) % 86400) % 3600) / 60);
  const seconds = (((secondsInput % 31536000) % 86400) % 3600) % 60;
  return `${years} y | ${days} d | ${hours} h | ${minutes} m | ${seconds} s`;
}

function timestamp() {
  const now = new Date();
  return `${now.getFullYear()}${now.getHours()}${now.getMinutes()}`;
}

module.exports = {
  secondsToString,
  timestamp
}
