// src/Components/Widgets.jsx
import './Widget.css';
import {
	TwitterTimelineEmbed,
	TwitterShareButton,
	TwitterTweetEmbed,
} from 'react-twitter-embed';
import { FaSearch } from 'react-icons/fa'; // Using React Icons for the search icon

const Widgets = () => {
	return (
		<div className='widgets'>
			<div className='widgets__input'>
				<FaSearch className='widgets__searchIcon' />
				<input placeholder='Search Twitter' type='text' />
			</div>

			<div className='widgets__widgetContainer'>
				<h2>What's happening</h2>

				{/* Embed a specific Tweet */}
				<TwitterTweetEmbed tweetId='858551177860055040' />

				{/* Embed a Twitter timeline */}
				<TwitterTimelineEmbed
					sourceType='profile'
					screenName='cleverqazi'
					options={{ height: 400 }}
				/>

				{/* Share button for a specific URL */}
				<TwitterShareButton
					url='https://facebook.com/cleverprogrammer'
					options={{ text: '#reactjs is awesome', via: 'cleverqazi' }}
				/>
			</div>
		</div>
	);
};

export default Widgets;
