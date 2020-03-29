const express = require('express');
const path = require('path');
const app = express();
const hbs = require('express-handlebars');


app.engine('hbs', hbs());
app.set('view engine', 'hbs');


app.use((req, res, next ) => {
    res.show = (name) => {
        res.sendFile(path.join(__dirname + `/views/${name}`));
    };
    next();
});

app.use('/user/', (req, res, next) => {
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

app.get('/hello/:name', (req, res) => {
    res.render('hello', { layout: false, name: req.params.name });
  });

app.get('/NotFound.png', (req, res) => {
    res.sendFile(path.join(__dirname + '/NotFound.png'));
});

app.use((req, res) => {
    res.status(404).show('404.html')
});

app.listen(9000, () => {
    console.log('Server is running on port: 9000');
});