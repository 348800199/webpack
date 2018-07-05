
var sub = require('./sub');
var sb = require('./sb');
var app = document.createElement('div');
app.innerHTML = '<h1>Hello World</h1>';
app.appendChild(sub());
app.appendChild(sb());
document.body.appendChild(app);
require('./main.css');