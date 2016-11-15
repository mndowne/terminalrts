var express = require('express');
var app = express();

app.use(express.static(__dirname + '/client/css/'));
app.use(express.static(__dirname + '/client/'));


app.get('/', function(req,res){
  res.sendFile(__dirname + '/client/index.html');
});


app.listen(3000, function(){
  console.log('Server is up on port 3000');
});
