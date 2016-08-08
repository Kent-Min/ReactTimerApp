var express = require ('express');

// Create our app

var app = express ();
const PORT = process.env.PORT || 3000;


// mid-ware
//this fixed the local host; only change was http -> https
app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://'+ req.hostname + req.url);
  } else {
    next();
  }

});

app.use(express.static('public'));


app.listen(PORT,function(){
  console.log('Express server is up on port ' + PORT);

});