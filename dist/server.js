var express = require('express');
var history = require('connect-history-api-fallback');
const app = express();

const staticFileMiddleware = express.static(__dirname);
app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);

var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
