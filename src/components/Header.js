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
      <img src={Profile} alt="Profile" className="profile-icon header-img" />
    </div>
  );
}
export default Header;