import '../../styles/requests/MyRequests.css';
import Header from '../Header';
import Requests from './Requests';
import { getUserIdFromToken } from '../../utility/AuthUtil';
import { useNavigate } from 'react-router-dom';

function MyRequests() {
  const userId = getUserIdFromToken();
  const navigate = useNavigate();
  
  if (!userId) {
    navigate('/login');
    return null;
  }

  return (
    <div className="my-requests-wrapper">
      <Header />
      <div className="my-requests-content">
        <Requests
          header="Active Requests"
          endpoint={`http://localhost:8080/api/requests/user/${userId}/active`}
          toggleable
          isMine
        />
        <Requests
          header="Completed Requests"
          endpoint={`http://localhost:8080/api/requests/user/${userId}/completed`}
          toggleable
          isMine
        />
      </div>
    </div>
  );
}

export default MyRequests;