import { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import './Home.css'; // Importing the CSS file for styling
import PostForm from './Posts/Post';
import Sidebar from './SideBar/SideBar';
import Feed from './Feed/Feed';
import Widgets from '../Widget/Widget';
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
		<div className='app'>
			<Sidebar /> {/* Sidebar is fixed on the left */}
			<Feed />
			<Widgets />
			<Outlet /> {/* Outlet for nested routes */}
		</div>
	);
}

export default Home;
