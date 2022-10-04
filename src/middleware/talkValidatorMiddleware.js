const watchedAtValidator = ({ watchedAt }) => {
  const FormatRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  const formatStatus = FormatRegex.test(watchedAt);

  if (!watchedAt) {
    return {
      status: true,
      message: 'O campo "watchedAt" é obrigatório',
    };
  } 
  
  if (!formatStatus) {
    return {
      status: true,
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    };
  }

  return { status: false };
};

const rateValidator = ({ rate }) => {
  if (rate === undefined) {
    return {
      status: true,
      message: 'O campo "rate" é obrigatório',
    };
  } 

  if ((Number(rate) < 1 || Number(rate) > 5)) {
    return {
      status: true,
      message: 'O campo "rate" deve ser um inteiro de 1 à 5',
    };
  }

  return { status: false };
};

function talkValidator(req, res, next) {
  const { talk } = req.body;

  if (!talk) return res.status(400).json({ message: 'O campo "talk" é obrigatório' });

  const watchedAtStatus = watchedAtValidator(talk);
  const rateStatus = rateValidator(talk);

  if (watchedAtStatus.status) return res.status(400).json({ message: watchedAtStatus.message });

  if (rateStatus.status) return res.status(400).json({ message: rateStatus.message });

  next();
}

module.exports = talkValidator;