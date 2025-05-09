const express = require('express');
const app = express();
const port = process.env.PORT;
const moviesRouter = require('./routers/moviesRouter');
const notFound = require('./middlewares/notFound');
const errorsHandler = require('./middlewares/errorsHandler');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Home Movies');
});

app.use('/movies', moviesRouter);

app.use(notFound);
app.use(errorsHandler);

app.listen(port, () => {
    console.log('Server in ascolto sul port: ' + port);
});