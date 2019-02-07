'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static(__dirname));

app.all('/*', function (request, response) {
  response.sendFile(_path2.default.join(__dirname, 'index.html'));
});

var PORT = process.env.PORT || 5020;

app.listen(PORT, function () {
  return console.log('App is running on port ' + PORT);
});