const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // res.send('<h1>Hello express</h1>');
    res.send({
        name: 'Terry',
        likes: ['Flying, music, coffee, beer']
    })
});

app.get('/about', (req, res) => {
    res.send('<h1>About page</h1>');
});

// /bad - send json with errorMessage prop
app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});