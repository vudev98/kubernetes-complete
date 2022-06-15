const express = require('express');
const app = express();

const path = require('path');
const port = 3000;

// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.send(`<h1> Hello from node App </h1>`);
});

app.get('/error', (req, res) => {
	process.exit(1);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
