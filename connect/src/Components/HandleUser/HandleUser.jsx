// AuthLayout.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function AuthLayout() {
	return (
		<div className='auth-container'>
			<h1>Welcome to Mizuka</h1>

			{/* Links to switch between Login and Signup */}
			<div className='auth-links'>
				<Link to='/login'>Login</Link>
				<Link to='/signup'>Sign Up</Link>
			</div>

			{/* Outlet will render either Login or Signup based on the route */}
			<Outlet />
		</div>
	);
}

export default AuthLayout;
