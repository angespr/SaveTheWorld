import '../../styles/chat/Chat.css';

function Chat({ isOpen, onClose }) {
  return (
    <div className={`chat-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="chat-header">
        <h2>Chats</h2>
        <button onClick={onClose} className="close-button">&times;</button>
      </div>
      <div className="chat-list">
        {/* TODO Need to update to map from DB */}
        <div className="chat-item">Chat 1</div>
        <div className="chat-item">Chat 2</div>
        <div className="chat-item">Chat 3</div>
      </div>
    </div>
  );
}

export default Chat;
