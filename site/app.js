const express = require('express');
const {static} = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});
app.get('/login.html', (req, res) => {
    res.sendFile(__dirname + '/login.html')
});
app.get('/register.html', (req, res) => {
    res.sendFile(__dirname + '/register.html')
});
app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});
app.get('*', (res, req) => {
    res.statusCode(400).send('No encontrada')
});

app.listen(3000, ()=> console.log('server corriendo'));