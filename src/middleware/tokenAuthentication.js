module.exports = function tokenAuthentication(request, response, next) {
  const token = request.headers.authorization;
  console.log(token);
  next();
};