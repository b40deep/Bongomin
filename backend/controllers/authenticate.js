const jwt = require('jsonwebtoken');

const verifyUserToken = (req, res) => {
	let token = req.headers.cookie && req.headers.cookie.split('=')[1].toString();
	console.log('validate user_', token);
	if (token == null) res.json({ response: 'loginDenied' });
	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
		if (err) {
			res.json({ response: 'loginDenied' });
		} else {
			req.user = user;
			console.log('____auth: ', user);
			res.json({ response: 'loginSuccess' });
		}
	});
};

const verifyUserTokenNext = (req, res, next) => {
	let token = req.headers.cookie && req.headers.cookie.split('=')[1].toString();
	console.log('validate user_', token);
	if (token == null) res.json({ response: 'loginDenied' });
	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
		if (err) {
			res.json({ response: 'loginDenied' });
		} else {
			req.user = user;
			console.log('____auth: ', user);
			next();
		}
	});
};

// //authenticating the JWT Tokens
// const authenticateToken = (req, res, next) => {
// 	// const authHeader = req.headers['authorization'];
// 	console.log('reached auth token');
// 	console.log(`from auth is ${req.headers.authorization}`);
// 	console.log(`from auth is ${req.headers['authorization']}`);
// 	// return res.json(req);
// 	// next();
// };

module.exports = { verifyUserToken, verifyUserTokenNext };
