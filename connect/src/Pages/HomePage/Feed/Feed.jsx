// src/Pages/Feed/Feed.jsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Post from '../Posts/Post';
import './Feed.css';
import TweetBox from './TweetBox/TweetBox';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../../firebase/Firebase';

const Feed = () => {
	// State to hold posts
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const unsubscribe = onSnapshot(collection(db, 'posts'), (snapshot) => {
			const newPosts = snapshot.docs.map((doc) => ({
				id: doc.id, // Use Firestore document ID
				...doc.data(),
			}));
			setPosts(newPosts);
		});

		// Clean up the listener
		return () => unsubscribe();
	}, []);

	return (
		<div className='feed'>
			{/* Feed Header */}
			<header className='feed__header'>
				<h2>Home</h2>
			</header>

			{/* Tweet Box */}
			<TweetBox setPosts={setPosts} />

			{/* Posts List */}
			{posts.map((post) => (
				<motion.div
					key={`${post.id}-${post.timestamp || Date.now()}`} // Ensure unique key
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
