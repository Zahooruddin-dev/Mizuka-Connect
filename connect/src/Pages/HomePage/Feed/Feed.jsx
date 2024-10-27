// src/Pages/Feed/Feed.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import Post from '../Posts/Post';
import './Feed.css';
import TweetBox from './TweetBox/TweetBox';

const Feed = () => {
	// Initial state with sample posts
	const [posts, setPosts] = useState([
		{
			displayName: 'Rafeh Qazi',
			username: 'cleverqazi',
			verified: true,
			text: 'Welcome to the app!',
			image: 'https://via.placeholder.com/150',
		},
		{
			displayName: 'Another User',
			username: 'anotheruser',
			verified: false,
			text: 'This is a sample post!',
			image: '',
		},
	]);

	return (
		<div className='feed'>
			{/* Feed Header */}
			<header className='feed__header'>
				<h2>Home</h2>
			</header>

			{/* Tweet Box */}
			<TweetBox setPosts={setPosts} />

			{/* Posts List */}
			{posts.map((post, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.3 }}
				>
					<Post {...post} />
				</motion.div>
			))}
		</div>
	);
};

export default Feed;
