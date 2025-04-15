const connection = require('../database/movieDb');
function index(req, res) {
    const sql = 'SELECT * FROM movies';
    connection.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Database non trovato' });
            return;
        }
        res.json(results);
        console.log('movies', results);
    });
}
module.exports = {
    index,
};