import '../styles/Header.css';
import Logo from '../assets/logo.png';
import Profile from '../assets/profile.png';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleProfileClick = () => { navigate('/profile'); };
  const handleCreateRequestClick = () => { navigate('/create-requests'); };
  const handleLogoClick = () => { navigate('/'); };

  return (
    <div className="header">
      <div className="header-left">
        <img
          src={Logo}
          alt="Logo"
          className="logo header-img"
          onClick={handleLogoClick}
        />
        <h1
          className="header-title"
          onClick={handleLogoClick}
        >
          juvo
        </h1>
      </div>

      <div className="header-right">
        <h1 className="my-requests">My Requests</h1>
        <i
          class="header-icon fa-solid fa-circle-plus"
          onClick={handleCreateRequestClick}>
        </i>
        <i class="header-icon fa-solid fa-message"></i>
        <img
          src={Profile}
          alt="Profile"
          className="profile-icon header-img"
          onClick={handleProfileClick}
        />
      </div>
    </div>
  );
}
export default Header;