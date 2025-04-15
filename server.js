const express = require('express');
const cors = require('cors');
const app = express();
const port=3000;

//middleware
app.use(cors({
	origin: process.env.FONT_URL || 'http://localhost:5173',
}));

//bodyparser middleware
app.use(express.json());


app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});


