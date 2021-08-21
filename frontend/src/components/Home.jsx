import Menu from './Menu';
import Navbar from './Navbar';
import React from 'react';
import AllPosts from './AllPosts';
import utils from '../utils/Utils.js';

const Home = () => {
	utils.checkAccess('home');

	return (
		<div>
			<Navbar />
			<AllPosts />
			<Menu page="home" />
		</div>
	);
};

export default Home;
