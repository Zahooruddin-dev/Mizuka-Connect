// src/Pages/Feed/TweetBox.jsx
import { useState } from 'react';
import { Button } from '@mui/material';
import './TweetBox.css';

const TweetBox = ({ setPosts }) => {
	const [tweetMessage, setTweetMessage] = useState('');
	const [tweetImage, setTweetImage] = useState('');

	const sendTweet = (e) => {
		e.preventDefault();

		// Add new post to the list
		if (tweetMessage) {
			setPosts((prevPosts) => [
				{
					displayName: 'New User',
					username: 'newuser',
					verified: false,
					text: tweetMessage,
					image: tweetImage,
				},
				...prevPosts,
			]);
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
