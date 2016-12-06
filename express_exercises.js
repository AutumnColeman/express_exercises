const express = require('express');
const app = express();
// const bodyParser = require('body-parser');

app.use(express.static('views'));
// app.use(bodyParser.json());
app.set('view engine', 'hbs');

// Exercise 3
app.get('/name/:name/age/:age', function(req, res) {
  var name = req.params.name;
  var age = req.params.age;
  var d = new Date().getFullYear();
  var bornIn = d - age;

  res.render('index.hbs', {
    name: name,
    bornIn: bornIn
  });
});



app.listen(3000, function() {
  console.log('Listening on *:3000');
});



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
