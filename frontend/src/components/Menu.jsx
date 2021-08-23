import React from 'react';
import { Link } from 'react-router-dom';

// import { useNavigate } from 'react-router-dom';
console.log('Menu loaded!');

const Menu = (props) => {
	// let navigate = useNavigate();
	let { page } = props;
	// console.log(page);
	let homeDefault =
		page === 'home' ? (
			<input
				type="radio"
				className="btn-check"
				name="btnradiohome"
				id="btnradio1"
				autoComplete="off"
				defaultChecked
			/>
		) : (
			''
		);
	let galleryDefault =
		page === 'gallery' ? (
			<input
				type="radio"
				className="btn-check"
				name="btnradiogallery"
				id="btnradio2"
				autoComplete="off"
				defaultChecked
			/>
		) : (
			''
		);
	let profileDefault =
		page === 'profile' ? (
			<input type="radio" className="btn-check" name="profile" id="btnradio3" autoComplete="off" defaultChecked />
		) : (
			''
		);

	let createDefault =
		page === 'create' ? (
			<input type="radio" className="btn-check" name="create" id="btnradio4" autoComplete="off" defaultChecked />
		) : (
			''
		);

	return (
		// <div className="row ">
		//
		// </div>
		<nav className="navbar fixed-bottom navbar-light bg-light">
			<div className="container-fluid  col-12 col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xxl-6">
				<div className="col btn-group" role="group" aria-label="Basic radio toggle button group">
					{homeDefault}

					<Link to="/" className="btn btn-outline-secondary" htmlFor="btnradiohome">
						<i className="bi bi-house-door-fill fs-5" />
						{/* <i class="bi bi-house-door"></i> */}
						{/* <span>Home</span> */}
					</Link>

					{galleryDefault}

					<Link
						to="/gallery"
						className="btn btn-outline-secondary"
						htmlFor="btnradiogallery"
						// onClick={() => navigate('/gallery')}
					>
						<i className="bi bi-images fs-5" />
						{/* <span>Pics</span> */}
					</Link>

					{profileDefault}

					<Link to="/profile" className="btn btn-outline-secondary" htmlFor="btnradioprofile">
						<i className="bi bi-person-fill fs-5" />
						{/* <span>You</span> */}
					</Link>

					{createDefault}

					<Link to="/createpost?type=r" className="btn btn-outline-secondary" htmlFor="btnradioprofile">
						<i className="bi bi-plus-circle fs-5" />
						{/* <span>New Post</span> */}
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Menu;
