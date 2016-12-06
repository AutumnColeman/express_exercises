const express = require('express');
const app = express();
// const time = require('time');

//Exercise 1
// app.get('/', function(req, res) {
//   res.send('Hello World!');
// });

//Exercise 2
// app.get('/year', function(req, res) {
//   var age = req.query.age;
//   var d = new Date().getFullYear();
//   var bornIn = d - age;
//   res.send('You were born in ' + bornIn);
// });

// Exercise 3
app.get('/name/:name/age/:age', function(req, res) {
  var name = req.params.name || 'world';
  var age = req.params.age;
  var d = new Date().getFullYear();
  var bornIn = d - age;
  res.send('Hello, ' + name + '! You were born in  ' + bornIn);
});

app.listen(3000, function() {
  console.log('Listening on *:3000');
});
