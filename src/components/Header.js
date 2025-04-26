import '../styles/Header.css';
import Logo from '../assets/logo.png';
import Profile from '../assets/profile.png';

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img src={Logo} alt="Logo" className="logo header-img" />
        <h1 className="header-title">juvo</h1>
      </div>

      <div className="header-right">
        <h1 className="my-requests">My Requests</h1>
        <i class="header-icon fa-solid fa-circle-plus"></i>
        <i class="header-icon fa-solid fa-message"></i>
        <img src={Profile} alt="Profile" className="profile-icon header-img" />
      </div>
    </div>
  );
}
export default Header;