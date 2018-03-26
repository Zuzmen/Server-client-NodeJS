const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

let serverNumber,
  historyString,
  userNumber;

app.get('/', (req, res) => {
  serverNumber = Math.floor(Math.random() * 10000) + 1;
  historyString = '';
  res.render('index', {serverNumber, userNumber, historyString});
});

app.get('/game', (req, res) => {
  res.redirect('/');
});

app.post('/game', (req, res) => {
  userNumber = req.body.userNumber;
  historyString = historyString + userNumber + ', ';
  res.render('index', {serverNumber, historyString, userNumber});
});

app.listen(3000, () => {
  console.log('Server running on port 3000!');
});
