const axios = require('axios');

let loggedIn = false;

const saveToken = (token) => {
	// localStorage.setItem('token', responseObj.token);
	// localStorage.setItem('expires',);
	document.cookie = 'token=' + token;
	// console.log('reached utils ', token);
	loggedIn = true;
};

const logout = () => {
	// localStorage.removeItem('token');
	document.cookie = 'token= ;expires=Thu, 01 Jan 1970 00:00:00 UTC';
	loggedIn = false;
};

const isLoggedIn = () => {
	return loggedIn;
};

const isLoggedOut = () => {
	return !isLoggedIn();
};

const getExpiration = () => {};

const checkAccess = (sender) => {
	console.log('check access from ', sender);
	// getCookie('token');
	if (getCookie('token') === undefined || getCookie('token').length < 3) {
		loggedIn = false;
		return loggedIn;
	} else {
		loggedIn = true;
		return loggedIn;
	}
};

const getCookie = (cookieName) => {
	let cookies = document.cookie
		.split(';')
		.map((cookie) => cookie.split('='))
		.reduce((accumulator, [ key, value ]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});
	return cookies[cookieName];
	// console.log('getCookie ', cookies[cookieName]);
};

const authenticateUserToken = (sender) => {
	//check if Token is stored in browser
	let accessToken = checkAccess(sender);
	if (!accessToken) {
		window.location.replace('/login');
	} else {
		//check if Token is valid
		axios
			.post('http://localhost:3001/users/', null, {
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then((res) => {
				console.log('validating...', res.data, res.status);
				switch (res.data.response) {
					case 'loginSuccess':
						console.log('Authorized Access');
						break;
					case 'loginDenied':
						console.log('Unauthorized Access');
						window.location.replace('/login');
						break;
					default:
						console.log('Some error occured');
						break;
				}
			})
			.catch((err) => console.log('Server Error'));
	}
};

module.exports = {
	saveToken,
	logout,
	isLoggedIn,
	isLoggedOut,
	getExpiration,
	getCookie,
	checkAccess,
	authenticateUserToken
};
