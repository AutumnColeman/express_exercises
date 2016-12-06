const express = require('express');
const app = express();
// const time = require('time');

// app.get('/', function(req, res) {
//   res.send('Hello World!');
// });
app.get('/year', function(req, res) {
  var age = req.query.age;
  var d = new Date().getFullYear();
  bornIn = d - age;
  res.send('You were born in ' + bornIn);
});

app.listen(3000, function() {
  console.log('Listening on *:3000');
});
