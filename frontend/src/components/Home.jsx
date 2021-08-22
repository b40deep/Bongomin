import Menu from './Menu';
import Navbar from './Navbar';
import React from 'react';
import AllPosts from './AllPosts';
import utils from '../utils/Utils.js';
// import axios from 'axios';

const Home = () => {
	utils.authenticateUserToken('home');

	return (
		<div>
			<Navbar />

			<AllPosts />
			<Menu page="home" />
		</div>
	);
};

export default Home;
