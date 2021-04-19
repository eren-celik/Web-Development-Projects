
const express = require('express');
const app = express();


app.get('/', function (_, res) {
    res.send("<h1>Hello</h1>");
});

app.get('/iletisim', function (_, res) {
    res.get("Contact Me : elik.dark@gmail.com");
});

app.listen(3000, function () {
    console.log('Server Started on port 3000')
})

