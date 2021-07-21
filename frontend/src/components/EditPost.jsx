import Navbar from './Navbar';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import '../css/Post.css';

const EditPost = () => {
	let userName = 'SoAndSo';
	let userLocation = 'Rich people apartments, Muyenga';
	let userItems = [ `Kid's coloring books`, `Oranges (6)`, `Hugs`, `Blender` ];
	let isDonating = false;
	let postType = isDonating ? 'donate' : 'request';
	let handleData = (e) => {
		e.preventDefault();
		console.log(e.target.name, '+++', e.target.value);
		e.target.name === 'update' && console.log(`...updating ${postType}...`);
		e.target.name === 'delete' && console.log(`...deleting ${postType}...`);
	};
	let userItemsList = userItems.map((item) => (
		<li className="list-group-item no-border" key={item}>
			<div className="col input-group ">
				<input
					type="text"
					className="form-control "
					name={userItems.indexOf(item)}
					id={userItems.indexOf(item)}
					defaultValue={item}
					onChange={handleData}
				/>
				<div
					className=" btn btn-outline-secondary input-group-text"
					onClick={() => console.log(item, 'has been deleted.')}
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
										<Link to="/profile" className="nolinkcolor">
											{' '}
											<div className="d-grid">
												<button
													className="btn btn-outline-secondary fst-italic fs-5 mt-3 "
													type="button"
													name="update"
													// onClick={handleData}
												>
													update {postType}!
												</button>
												<button
													className="btn btn-outline-secondary fst-italic fs-5 mt-3 "
													type="button"
													name="delete"
													// onClick={handleData}
												>
													delete {postType}!
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

export default EditPost;
