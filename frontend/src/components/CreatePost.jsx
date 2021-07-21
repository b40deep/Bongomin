import Navbar from './Navbar';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import '../css/Post.css';
import React, { useState } from 'react';

const CreatePost = () => {
	let userName = 'SoAndSo';
	let userLocation = 'Rich people apartments, Muyenga';
	let isDonating = false;
	let postType = isDonating ? 'donate' : 'request';
	let handleSubmit = () => {};
	let handleAddInput = () => {
		console.log(newPostItems);
		setNewPosItems([ ...newPostItems, `input${newPostItems.length + 1}` ]);
	};
	let [ newPostItems, setNewPosItems ] = useState([ 'input1' ]);
	let newPostItemsList = newPostItems.map((post, index) => (
		<input
			type="text"
			key={index}
			id={post}
			className="form-control mt-3"
			placeholder={`type a ${postType} here`}
			name={post}
			onChange={handleSubmit}
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
									<form>
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
										<Link to="/profile" className="nolinkcolor">
											{' '}
											<div className="d-grid">
												<button
													className="btn btn-outline-secondary fst-italic fs-5 mt-3 "
													type="button"
													onClick={handleSubmit}
												>
													create {postType}!
												</button>
											</div>
										</Link>
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
