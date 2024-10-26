import { Link, Outlet, Navigate } from 'react-router-dom';
import './AuthLayout.css'; // Import the CSS file for styling';

function AuthLayout() {
	const isLoggedIn = localStorage.getItem('loggedin'); // Check if user is logged in

	if (isLoggedIn) {
		// If logged in, redirect to the homepage
		return <Navigate to="/home" />;
	}

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
