function tokenValidator(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }

  const bearerToken = authorization.startsWith('Bearer ') ? (
    authorization)
     : (
      `Bearer ${authorization}`
    );
  const token = bearerToken.substring(7, bearerToken.length);
  
  if (token.length !== 16) {
    return res.status(401).json({ message: 'Token inválido' });
  }
  
  req.headers.authorization = token;
  next();
}

module.exports = tokenValidator;
