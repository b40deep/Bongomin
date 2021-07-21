import { Link } from 'react-router-dom';

const Navbar = () => {
	let userName = '';
	console.log('Navbar loaded!');

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
					<Link to="/login">
						<button className="btn">Logout</button>
					</Link>
				</span>
			</div>
		</nav>
	);
};

export default Navbar;
