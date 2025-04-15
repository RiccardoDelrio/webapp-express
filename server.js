const express = require('express');
const cors = require('cors');
const app = express();
const port=3000;
const movie = require('./routes/movie.js');
//middleware
app.use(cors({
	origin: process.env.FONT_URL || 'http://localhost:5173',
}));

//body parser middleware
app.use(express.json());

//asset statici
app.use(express.static('public'));

//server in ascolto 
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});



app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/movies', movie);
3