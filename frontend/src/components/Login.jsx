import Navbar from './Navbar';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import '../css/Post.css';

const Login = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target.name, '+++', e.target.value);
		e.target.name === 'submit' && console.log('...redirecting to database...');
	};
	return (
		<div>
			<Navbar />
			<div className="container ">
				<div className="row-cols-1">
					<div className="m-auto col-12 col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xxl-6">
						<form>
							<div className="form-outline mb-4 mt-3">
								<input
									type="text"
									id="formNickname"
									className="form-control "
									placeholder="nickname"
									name="nickname"
									onChange={handleSubmit}
								/>
							</div>
							<div className="form-outline mb-4 mt-3">
								<input
									type="text"
									id="formPhone"
									className="form-control "
									placeholder="phone number"
									name="phone"
									onChange={handleSubmit}
								/>
							</div>

							<div className="form-outline mb-3">
								<input
									type="text"
									id="formPin"
									className="form-control "
									placeholder="4-digit pin"
									name="pin"
									onChange={handleSubmit}
								/>
								{/* {                    <label className="form-label" htmlFor="form3Example4">
                                Password
                            </label>} */}
							</div>
							<div className="form-outline mb-4 mt-3 row">
								<div className="col input-group">
									<input
										type="text"
										id="formLocation"
										className="form-control "
										placeholder="location"
										name="location"
										onChange={handleSubmit}
									/>
									<div
										className=" btn btn-outline-secondary input-group-text"
										onClick={() => console.log('loading map...')}
									>
										click for map
									</div>
								</div>
							</div>

							<Link to="/" className="nolinkcolor">
								<div className="col-auto mt-3 d-grid">
									<button type="submit" className="btn btn-secondary" name="submit">
										Enter
									</button>
								</div>
							</Link>
						</form>
					</div>
				</div>
			</div>
			<Menu page="none" />{' '}
		</div>
	);
};

export default Login;
