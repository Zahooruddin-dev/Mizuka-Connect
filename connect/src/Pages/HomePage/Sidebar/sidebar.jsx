// Sidebar.js
import { FaHome, FaUserFriends, FaBell, FaEnvelope } from 'react-icons/fa';
import './Sidebar.css'; // Import the Sidebar CSS file
import SidebarOption from './options/options'; // Adjust based on actual file name

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<h1 className='sidebar__twitterIcon'>Mizuka Connect</h1>
			<SidebarOption text='Home' Icon={FaHome} isActive={true} />
			<SidebarOption text='Friends' Icon={FaUserFriends} />
			<SidebarOption text='Notifications' Icon={FaBell} />
			<SidebarOption text='Messages' Icon={FaEnvelope} />
			<button className='sidebar__tweet'>Post</button>
		</div>
	);
};

export default Sidebar;
