// src/Pages/Feed/TweetBox.jsx
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import './TweetBox.css';
import { db } from '../../../../firebase/Firebase';
import { addDoc, collection } from 'firebase/firestore';

const TweetBox = ({ setPosts }) => {
	const [tweetMessage, setTweetMessage] = useState('');
	const [tweetImage, setTweetImage] = useState('');

	const sendTweet = async (e) => {
		e.preventDefault();

		if (tweetMessage) {
			try {
				// Add a new document to the "posts" collection
				const docRef = await addDoc(collection(db, 'posts'), {
					displayName: 'New User',
					username: 'newuser',
					verified: false,
					text: tweetMessage,
					image: tweetImage,
				});
				console.log('Document written with ID: ', docRef.id);

				// Add new post to the local state
				setPosts((prevPosts) => [
					{
						id: docRef.id, // Store the Firestore document ID
						displayName: 'New User',
						username: 'newuser',
						verified: false,
						text: tweetMessage,
						image: tweetImage,
					},
					...prevPosts,
				]);
			} catch (error) {
				console.error('Error adding document: ', error);
			}
		}

		// Clear input fields
		setTweetMessage('');
		setTweetImage('');
	};

	return (
		<div className='tweetBox'>
			<form onSubmit={sendTweet}>
				{/* Message Input */}
				<input
					className='tweetBox__input'
					placeholder="What's happening?"
					value={tweetMessage}
					onChange={(e) => setTweetMessage(e.target.value)}
					required
				/>

				{/* Image URL Input */}
				<input
					className='tweetBox__imageInput'
					placeholder='Optional: Enter image URL'
					value={tweetImage}
					onChange={(e) => setTweetImage(e.target.value)}
				/>

				{/* Submit Button */}
				<Button type='submit' className='tweetBox__tweetButton'>
					Tweet
				</Button>
			</form>
		</div>
	);
};

export default TweetBox;