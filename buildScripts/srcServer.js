let express = require('express');
let path = require('path');
let open = require('open');

const PORT = 3000;
let app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(PORT, function(err) {
  if(err) {
    console.error(err);
  } else {
    open('http://localhost:' + PORT)
  }
});
