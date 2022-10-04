function emailValidator(req, res, next) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json(
      { message: 'O campo "email" é obrigatório' },
    );
  }

  const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const statusEmail = emailRegex.test(email);
  if (!statusEmail) {
    return res.status(400).json(
      { message: 'O "email" deve ter o formato "email@email.com"' },
    );
  }

  next();
}

module.exports = emailValidator;