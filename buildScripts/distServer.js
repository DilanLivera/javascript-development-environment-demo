import express from 'express';
import { join } from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if(err) {
    console.error(err);
  } else {
    open('http://localhost:' + port)
  }
});
