const express = require('express');
const fs = require('fs').promises;
const crypto = require('crypto');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const emailValidatorMiddleware = require('./middleware/emailValidatorMiddleware');
const passwordValidatorMiddleware = require('./middleware/passwordValidatorMiddleware');
const tokenValidatorMiddleware = require('./middleware/tokenValidatorMiddleware');
const nameValidatorMiddleware = require('./middleware/nameValidatorMiddleware');
const ageValidatorMiddleware = require('./middleware/ageValidatorMiddleware');
const talkValidatorMiddleware = require('./middleware/talkValidatorMiddleware');

const idGenerator = require('./Utils/idGenerator');

app.use(bodyParser.json());
  
const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (_req, res) => {
  const pathSpeakers = path.resolve(__dirname, 'talker.json');
  const speakers = JSON.parse(await fs.readFile(pathSpeakers, 'utf8'));
  res.status(200).json(speakers);
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const pathSpeakers = path.resolve(__dirname, 'talker.json');
  const speakers = JSON.parse(await fs.readFile(pathSpeakers, 'utf8'));
  const speaker = speakers.filter((person) => person.id === Number(id));
  if (speaker.length) {
    return res.status(200).json(speaker[0]);
  }
  res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

app.post('/login',
  emailValidatorMiddleware,
  passwordValidatorMiddleware,
  async (req, res) => {
    const token = crypto.randomBytes(8).toString('hex');
    res.status(200).json({ token });
});

app.post('/talker',
  tokenValidatorMiddleware,
  nameValidatorMiddleware,
  ageValidatorMiddleware,
  talkValidatorMiddleware,
  async (req, res) => {
    const pathSpeakers = path.resolve(__dirname, 'talker.json');
    const speakers = JSON.parse(await fs.readFile(pathSpeakers, 'utf8'));
    const newId = idGenerator(speakers);
    const speaker = { ...req.body, id: newId };
    speakers.push(speaker);
    await fs.writeFile(pathSpeakers, JSON.stringify(speakers));
    res.status(201).json(speaker);
});

app.listen(PORT, () => {
  console.log('Online');
});
