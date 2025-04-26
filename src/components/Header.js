import '../styles/Header.css';
import Logo from '../assets/logo.png';
import Profile from '../assets/profile.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Chat from './chat/Chat';

function Header() {
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleProfileClick = () => { navigate('/profile'); };
  const handleCreateRequestClick = () => { navigate('/create-request'); };
  const handleLogoClick = () => { navigate('/'); };
  const handleChatClick = () => { setIsChatOpen(true); };
  const handleChatClose = () => { setIsChatOpen(false); };

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
          className="header-icon fa-solid fa-circle-plus"
          onClick={handleCreateRequestClick}
        ></i>
        <i
          className="header-icon fa-solid fa-message"
          onClick={handleChatClick}
        ></i>
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
