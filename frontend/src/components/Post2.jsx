import React, { useState } from 'react';
import '../css/Post.css';

const Post = () => {
	let imageUrl = 'https://picsum.photos/540/320?grayscale&random=' + Math.round(Math.random() * (9 - 1) + 1);
	console.log(imageUrl);
	let userLocation = 'Muyenga Tank Hill, Muyenga';
	let isItDonation = true;
	let userDonations1 = [ `Kid's coloring books`, `Oranges (6)`, `Hugs`, `Blender` ];
	// let userDonations2 = [ `Dancing shoes`, `Soap`, `old working Printer`, `5x6 duvet` ];
	const [ isOpened, setIsOpened ] = useState(false);
	const [ helpWith, setHelpWith ] = useState([]);

	function loadPostDetails() {
		setHelpWith([]);
		setIsOpened((wasOpened) => !wasOpened);
		console.log('extra details loaded');
	}
	let userDonationsList = !isOpened
		? userDonations1.map((donation, index) => (
				<li className="list-group-item no-border" key={index}>
					<i className="bi bi-arrow-right-square" />
					<span className="mx-2">{donation}</span>
				</li>
			))
		: userDonations1.map((donation, index) => (
				<li className="list-group-item no-border form-check form-check-inline" key={index}>
					<input className="form-check-input mx-1" type="checkbox" id={donation} onChange={handleCheckbox} />
					<label className="form-check-label fst-italic">{donation}</label>
				</li>
			));
	function handleCheckbox(e) {
		e.target.checked
			? setHelpWith([ ...helpWith, e.target.id ])
			: setHelpWith((old) => old.filter((item) => item !== e.target.id));
		console.log(helpWith);
	}
	return (
		<div className="card mt-5">
			<div className="card-header">
				<i className="bi bi-arrow-up-right-circle" />
				{/* <i className="bi bi-arrow-down-left-circle" /> */}
				<span className="fst-italic mx-2">
					{isItDonation && 'Donation'} from {userLocation}.
				</span>
			</div>
			<img src={imageUrl} className="card-img-top" alt="S/O to Lorem Picsum" />
			{isOpened && (
				<span className="list-group-item  no-border">
					<i className="bi bi-arrow-right-square" />
					<span className="mx-2">Pick the items you need:</span>
				</span>
			)}
			<ul className="list-group list-group-flush">{userDonationsList}</ul>
			<div className="d-grid">
				{helpWith.length > 0 && (
					<button className="btn btn-outline-secondary fst-italic " type="button">
						<i className="bi bi-telephone-fill mx-2" />
						{userLocation}: 0700-664-422
					</button>
				)}
				<button className="btn btn-outline-secondary fst-italic fs-5" type="button" onClick={loadPostDetails}>
					{isItDonation && !isOpened && 'I need this!'}
					{isItDonation && isOpened && 'cancel'}
				</button>
			</div>
		</div>
	);
};

export default Post;
