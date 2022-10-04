const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (req, res) => {
  const pathSpeakers = path.resolve(__dirname, 'talker.json');
  const speakers = JSON.parse(await fs.readFile(pathSpeakers, 'utf8'));
  res.status(200).json(speakers);
});

app.listen(PORT, () => {
  console.log('Online');
});
