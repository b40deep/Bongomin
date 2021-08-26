import utils from '../utils/Utils.js';

const Navbar = () => {
	let userName = '';
	console.log('Navbar loaded!');
	let loggedIn = utils.checkAccess('navbar') ? 'Leave' : 'Enter';

	let handleInOut = (e) => {
		e.preventDefault();
		// console.log('e target ', e.target.name);
		if (e.target.name === 'Leave') {
			utils.logout();
			window.location.replace('/login');
		} else {
			window.location.replace('/login');
		}
	};

	return (
		<nav className="navbar  sticky-top navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
					<i className="bi bi-bootstrap-fill" />
					<span className="mx-2">{userName ? userName + ' loves Bongomin' : 'Bongomin'}</span>
				</a>
				<span className="text-muted fs-6 mx-2">
					{' '}
					Location-based generosity <i className="bi bi-suit-heart-fill ms-1" />
					<button className="btn" onClick={handleInOut} name={loggedIn}>
						{loggedIn}
					</button>
				</span>
			</div>
		</nav>
	);
};

export default Navbar;
