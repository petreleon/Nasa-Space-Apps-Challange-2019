var express = require('express');
var app = express();
port = 5000;
app.use(express.static('public')); 
app.use(express.static('node_modules'));
app.listen(port, () => console.log(`game app listening on port ${port}!`))