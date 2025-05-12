const connection = require('../data/db');

function index(req, res) {
    // const sql = 'SELECT * FROM movies';
    const { search } = req.query;

    let sql = `
    SELECT movies.*,AVG(vote) AS voto_medio
    FROM movies
    LEFT JOIN reviews ON movies.id = reviews.movie_id
    `;

    if (search) {
        sql += `WHERE title LIKE "%${search}%" OR director LIKE "%${search}%" OR abstract LIKE "%${search}%"`;
    }

    sql += 'GROUP BY movies.id';

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Query error' });

        res.json(results.map(result => ({
            ...result,
            imagePath: process.env.SERVER_PATH + 'movies/' + result.image
        })));

    });
}

function show(req, res) {

    const { id } = req.params;

    const sql = 'SELECT * FROM movies WHERE id= ?';

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

module.exports = {
    index, show
};