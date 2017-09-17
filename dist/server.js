// var sslRedirect = require('heroku-ssl-redirect');

var express = require('express');
var app = express();
var path = require('path');
var serveStatic = require('serve-static');

app.use(serveStatic(__dirname));

app.get('*',function(req,res,next){
  if(req.headers['x-forwarded-proto']!='https')
    res.redirect('https://mypreferreddomain.com'+req.url)
  else
    next() /* Continue to other routes if we're not redirecting */
})

var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);