var express = require('express')
var bodyParser = require('body-parser')
var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://sizzling-torch-8158.firebaseio.com/");
var app = express()

app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/pets', function (req, res) {
    myFirebaseRef.once("value", function(data) {
        res.send(data.val())
    });
})


app.post('/pets', function (req, res) {
    myFirebaseRef.push(req.body);
    res.sendStatus(200);
    res.send('COUCOU')
});


app.listen(3000)
