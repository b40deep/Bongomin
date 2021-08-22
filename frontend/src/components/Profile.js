import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../css/Post.css';
import Menu from './Menu';
import Navbar from './Navbar';
import axios from 'axios';
import utils from '../utils/Utils';
const Profile = () => {
	utils.authenticateUserToken('profile');

	let userName = 'dapper developer';
	let userLocation = 'Kampala II Rd., Kampala';
	let [ editUserDetails, setEditUserDetails ] = useState(false);
	let userPhone = [ '0700-123-456', false, '0777-987-654', true ];
	let [ userDonations, setUserDonations ] = useState([
		[ `Kid's coloring books`, `Oranges (6)`, `Hugs`, `Blender` ],
		[ `Dancing shoes`, `Soap`, `old working Printer`, `5x6 duvet` ]
	]);
	let [ userRequests, setUserRequests ] = useState([
		[ `Walking partner`, `laptop repair (Windows)` ],
		[ `Homeschool teacher` ],
		[ `potted plants advice`, `teach me knitting`, `jogging partner` ]
	]);
	useEffect(
		//This logic should be done BEFORE page render but is currently not the case.
		() => {
			let tempDonations = [];
			console.log(userDonations);
			axios.get('http://localhost:3001/posts').then((res) =>
				res.data.forEach((arr) => {
					if (arr.type === 'Donation') {
						Object.values(arr.items).map((val) => tempDonations.push(val));
						console.log('don added', tempDonations);
					} else {
						userRequests.push(arr.items);
						console.log('req added', arr.items);
					}
				})
			);

			setUserDonations(userDonations);
			setUserRequests(userRequests);
			console.log(userDonations);
		},
		[ userDonations, userRequests ]
	);
	console.log('Profile loaded!');
	let handleEditToggle = () => {
		editUserDetails ? setEditUserDetails(false) : setEditUserDetails(true);
	};
	let userDonationsList = userDonations.map((donation) => (
		<li key={userDonations.indexOf(donation)} className="list-group-item no-border">
			<Link to="/editpost" className="nolinkcolor">
				<div className="card btn">
					{/* <i className="bi bi-arrow-up-right-circle" /> */}
					<span className="mx-2">
						{donation[0]} {donation.length - 1 > 0 && 'and '}
						{donation.length - 1 === 1 && `${donation.length - 1} other item.`}
						{donation.length - 1 > 1 && `${donation.length - 1} other items.`}
					</span>
					{/* <i className="bi bi-x-circle-fill mx-3" onClick={() => console.log(donation)} /> */}
				</div>
			</Link>
		</li>
	));
	let userRequestsList = userRequests.map((request) => (
		<li key={userRequests.indexOf(request)} className="list-group-item no-border">
			<div className="card btn">
				{/* <i className="bi bi-arrow-down-left-circle" /> */}
				<span className="mx-2">
					{request[0]} {request.length - 1 > 0 && 'and '}
					{request.length - 1 === 1 && `${request.length - 1} other item.`}
					{request.length - 1 > 1 && `${request.length - 1} other items.`}
				</span>
				{/* <i className=" bi bi-x-circle-fill mx-3 " onClick={() => console.log(request)} /> */}
				{console.log('req list generated')}
			</div>
		</li>
	));
	let userPhoneList = [];
	for (let index = 0; index < userPhone.length; index++) {
		// console.log(`before ` + index);
		userPhoneList.push(
			editUserDetails ? (
				<li key={index} className="list-group-item no-border">
					<i className="bi bi-telephone-fill" /> <span className="mx-2">phone:</span>
					<input type="text" className="fst-italic mx-2" defaultValue={userPhone[index]} />
					{userPhone[index + 1] && (
						<span className="form-check form-check-inline">
							<input className="form-check-input mx-2" type="checkbox" id={`checkWhatsapp${index}`} />
							<label className="form-check-label fst-italic">Whatsapp</label>
						</span>
					)}
				</li>
			) : (
				<li key={index} className="list-group-item no-border">
					<i className="bi bi-telephone-fill" /> <span className="mx-2">phone:</span>
					<span type="text" className="fst-italic mx-2">
						{userPhone[index]}
					</span>
					{userPhone[index + 1] && (
						<span className="form-check form-check-inline">
							<input className="form-check-input mx-2" type="checkbox" id={`checkWhatsapp${index}`} />
							<label className="form-check-label fst-italic">Whatsapp</label>
						</span>
					)}
				</li>
			)
		);

		// console.log(`item stored ` + userPhone[index]);
		// console.log(`item stored bool ` + userPhone[index + 1]);
		index++;
		// console.log(`after ` + index);
	}

	return (
		<div>
			<Navbar />
			<div className="container ">
				<div className="row-cols-1">
					<div className="m-auto col-12 col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xxl-6">
						<div className="card mt-5">
							<div className="card-header bg-white d-grid">
								<ul className=" list-group list-group-flush">
									<li className="list-group-item no-border">
										<i className="bi bi-person-fill" />
										<span className="fst-italic mx-2">nickname:</span>
										{editUserDetails ? (
											<input className="mx-2" type="text" defaultValue={userName} />
										) : (
											<span className="mx-2" type="text">
												{' '}
												{userName}{' '}
											</span>
										)}
									</li>
									{userPhoneList}
									{editUserDetails ? (
										<li className="list-group-item no-border">
											<i className="bi bi-geo-alt-fill" />{' '}
											<span className="fst-italic mx-2">location:</span>
											<input className="mx-2" defaultValue={userLocation} />
										</li>
									) : (
										<li className="list-group-item no-border">
											<i className="bi bi-geo-alt-fill" />{' '}
											<span className="fst-italic mx-2">location:</span>
											<span className="mx-2">{userLocation}</span>
										</li>
									)}
								</ul>
								<Link to="" className="nolinkcolor">
									{' '}
									<div className="d-grid">
										{editUserDetails && (
											<button
												className="btn btn-outline-secondary fst-italic fs-5 mt-3"
												type="button"
												onClick={handleEditToggle}
											>
												save changes
											</button>
										)}
										<button
											className="btn btn-outline-secondary fst-italic fs-5 my-3"
											type="button"
											onClick={handleEditToggle}
										>
											{!editUserDetails && 'make some edits'}
											{editUserDetails && 'cancel'}
										</button>
									</div>
								</Link>
							</div>
							<div className="card-body ">
								<div className="d-grid">
									<h5 className="card-title mt-2">Items you're donating:</h5>
									<ul className="list-group list-group-flush">{userDonationsList}</ul>
									<Link to="/createpost" className="nolinkcolor">
										<div className="d-grid">
											<button
												className="btn btn-outline-secondary fst-italic fs-5 my-3 "
												type="button"
											>
												have something? make a donation!
											</button>
										</div>
									</Link>
									{/* insert horizontal divider here*/}
									<hr className="dropdown-divider" />
									<h5 className="card-title mt-3">Items you're requesting:</h5>
									{/* list of needs dynamically*/}
									<ul className="list-group list-group-flush">{userRequestsList}</ul>
									<Link to="/createpost" className="nolinkcolor">
										<div className="d-grid">
											<button
												className="btn btn-outline-secondary fst-italic fs-5 mt-3 "
												type="button"
											>
												need something? make a request!
											</button>
										</div>
									</Link>
								</div>
							</div>
							<div className="d-grid" />
						</div>
					</div>
				</div>
			</div>
			<Menu page="profile" />{' '}
		</div>
	);
};

export default Profile;
