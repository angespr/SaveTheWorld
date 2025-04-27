import '../../styles/homepage/Recommended.css';
import Thumbnail from '../requests/Thumbnail';
import One from '../../assets/recommended-thumbnails/1.png';
import Two from '../../assets/recommended-thumbnails/2.png';
import Three from '../../assets/recommended-thumbnails/3.png';
import Four from '../../assets/recommended-thumbnails/4.png';
import Five from '../../assets/recommended-thumbnails/5.png';
import Six from '../../assets/recommended-thumbnails/6.png';
import Seven from '../../assets/recommended-thumbnails/7.png';
import Eight from '../../assets/recommended-thumbnails/8.png';
import Nine from '../../assets/recommended-thumbnails/9.png';
import Ten from '../../assets/recommended-thumbnails/10.png';

function Recommended() {
  const recommendedItems = [ /* TODO pull from DB instead */
    { id: 1, image: One, title: 'Seeking manicure for tattoo' },
    { id: 2, image: Two, title: 'Trading lash extensions' },
    { id: 3, image: Three, title: 'Gardener, looking for pedicure' },
    { id: 4, image: Four, title: 'Request to trade salon services!' },
    { id: 5, image: Five, title: 'Color services for gel-X' },
    { id: 6, image: Six, title: 'Free 60 minute facial! Looking for nail artists' },
    { id: 7, image: Seven, title: 'Black and gray apprentice tattoo for nail art' },
    { id: 8, image: Eight, title: '3-5 inch tattoo in exchange for mani/pedi' },
    { id: 9, image: Nine, title: 'Free traditional hot stone massage' },
    { id: 10, image: Ten, title: 'Looking for gel manicure, can offer 60 minute massage' },
  ];

  return (
    <div className="recommended-container">
      <h2>Recommended for You</h2>
      <div className="recommended-thumbnails">
        {recommendedItems.map(item => (
          <Thumbnail
            requestId={item.id}
            image={item.image}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Recommended;
