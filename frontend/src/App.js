import React from 'react';

import Profile from './components/Profile';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/login" element={<Login />} />
				<Route path="/createpost" element={<CreatePost />} />
				<Route path="/editpost" element={<EditPost />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
