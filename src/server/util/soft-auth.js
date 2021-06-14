const user = process.env.API_USER;
const pw = process.env.API_PW;

const checkAuth = (username, password) => {
  if (!user || !pw) return false;
  return username === user && password === pw;
}

module.exports = {
  checkAuth
}
