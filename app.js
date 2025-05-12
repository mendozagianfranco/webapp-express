const express = require('express');
const app = express();
const port = process.env.PORT;
const moviesRouter = require('./routers/moviesRouter');
const notFound = require('./middlewares/notFound');
const errorsHandler = require('./middlewares/errorsHandler');

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Home Movies');
});

app.use('/movies', moviesRouter);

app.use(errorsHandler);
app.use(notFound);

app.listen(port, () => {
    console.log('Server in ascolto sul port: ' + port);
});