const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');

const allowedOrigins = [ 'http://localhost:3000' ];
const options = (cors.CorsOptions = { origin: allowedOrigins });
app.use(cors(options));
app.use(bodyParser.json({limit:"10mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"10mb",extended:true}));

let testList=[{"id":1,"name":"Kampala"},{"id":2,"name":"Jinja"},{"id":3,"name":"Mbale"}];

app.get('/testing', (req, res) => {
	res.json(testList);
	res.send('Get backend Hello World!');
});

app.post('/createpost', (req, res) => {
	console.log('these are they',req.body);
	res.json(req.body);
	res.end();
});

app.listen(port, () => {
	console.log(`Bongomin backend listening on port ${port}`);
});
