const express = require('express');
const app = express();
const port = process.env.PORT;
const moviesRouter = require('./routers/moviesRouter');
const notFound = require('./middlewares/notFound');
const errorsHandler = require('./middlewares/errorsHandler');
const cors = require('cors');

app.use(cors({
    origin: process.env.FE_APP
}));

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Home Movies');
});

app.use('/api/movies', moviesRouter);

app.use(errorsHandler);
app.use(notFound);

app.listen(port, () => {
    console.log('Server in ascolto sul port: ' + port);
});