const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/sample-angular'));

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/dist/sample-angular/index.html')
});

app.listen(4200);