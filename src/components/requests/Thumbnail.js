import '../../styles/requests/Thumbnail.css';
import { useNavigate } from 'react-router-dom';

function Thumbnail({ requestId, image, title, isMine }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isMine) {
      navigate(`/my-post/${requestId}`);
      return;
    } else {
      navigate(`/view-post/${requestId}`);
    }
  };

  return (
    <div className="thumbnail">
      <img
        src={image}
        alt={title}
        onClick={handleClick}
      />
      <h3 onClick={handleClick}>{title}</h3>
    </div>
  );
}

export default Thumbnail;