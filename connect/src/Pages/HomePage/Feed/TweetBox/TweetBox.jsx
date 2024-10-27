import { useState } from 'react';
import './TweetBox.css';
import { Button } from '@mui/material';

function TweetBox() {
	const [tweetMessage, setTweetMessage] = useState('');
	const [tweetImage, setTweetImage] = useState('');

	const sendTweet = (e) => {
		e.preventDefault();

		// You can later add back any database functionality here

		setTweetMessage('');
		setTweetImage('');
	};

	return (
		<div className='tweetBox'>
			<form>
				<div className='tweetBox__input'>
					<input
						onChange={(e) => setTweetMessage(e.target.value)}
						value={tweetMessage}
						placeholder="What's happening?"
						type='text'
					/>
				</div>
				<input
					value={tweetImage}
					onChange={(e) => setTweetImage(e.target.value)}
					className='tweetBox__imageInput'
					placeholder='Optional: Enter image URL'
					type='text'
				/>
				<Button
					type='submit'
					onClick={sendTweet}
					className='tweetBox__tweetButton'
				>
					Tweet
				</Button>
			</form>
		</div>
	);
}

export default TweetBox;
