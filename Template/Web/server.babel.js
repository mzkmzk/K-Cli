var webpack = require('webpack');
var webpackConfig = require('./webpack.config.babel');
var compiler = webpack(webpackConfig);
var http = require('http');

var express = require('express');
 var app = express();
app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
  }));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/public');
});
if (require.main === module) {
  var server = http.createServer(app);
  server.listen(process.env.PORT || 4444, function() {
    console.log("Listening on %j", server.address());
  });
}