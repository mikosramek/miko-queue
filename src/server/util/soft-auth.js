const user = process.env.API_USER;
const pw = process.env.API_PW;

const checkAuth = (username, password) => {
  console.info({ username, user, password, pw }, 'soft-auth.js@checkAuth');
  if (!user || !pw) return false;
  return username === user && password === pw;
}

module.exports = {
  checkAuth
}
