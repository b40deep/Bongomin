import Navbar from './Navbar';
import Menu from './Menu';
import { useState } from 'react';
import '../css/Post.css';
// import axios from 'axios';

const ResetPin = () => {
	let [ userDets, setUserDets ] = useState({ nickname: '', pin: '' });

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
									value={userDets['nickname']}
									// onChange={handleInput}
								/>
							</div>

							<div className="form-outline mb-4">
								<input
									type="text"
									id="formPin"
									className="form-control "
									placeholder="4-digit pin"
									name="pin"
									value={userDets['pin']}
									// onChange={handleInput}
								/>
							</div>
							<div className="col-auto mt-3 d-grid">
								<button
									type="button"
									className="btn btn-secondary disabled"
									name="submit"
									// onClick={handleLogin}
								>
									Reset Pin coming soon!
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<Menu page="none" />{' '}
		</div>
	);
};

export default ResetPin;
