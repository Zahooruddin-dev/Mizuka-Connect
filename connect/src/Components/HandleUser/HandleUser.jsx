import { Link, Outlet, Navigate } from 'react-router-dom';
import './AuthLayout.css';

function AuthLayout() {
	const isLoggedIn = localStorage.getItem('loggedin');

	if (isLoggedIn) {
		return <Navigate to="/home" />;
	}

	return (
		<div className="auth-container">
			<h1>Welcome to Mizuka</h1>
			<div className="auth-links">
				<Link to="/login">Login</Link>
				<Link to="/signup">Sign Up</Link>
			</div>
			<Outlet />
		</div>
	);
}

export default AuthLayout;
