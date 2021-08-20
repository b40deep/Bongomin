import React from 'react';

import Profile from './components/Profile';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import ResetPin from './components/ResetPin';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/createpost" element={<CreatePost />} />
				<Route path="/editpost" element={<EditPost />} />
				<Route path="/resetpin" element={<ResetPin />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
