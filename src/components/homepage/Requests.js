import '../../styles/homepage/Requests.css';
import Thumbnail from './Thumbnail';
import { useState, useEffect, useRef } from 'react';

function Requests() {
  const [requests, setRequests] = useState([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  // Simulate fetching data from database, need to replace with actual API call
  const fetchRequests = async (pageNum) => {
    // Simulate database fetch with timeout
    await new Promise((resolve) => setTimeout(resolve, 1000)); 

    const newItems = Array.from({ length: 10 }, (_, idx) => ({
      id: (pageNum - 1) * 10 + idx + 1,
      image: '/images/placeholder.png', // replace with your real logic
      title: `Request ${ (pageNum - 1) * 10 + idx + 1 }`,
      url: `/request/${ (pageNum - 1) * 10 + idx + 1 }`,
    }));

    setRequests(prev => [...prev, ...newItems]);
  };

  useEffect(() => {
    fetchRequests(page);
  }, [page]);

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

  return (
    <div className="requests-container">
      <h2>All Requests</h2>
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
      <div ref={loader} className="loading">Loading...</div>
    </div>
  );
}

export default Requests;
