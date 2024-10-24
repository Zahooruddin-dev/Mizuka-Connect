// src/Pages/Home/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
	const navigate = useNavigate();
 	function SignOut() {
		localStorage.clear(); // This will clear all items in local storage
		navigate('/login');
		console.log('h');
	}
	return (
		<div>
			<h1>Welcome to the Home Page</h1>
			<p>You have successfully signed in or signed up!</p>
			<button onClick={SignOut}> SingOut</button>
		</div>
	);
}

export default Home;
