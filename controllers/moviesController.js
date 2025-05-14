const connection = require('../data/db');

function index(req, res) {
    // const sql = 'SELECT * FROM movies';
    const { search } = req.query;

    //parametri della query
    const preparedParams = [];

    let sql = `
    SELECT movies.*,ROUND(AVG(vote),2) AS voto_medio
    FROM movies
    LEFT JOIN reviews ON movies.id = reviews.movie_id
    `;

    if (search) {
        sql += `WHERE title LIKE ? OR director LIKE ? OR abstract LIKE ?`;
        preparedParams.push(`%${search}%`, `%${search}%`, `%${search}%`);
    }

    sql += 'GROUP BY movies.id';

    connection.query(sql, preparedParams, (err, results) => {
        if (err) return res.status(500).json({ error: 'Query error' });

        res.json(results.map(result => ({
            ...result,
            imagePath: process.env.SERVER_PATH + 'movies/' + result.image
        })));

    });
}

function show(req, res) {

    const { id } = req.params;

    const sql = `
    SELECT movies.*,ROUND(AVG(vote),2) AS voto_medio
    FROM movies
    LEFT JOIN reviews ON movies.id = reviews.movie_id
    WHERE movies.id = ?
    `;

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Query error' });

        if (results.length === 0) return res.status(404).json({ error: 'Movie not Found' });

        const currentMovie = results[0];

        const sql = 'SELECT * FROM reviews WHERE movie_id = ? ';

        connection.query(sql, [id], (err, resultsReviews) => {
            if (err) return res.status(500).json({ error: 'Query error' });


            res.json({
                ...currentMovie,
                image: process.env.SERVER_PATH + 'movies/' + currentMovie.image,
                reviews: resultsReviews
            });
        });
    });

}


function storeReview(req, res) {
    const { id } = req.params;
    const { name, vote, text } = req.body;

    const sql = `INSERT INTO reviews (movie_id, name, vote, text) VALUES (?,?,?,?)`;

    connection.query(sql, [id, name, vote, text], (err, results) => {
        if (err) return res.status(500).json({ error: 'Query error' });

        const sql = `SELECT * FROM reviews WHERE id = ${results.insertId}`;

        connection.query(sql, (err, results) => {
            if (err) return res.status(500).json({ error: 'Query error' });
            res.status(201).json(results);
        });

    });
}

module.exports = {
    index, show, storeReview
};