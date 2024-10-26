import { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import './Home.css'; // Importing the CSS file for styling
import PostForm from './Posts/PostForm';
import PostList from './Posts/PostList';
import Sidebar from './SideBar/SideBar';

function Home() {
	const navigate = useNavigate();
	const [posts, setPosts] = useState([]);
	const userId = localStorage.getItem('userId'); // Assuming user ID is stored in local storage

	function SignOut() {
		localStorage.clear(); // This will clear all items in local storage
		navigate('/login');
	}	

	const handlePostCreate = (post) => {
		setPosts((prevPosts) => [...prevPosts, post]);
	};

	return (
		<div className="app">

		<div className="home-container">
		<Sidebar />
		<div className="main-content">
				<h1>Welcome to the Home Page</h1>
				<p>You have successfully signed in or signed up!</p>
				<PostForm userId={userId} onPostCreate={handlePostCreate} />
				<PostList posts={posts} />
				<button className="sign-out-button" onClick={SignOut}>Sign Out</button>
			</div>

			{/* Outlet for nested routes */}
			<Outlet />
		</div>
		</div>
	);
}

export default Home;
