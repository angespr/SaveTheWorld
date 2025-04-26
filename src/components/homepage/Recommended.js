import '../../styles/homepage/Recommended.css';
import Thumbnail from './Thumbnail';
import One from '../../assets/Recommended/1.png';
import Two from '../../assets/Recommended/2.png';
import Three from '../../assets/Recommended/3.png';
import Four from '../../assets/Recommended/4.png';
import Five from '../../assets/Recommended/5.png';
import Six from '../../assets/Recommended/6.png';
import Seven from '../../assets/Recommended/7.png';
import Eight from '../../assets/Recommended/8.png';
import Nine from '../../assets/Recommended/9.png';
import Ten from '../../assets/Recommended/10.png';

function Recommended() {
  const recommendedItems = [
    { id: 1, image: One, title: 'Seeking manicure for tattoo', url: '/item/1' },
    { id: 2, image: Two, title: 'Trading lash extensions', url: '/item/2' },
    { id: 3, image: Three, title: 'Gardener, looking for pedicure', url: '/item/3' },
    { id: 4, image: Four, title: 'Request to trade salon services!', url: '/item/4' },
    { id: 5, image: Five, title: 'Color services for gel-X', url: '/item/5' },
    { id: 6, image: Six, title: 'Free 60 minute facial! Looking for nail artists', url: '/item/6' },
    { id: 7, image: Seven, title: 'Black and gray apprentice tattoo for nail art', url: '/item/7' },
    { id: 8, image: Eight, title: '3-5 inch tattoo in exchange for mani/pedi', url: '/item/8' },
    { id: 9, image: Nine, title: 'Free traditional hot stone massage', url: '/item/9' },
    { id: 10, image: Ten, title: 'Looking for gel manicure, can offer 60 minute massage', url: '/item/10' },
  ];

  return (
    <div className="recommended-container">
      <h2>Recommended for You</h2>
      <div className="recommended-thumbnails">
        {recommendedItems.map(item => (
          <Thumbnail
            key={item.id}
            image={item.image}
            title={item.title}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Recommended;
