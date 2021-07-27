import Navbar from './Navbar';
import Menu from './Menu';
// import { Link } from 'react-router-dom';
import '../css/Post.css';
import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
	let userName = 'SoAndSo';
	let userLocation = 'Rich people apartments, Muyenga';
	let isDonating = false;
	let postType = isDonating ? 'donation' : 'request';
	let [ newInputs, setNewInputs ] = useState([ 'input1' ]);
	let [ newItems, setNewItems ] = useState([]);
	let handleNewItem = (e) => {
		e.preventDefault();
		let temp = newItems;
		console.log('old temp', temp);
		temp[e.target.id] = e.target.value;
		setNewItems(newItems, temp);
		console.log('temp', newItems);
	};
	let handleAddInput = () => {
		setNewInputs([ ...newInputs, `input${newInputs.length + 1}` ]);
		console.log(newInputs);
	};
	let handleSubmit = () => {
		axios.post('http://localhost:3001/posts', {
			items: newItems,
			post_id: 404,
			type: 'Request',
			location: 'Eidinda',
			time: 'top of the hour'
		});
		console.log('data submitted to MongoDB sussessuwy');
	};
	let newPostItemsList = newInputs.map((post, index) => (
		<input
			type="text"
			form="listForm"
			key={index}
			id={index}
			className="form-control mt-3"
			placeholder={`type a ${postType} here`}
			name={post}
			onChange={handleNewItem}
		/>
	));
	return (
		<div>
			<Navbar />
			<div className="container ">
				<div className="row-cols-1">
					<div className="m-auto col-12 col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xxl-6">
						<div className="card mt-5">
							<div className="card-header bg-white d-grid">
								<span className="fst-italic mx-2">
									{userName} from {userLocation} has this {postType}:
								</span>
							</div>
							<div className="card-body ">
								<div className="d-grid">
									<form
									// name="listForm"
									// action="http://localhost:3001/createpost"
									// method="POST"
									>
										<div className="form-outline mb-4 mt-3 d-grid">
											{newPostItemsList}
											<button
												className="btn btn-sm btn-outline-secondary fst-italic  mt-3 "
												type="button"
												onClick={handleAddInput}
											>
												add another {postType} item
											</button>
										</div>
										{/* <Link to="/profile" className="nolinkcolor"> */}{' '}
										<div className="d-grid">
											<button
												className="btn btn-outline-secondary fst-italic fs-5 mt-3 "
												type="button"
												onClick={handleSubmit}
											>
												create {postType}!
											</button>
										</div>
										{/* </Link> */}
									</form>
								</div>
							</div>
							<div className="d-grid" />
						</div>
					</div>
				</div>
			</div>
			<Menu />{' '}
		</div>
	);
};

export default CreatePost;
