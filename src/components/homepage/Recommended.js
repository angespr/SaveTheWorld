import '../../styles/homepage/Recommended.css';
import { useState, useEffect } from 'react';
import Thumbnail from '../requests/Thumbnail';

function Recommended() {
  const recommendedItems = [
    '680dee30047bfd1e83b9b90d',
    '680dfb0a6410970ee1ffbca9',
    '680dfeac6410970ee1ffbcac',
    '680dfc0e6410970ee1ffbcab',
    '680dfbbd6410970ee1ffbcaa',
    '680dfa606410970ee1ffbca8',
    '680df91e6410970ee1ffbca7',
    '680df8526410970ee1ffbca6',
    '680dff986410970ee1ffbcad',
  ];

  const [requests, setRequests] = useState([]);

  const fetchRequests = async () => {
    try {
      const fetchedRequests = await Promise.all(
        recommendedItems.map(async (id) => {
          const response = await fetch(`https://juvoproject.com/api/requests/${id}`);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return await response.json();
        })
      );

      // Filter out requests where isActive is false
      const filteredRequests = fetchedRequests.filter(req => req.isActive);

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
  }, []);

  return (
    <div className="recommended-container">
      <h2>Recommended for You</h2>
      <div className="recommended-thumbnails">
        {requests.map((item) => (
          <Thumbnail
            key={item.id}
            requestId={item.id}
            image={item.imageUrl}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Recommended;
