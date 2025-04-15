const connection = require('../database/movieDb');

function index(req, res) {
    const sql = 'SELECT * FROM movies';
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Database error:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        if (!results || results.length === 0) {
            res.status(404).json({ error: 'No movies found' });
            return;
        }
        res.json(results);
    });
}

function show(req, res) {
    const sql = 'SELECT * FROM movies WHERE id = ?';
    connection.query(sql, [req.params.id], (err, results) => {
        if (err) {
            console.error('Database error:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        if (!results || results.length === 0) {
            res.status(404).json({ error: 'Movie not found' });
            return;
        }
        res.json(results[0]);
    });
}

module.exports = {
    index,
    show
};