import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Importing the CSS file for styling

function Home() {
	const navigate = useNavigate();

	function SignOut() {
		localStorage.clear(); // This will clear all items in local storage
		navigate('/login');
	}

	return (
		<div className="home-container"> {/* Added class name for styling */}
			<h1>Welcome to the Home Page</h1>
			<p>You have successfully signed in or signed up!</p>
			<button onClick={SignOut}>Sign Out</button> {/* Fixed the spelling of "SignOut" */}
		</div>
	);
}

export default Home;
