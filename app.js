require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Fran Rodriguez',
        titulo: 'Página creada con HBS'

    });
});

app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Fran Rodriguez',
        titulo: 'Página creada con HBS'

    });
});

app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Fran Rodriguez',
        titulo: 'Página creada con HBS'

    });
});


app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html')
});
  
app.listen(port, () => { 
    console.log(`Listenening at localhost:${port}`)
});