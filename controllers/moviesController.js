const connection = require('../data/db');

function index(req, res) {
    const sql = 'SELECT * FROM movies';

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Query error' });
        res.json(results);
    });
}

function show(req, res) {
    res.send('show movies');

}

module.exports = {
    index, show
};