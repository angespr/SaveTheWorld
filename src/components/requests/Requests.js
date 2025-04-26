import '../../styles/requests/Requests.css';
import Thumbnail from '../homepage/Thumbnail';
import thumbnail_img from '../../assets/thumbnail.png';
import { useState, useEffect, useRef } from 'react';

function Requests({ header, toggleable = false }) {   // ⬅️ New prop
  const [requests, setRequests] = useState([]);
  const [page, setPage] = useState(1);
  const [visible, setVisible] = useState(true); // ⬅️ control showing/hiding
  const loader = useRef(null);

  const fetchRequests = async (pageNum) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newItems = Array.from({ length: 10 }, (_, idx) => ({
      id: (pageNum - 1) * 10 + idx + 1,
      image: thumbnail_img,
      title: `Request ${(pageNum - 1) * 10 + idx + 1}`,
      url: `/request/${(pageNum - 1) * 10 + idx + 1}`,
    }));
    setRequests(prev => [...prev, ...newItems]);
  };

  useEffect(() => { fetchRequests(page); }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPage(prev => prev + 1);
      }
    }, { threshold: 1 });

    if (loader.current) {
      observer.observe(loader.current);
    }
    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
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
              key={item.id}
              image={item.image}
              title={item.title}
              url={item.url}
            />
          ))}
        </div>
      )}
      {visible && <div ref={loader} className="loading">Loading...</div>}
    </div>
  );
}

export default Requests;
