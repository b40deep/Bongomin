import '../css/Post.css';
import React from 'react';
import Navbar from './Navbar';
import Menu from './Menu';
import utils from '../utils/Utils';

const Gallery = () => {
	utils.authenticateUserToken('gallery');
	function getImageUrl() {
		return 'https://picsum.photos/540/320?grayscale&random=' + Math.round(Math.random() * (29 - 20) + 1);
	}
	let userLocation = 'Corperation Rd., Nansana';
	let userName = 'needs_deeds';
	let donorName = 'Mugezigezi';
	console.log('Gallery loaded!');
	return (
		<div>
			<Navbar />
			<div className="container ">
				<div className="row-cols-1">
					<div className="m-auto col-12 col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xxl-6">
						{' '}
						<div className="card mt-5">
							<div className="card-header">
								<i className="bi bi-arrow-down-left-circle" />
								<span className="fst-italic mx-2">
									Request from {userName} of {userLocation} was fulfilled by {donorName}.
								</span>
							</div>
							<img src={getImageUrl()} className="card-img-top" alt="S/O to Lorem Picsum" />
						</div>
						<div className="card mt-5">
							<div className="card-header">
								<i className="bi bi-arrow-down-left-circle" />
								<span className="fst-italic mx-2">
									Donation from {userName} of {userLocation} helped {donorName} and 2 others.
								</span>
							</div>
							<img src={getImageUrl()} className="card-img-top" alt="S/O to Lorem Picsum" />
						</div>
						<div className="card mt-5">
							<div className="card-header">
								<i className="bi bi-arrow-down-left-circle" />
								<span className="fst-italic mx-2">
									Request from {userName} of {userLocation} was fulfilled by {donorName}.
								</span>
							</div>
							<img src={getImageUrl()} className="card-img-top" alt="S/O to Lorem Picsum" />
						</div>
						<div className="card mt-5">
							<div className="card-header">
								<i className="bi bi-arrow-down-left-circle" />
								<span className="fst-italic mx-2">
									Donation from {userName} of {userLocation} helped {donorName} and 2 others.
								</span>
							</div>
							<img src={getImageUrl()} className="card-img-top" alt="S/O to Lorem Picsum" />
						</div>
						<div className="card mt-5">
							<div className="card-header">
								<i className="bi bi-arrow-down-left-circle" />
								<span className="fst-italic mx-2">
									Donation from {userName} of {userLocation} helped {donorName} and 2 others.
								</span>
							</div>
							<img src={getImageUrl()} className="card-img-top" alt="S/O to Lorem Picsum" />
						</div>
						<div className="card mt-5">
							<div className="card-header">
								<i className="bi bi-arrow-down-left-circle" />
								<span className="fst-italic mx-2">
									Request from {userName} of {userLocation} was fulfilled by {donorName}.
								</span>
							</div>
							<img src={getImageUrl()} className="card-img-top" alt="S/O to Lorem Picsum" />
						</div>
						<div className="mt-5" />
					</div>
					<Menu page="gallery" />
				</div>
			</div>
		</div>
	);
};

export default Gallery;
