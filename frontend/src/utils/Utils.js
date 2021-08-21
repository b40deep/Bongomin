const saveToken = (token) => {
	// localStorage.setItem('token', responseObj.token);
	// localStorage.setItem('expires',);
	document.cookie = 'token=' + token;
	// console.log('reached utils ', token);
};

const logout = () => {
	localStorage.removeItem('token');
};

const isLoggedIn = () => {};

const isLoggedOut = () => {
	document.cookie = 'token=';
};

const getExpiration = () => {};

const checkAccess = (sender) => {
	console.log('check access from ', sender);
	if (getCookie['token'] === undefined || getCookie['token'].length < 3) window.location.replace('/login');
};

const getCookie = (cookieName) => {
	let cookies = document.cookie
		.split(';')
		.map((cookie) => cookie.split('='))
		.reduce((accumulator, [ key, value ]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});
	return cookies[cookieName];
};

module.exports = { saveToken, logout, isLoggedIn, isLoggedOut, getExpiration, getCookie, checkAccess };
