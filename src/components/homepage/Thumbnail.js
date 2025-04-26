import '../../styles/homepage/Thumbnail.css';
import { useNavigate } from 'react-router-dom';

function Thumbnail({ image, title, url }) {
  const navigate = useNavigate();

  const handleThumbnailClick = () => { navigate(url); };
  return (
    <div className="thumbnail">
      <img
        src={image}
        alt={title}
        onClick={handleThumbnailClick}
      />
      <h3>{title}</h3>
    </div>
  );
}

export default Thumbnail;