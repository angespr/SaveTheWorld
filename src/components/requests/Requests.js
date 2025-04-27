import '../../styles/requests/Requests.css';
import Thumbnail from './Thumbnail';
import { useState, useEffect, useRef } from 'react';

function Requests({ header, endpoint, toggleable = false, isMine = false }) {
  const [requests, setRequests] = useState([]);
  const [visible, setVisible] = useState(true);

  const fetchRequests = async () => {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
  
      const mappedRequests = data.map(req => ({
        id: req.id,
        image: req.imageUrl,
        title: req.title
      }));
      setRequests(mappedRequests);
    } catch (error) {
      console.error("Error fetching requests:", error);
    }
  };  

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleToggle = () => {
    setVisible(prev => !prev);
  };

  return (
    <div className="requests-container">
      <div className="requests-header" onClick={toggleable ? handleToggle : undefined}>
        <h2>{header}</h2>
        {toggleable && (
          <i
            className={`fa-solid fa-caret-${visible ? 'down' : 'right'}`}
            style={{ cursor: 'pointer', marginLeft: '10px' }}
          ></i>
        )}
      </div>

      {visible && (
        <div className="requests-grid">
          {requests.map(item => (
            <Thumbnail
              requestId={item.id}
              image={item.image}
              title={item.title}
              isMine={isMine}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Requests;
