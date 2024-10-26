// SidebarOption.js
import './SidebarOption.css'; // Import the CSS file

const SidebarOption = ({ text, Icon, isActive }) => {
  return (
    <div className={`sidebarOption ${isActive ? 'sidebarOption--active' : ''}`}>
      {Icon && <Icon className="sidebarOption__icon" />}
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOption;
