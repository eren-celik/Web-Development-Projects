const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})
app.post("/", function (req, res) {
    const query = req.body.cityName
    const apiKey = "8fca1ff24f619aceb8a4b207315b962c"

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + query + '&appid=' + apiKey + '&units=metric'


    https.get(url, function (response) {
        console.log('Status Code ' + response.statusCode);

        response.on('data', function (data) {
            const jsons = JSON.parse(data)
            const temp = jsons.main.temp
            const cityName = jsons.name
            const descrition = jsons.weather[0].description
            const icon = jsons.weather[0].icon
            const imageurl = 'http://openweathermap.org/img/wn/' + icon + '@2x.png'


            res.write("<html>")
            res.write("Weather Status " + descrition)
            res.write(" Weather City " + cityName)
            res.write("Weather Temp " + temp)
            res.write("<img src=" + imageurl + ">")
            res.write("</html>")
            res.send()
        })
    })

})

app.listen(3000, function () {
    console.log("Server Started 3000 port")
});





