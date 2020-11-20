const express = require('express');
const favicon = require('express-favicon');
const path = require('path');

const port = process.env.PORT || 3001;
const dirname = path.resolve(path.dirname(''));

const app = express();

app.use(favicon(`${dirname}/public/img/lotus.svg`));
app.use(express.static(dirname));
app.use(express.static(path.join(dirname, 'dist')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(dirname, 'dist', 'index.html'));
});

app.listen(port);
