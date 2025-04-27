import '../../styles/requests/Requests.css';
import Thumbnail from './Thumbnail';
import { getUserIdFromToken } from '../../utility/AuthUtil';
import { useState, useEffect } from 'react';

function Requests({ header, endpoint, toggleable = false, isMine = false }) {
  const [requests, setRequests] = useState([]);
  const [visible, setVisible] = useState(true);
  const userId = getUserIdFromToken();

  const fetchRequests = async () => {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      // If isMine is false, filter out requests made by the current user
      const filteredRequests = isMine
        ? data
        : data.filter(req => req.userId !== userId);

      const mappedRequests = filteredRequests.map(req => ({
        id: req.id,
        imageUrl: req.imageUrl,
        title: req.title
      }));

      setRequests(mappedRequests);
    } catch (error) {
      console.error("Error fetching requests:", error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, [userId, isMine, endpoint]);

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
              image={item.imageUrl}
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
