import Navbar from './Navbar';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../css/Post.css';
import axios from 'axios';

const EditPost = () => {
	let userName = 'SoAndSo';
	let userLocation = 'Rich people apartments, Muyenga';
	let [ userItems, setUserItems ] = useState([ `Kid's coloring books`, `Oranges (6)`, `Hugs`, `Blender` ]);
	let post_id = '61015a3d54ea4e53fd66b4c3';
	let isDonating = false;
	let postType = isDonating ? 'donate' : 'request';
	let updateArrayData = (e) => {
		e.preventDefault();
		//get array from state, update it, and setState
		let temp = userItems;
		temp[e.target.id] = e.target.value;
		setUserItems(temp);
		console.log(userItems);
		// console.log(e.target.name, '+++', e.target.value, e.target.id);
	};
	function updatePost() {
		//first check input for empties
		let temp = userItems.filter((item) => item.length > 0);
		console.log(temp);
		if (temp.length === 0) {
			deletePost(post_id);
		} else {
			setUserItems(temp);
			//axios put to edit a particular items array and update at selected index.
			axios.put(`http://localhost:3001/posts/${post_id}`, { items: userItems }).then((res) => console.log(res));
		}
		console.log(`...updating ${post_id}...`, userItems);
	}
	function deletePost() {
		axios.delete(`http://localhost:3001/posts/${post_id}`).then((res) => console.log(res));
		console.log(`...deleting ${post_id}...`);
	}
	function deletePostItem(index) {
		// e.preventDefault();
		let temp = userItems.filter((item) => userItems.indexOf(item) !== index);
		setUserItems(temp);
		console.log('shrunk', temp, userItems);
	}
	let userItemsList = userItems.map((item) => (
		<li className="list-group-item no-border" key={item}>
			<div className="col input-group ">
				<input
					type="text"
					className="form-control "
					name={userItems.indexOf(item)}
					id={userItems.indexOf(item)}
					defaultValue={item}
					onChange={updateArrayData}
				/>
				<div
					className=" btn btn-outline-secondary input-group-text"
					onClick={() => deletePostItem(userItems.indexOf(item))}
				>
					<i className="bi bi-x-circle-fill mx-3" />
				</div>
			</div>
		</li>
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
									{userName} from {userLocation} is editing this {postType}:
								</span>
							</div>
							<div className="card-body ">
								<div className="d-grid">
									<form>
										<div className="form-outline mb-4 mt-3">
											<ul className=" list-group list-group-flush">{userItemsList}</ul>
										</div>
										{/* <Link to="/profile" className="nolinkcolor"> */}{' '}
										<div className="d-grid">
											<button
												className="btn btn-outline-secondary fst-italic fs-5 mt-3 "
												type="button"
												name="update"
												onClick={updatePost}
											>
												update {postType}!
											</button>
											<button
												className="btn btn-outline-secondary fst-italic fs-5 mt-3 "
												type="button"
												name="delete"
												onClick={deletePost}
											>
												delete {postType}!
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

export default EditPost;
