import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; // Importing custom CSS for styling

const NotFound = () => {
	return (
		<div className='notfound-container'>
			<h1 className='notfound-title'>404</h1>
			<h2 className='notfound-subtitle'>Page Not Found</h2>
			<p className='notfound-message'>
				The page you are looking for doesn’t exist or an error occurred.
			</p>
			<Link to='/' className='notfound-link'>
				Go Back Home
			</Link>
		</div>
	);
};

export default NotFound;
