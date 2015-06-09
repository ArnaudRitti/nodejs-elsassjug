var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/pets', function (req, res) {
    var Heidi = new Object();
    Heidi.name = "Heidi";
    Heidi.kind  = 'Dog';
    Heidi.age = 3;

    var Plutot = new Object();
    Plutot.name = "Plutot";
    Plutot.kind  = 'Dog';
    Plutot.age = 14;

    var pets = [Heidi, Plutot];
  res.send(JSON.stringify(pets))
})

app.post('/pet', function (req, res) {
    if (!req.body) return res.sendStatus(400)
    res.json(req.body);
});

app.listen(3000)
