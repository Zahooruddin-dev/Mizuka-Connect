import { forwardRef } from 'react';
import './Post.css';
/* import { Avatar } from '@material-ui/core'; */
import { FaUserCheck as VerifiedUserIcon } from 'react-icons/fa';
import { FaRegCommentDots as ChatBubbleOutlineIcon } from 'react-icons/fa';
import { FaRetweet as RepeatIcon } from 'react-icons/fa';
import { FaHeart as FavoriteBorderIcon } from 'react-icons/fa';
import { FaUpload as PublishIcon } from 'react-icons/fa';

const Post = forwardRef(
	({ displayName, username, verified, text, image /* , avatar */ }, ref) => {
		return (
			<div className='post' ref={ref}>
				<div className='post__avatar'>
					{/* <Avatar src={avatar} /> */}
				</div>
				<div className='post__body'>
					<div className='post__header'>
						<div className='post__headerText'>
							<h3>
								{displayName}{' '}
								<span className='post__headerSpecial'>
									{verified && <VerifiedUserIcon className='post__badge' />} @
									{username}
								</span>
							</h3>
						</div>
						<div className='post__headerDescription'>
							<p>{text}</p>
						</div>
					</div>
					<img src={image} alt='' />
					<div className='post__footer'>
						<ChatBubbleOutlineIcon fontSize='small' />
						<RepeatIcon fontSize='small' />
						<FavoriteBorderIcon fontSize='small' />
						<PublishIcon fontSize='small' />
					</div>
				</div>
			</div>
		);
	}
);

export default Post;
