import Menu from './Menu';
import Navbar from './Navbar';
import React from 'react';
import AllPosts from './AllPosts';

const Home = () => {
	return (
		<div>
			<Navbar />
			<AllPosts />
			<Menu page="home" />
		</div>
	);
};

export default Home;
