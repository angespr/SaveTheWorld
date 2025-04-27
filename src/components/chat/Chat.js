import '../../styles/chat/Chat.css';
import { useState } from 'react';

const sampleChats = [
  {
    id: 1,
    userName: 'Emily Johnson',
    userImage: '/test_pfp1.jpg',
    lastMessage: 'Thanks! I’ll check it out tonight.',
  },
  {
    id: 2,
    userName: 'David Kim',
    userImage: '/test_pfp2.jpg',
    lastMessage: 'Sounds good! What time works for you?',
  },
  {
    id: 3,
    userName: 'Sophia Lee',
    userImage: '/test_pfp3.jpg',
    lastMessage: 'Appreciate your offer — I’ll let you know!',
  },
];

function Chat({ isOpen, onClose }) {
  const [selectedChat, setSelectedChat] = useState(sampleChats[0]); //default to first chat
  const [messages, setMessages] = useState([
    { sender: 'other', text: 'Hi! I saw your request and made an offer.' },
    { sender: 'you', text: 'Thanks! Can you tell me more about your services?' },
    { sender: 'other', text: 'Yeah, of course! I have about 8 years of experience.' },
    { sender: 'you', text: 'That sounds great! Do you have a social media page I could take a look at?'},
    { sender: 'other', text: 'I do! Here is the link to my Instagram: https://instagram/businessname.com' },
    { sender: 'you', text: 'Thanks! I’ll check it out tonight.'},
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim() === '') return;
    setMessages([...messages, { sender: 'you', text: newMessage }]);
    setNewMessage('');
  };

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
    
    if (chat.id === 1) {
      setMessages([
        { sender: 'other', text: 'Hi! I saw your request and made an offer.' },
        { sender: 'you', text: 'Thanks! Can you tell me more about your services?' },
        { sender: 'other', text: 'Yeah, of course! I have about 8 years of experience.' },
        { sender: 'you', text: 'That sounds great! Do you have a social media page I could take a look at?' },
        { sender: 'other', text: 'I do! Here is the link to my Instagram: https://instagram/businessname.com' },
        { sender: 'you', text: 'Thanks! I’ll check it out tonight.' },
      ]);
    } else if (chat.id === 2) {
      setMessages([
        { sender: 'other', text: 'Hey! What time are you free to meet?' },
        { sender: 'you', text: 'How about 6 PM?' },
        { sender: 'other', text: 'Sounds good! What time works for you?' },
      ]);
    } else if (chat.id === 3) {
      setMessages([
        { sender: 'other', text: 'Hey there! I loved your stuff.' },
        { sender: 'you', text: 'Of course! I loved your portfolio too.' },
        { sender: 'you', text: 'I wanted to add a few other things in case you were interested?' },
        { sender: 'other', text: 'Appreciate your offer — I’ll let you know!' },
      ]);
    } else {
      setMessages([]); // fallback, empty messages
    }
    setNewMessage(''); 
  };

  return (
    <div className={`chat-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="chat-header">
        <h2>Chats</h2>
        <button onClick={onClose} className="close-button">&times;</button>
      </div>

      <div className="chat-list">
        {sampleChats.map((chat) => (
          <div
            key={chat.id}
            className={`chat-item ${selectedChat?.id === chat.id ? 'active' : ''}`}
            onClick={() => handleSelectChat(chat)}
          >
            <img src={chat.userImage} alt={chat.userName} className="chat-avatar" />
            <div className="chat-info">
              <div className="chat-name">{chat.userName}</div>
              <div className="chat-last-message">{chat.lastMessage}</div>
            </div>
          </div>
        ))}
      </div>

      {selectedChat && (
        <div className="chat-conversation">
          <div className="conversation-header">
            <h3>{selectedChat.userName} made an offer!</h3>
          </div>

          <div className="conversation-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.sender === 'you' ? 'your-message' : 'other-message'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="message-input-area">
            <input
              type="text"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
