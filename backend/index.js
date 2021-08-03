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
const userRouter = require('./routes/userRouter.js');
app.use(cors(options));
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

let testList = [
	{ nickname: 'uncle', phone: '07123456789', pin: '1234', location: 'Kiwatule' },
	{ nickname: 'aine', phone: '07987654321', pin: '0000', location: 'Nansana' },
	{ nickname: 'name', phone: '0011223344', pin: '1234', location: 'Nansana' },
	{ nickname: 'akello', phone: '0711112222', pin: '1111', location: 'Natete' }
];

app.use('/posts', postRouter);
app.use('/users', userRouter);

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

// app.post('/login', (req, res) => {
// 	console.log('backend login ', req.body);
// 	let user = testList.find((user) => user.nickname === req.body.nickname);
// 	if (user == null) {
// 		console.log('user not found');
// 		return res.send('Cannot find user');
// 	}
// 	try {
// 		if (req.body.pin === user.pin) {
// 			res.send('Success');
// 		} else {
// 			res.send('Not Allowed');
// 		}
// 	} catch (error) {
// 		res.status(500).send('Error');
// 	}
// });

// app.post('/signup', (req, res) => {
// 	console.log('backend signup ', req.body);
// 	testList.push(req.body);
// 	res.send('Success');
// 	// res.send(req.body);
// });

// app.get('/users', (req, res) => {
// 	console.log('backend getUserList ');
// 	res.json(testList);
// 	res.end();
// });
