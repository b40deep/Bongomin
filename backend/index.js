const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;
const mongoose = require('mongoose');
const CONNECTION_URL =
	'mongodb+srv://mongoUser:mongoPassword@rastacluster.j8oxf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose
	.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() =>
		app.listen(port, () => {
			console.log(`Bongomin to MongoDB on port ${port}`);
		})
	)
	.catch((err) => console.log(err.message));
mongoose.set('useFindAndModify', false);
const cors = require('cors');
const allowedOrigins = [ 'http://localhost:3000', '*' ];
const options = (cors.CorsOptions = { origin: allowedOrigins });
const postRouter = require('./routes/postRouter.js');
app.use(cors(options));
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

let testList = [ { id: 1, name: 'Kampala' }, { id: 2, name: 'Jinja' }, { id: 3, name: 'Mbale' } ];

app.use('/posts', postRouter);

// app.get('/', (req, res) => {
// 	res.json(testList);
// 	res.send('Get backend Hello World!');
// });

// app.post('/posts', (req, res) => {
// 	console.log('these are they', req.body);
// 	testList.push({ id: testList.length + 1, name: req.body });
// 	res.json(req.body);
// 	res.end();
// });
