import '../styles/Header.css';
import Logo from '../assets/logo.png';
import MyRequests from './requests/MyRequests';
import Chat from './chat/Chat';
import Profile from '../assets/profile.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleLogoClick = () => { navigate('/'); };
  const handleMyRequestsClick = () => { navigate('/my-requests'); };
  const handleCreateRequestClick = () => { navigate('/create-requests'); };
  const handleChatClick = () => { setIsChatOpen(true); };
  const handleChatClose = () => { setIsChatOpen(false); };
  const handleProfileClick = () => { navigate('/profile'); };

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
        <h1
          className="my-requests"
          onClick={handleMyRequestsClick}
        >
          My Requests
        </h1>
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

      {/* Chat Sidebar */}
      <Chat isOpen={isChatOpen} onClose={handleChatClose} />
    </div>
  );
}

export default Header;
