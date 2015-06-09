var express = require('express')
var bodyParser = require('body-parser')
var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://sizzling-torch-8158.firebaseio.com/");
var swig  = require('swig');


var app = express()

app.use(bodyParser.json())
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/tpl');

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/pets', function (req, res) {
    var datasJSON = null;
    myFirebaseRef.once("value", function(data) {
        var datasJSON = data.val();
        res.render('list', {
            pagename: 'Liste of Datas',
            datas: datasJSON
        });
    });

})


app.post('/pets', function (req, res) {
    myFirebaseRef.push(req.body);
    res.sendStatus(200);
    res.send('COUCOU')
});


app.listen(3000)
