const express = require('express');
const path = require('path');
const app = express();

app.use((req, res, next ) => {
    res.show = (name) => {
        res.sendFile(path.join(__dirname + `/views/${name}`));
    };
    next();
});

app.get('/user/', (req, res) => {
    res.show('forbidden.html');
});

app.get('/', (req, res) => {
    res.show('home.html');
});

app.get('/home', (req, res) => {
    res.show('home.html');
});

app.get('/about', (req, res) => {
    res.show('about.html');
});





app.listen(9000, () => {
    console.log('Server is running on port: 9000');
});