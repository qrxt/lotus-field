const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const gzipStatic = require('express-static-gzip');

const port = process.env.PORT || 3001;
const dirname = path.resolve(path.dirname(''));

const app = express();

app.get('*.js', (req, res, next) => {
  req.url = `${req.url}.gz`;
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});

app.get('*.css', (req, res, next) => {
  req.url = `${req.url}.gz`;
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/css');
  next();
});

app.get(/.*[eot|ttf|woff|woff2]$/, (req, res, next) => {
  req.url = `${req.url}.gz`;
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/css');
  next();
});

app.use(favicon(`${dirname}/public/img/lotus.svg`));
app.use(express.static(dirname));
app.use(express.static(path.join(dirname, 'dist')));

app.get('/*', gzipStatic('./dist/', {
  enableBrotli: true,
  orderPreference: ['gz'],
}));

app.get('/wakemydyno.txt', (req, res) => {
  res.sendFile(path.join(dirname, 'wakemydyno.txt'));
});

app.listen(port);
