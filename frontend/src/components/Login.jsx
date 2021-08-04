import Navbar from './Navbar';
import Menu from './Menu';
import { useState } from 'react';
// import { Link } from 'react-router-dom';
import '../css/Post.css';
import axios from 'axios';

const Login = () => {
	let [ userDets, setUserDets ] = useState({ nickname: '', pin: '' });

	const handleSubmit = (e) => {
		e.preventDefault();
		e.target.name === 'nickname' &&
			setUserDets((userDets) => ({
				...userDets,
				[e.target.name]: e.target.value
			}));
		e.target.name === 'pin' &&
			setUserDets((userDets) => ({
				...userDets,
				[e.target.name]: e.target.value
			}));
		console.log(userDets);
	};

	const handleLogin = () => {
		axios
			.post('http://localhost:3001/users/login', userDets)
			.then(
				(res) =>
					res.data.response === 'loginSuccess'
						? window.location.replace('/')
						: res.data.response === 'loginFailure'
							? console.log('Wrong password')
							: console.log('User not found')
			);
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

							<div className="form-outline mb-4">
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
							{/* <Link to="/" className="nolinkcolor"> */}
							<div className="col-auto mt-3 d-grid">
								<button type="button" className="btn btn-secondary" name="submit" onClick={handleLogin}>
									Log in
								</button>
							</div>
							{/* </Link> */}
							<div className="form-outline mb-3 mt-3">
								<a className="nolinkcolor" href="/signup">
									New here? sign up!
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
			<Menu page="none" />{' '}
		</div>
	);
};

export default Login;
