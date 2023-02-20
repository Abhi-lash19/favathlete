const http = require('http')
const express = require('express');
const app = express();
const port = 8000;

const server = http.createServer(app)

module.exports = server
app.get('/athlete', (req, res) => {
    res.send({"myFavouriteAthlete": "MS Dhoni"});
});


app.listen(port, () => {
    console.log('server running on port 8000');
});
