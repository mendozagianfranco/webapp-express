const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Home Movies');
});

app.listen(port, () => {
    console.log('Server in ascolto sul port: ' + port);
});