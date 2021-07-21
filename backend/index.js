const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');

const allowedOrigins = [ 'http://localhost:3000' ];
const options = (cors.CorsOptions = { origin: allowedOrigins });
app.use(cors(options));

app.get('/testing', (req, res) => {
	res.send('Get backend Hello World!');
});

// app.post('/', (req, res) => {
// 	res.send('Post backend Hello World!');
// });

app.listen(port, () => {
	console.log(`Bongomin backend listening on port ${port}`);
});
