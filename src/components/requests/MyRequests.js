import '../../styles/requests/MyRequests.css';
import Header from '../Header';
import Requests from './Requests';
import { getUserIdFromToken } from '../../utility/AuthUtil';

function MyRequests() {
  const userId = getUserIdFromToken();
  
  if (!userId) {
    window.location.href = 'http://localhost:3000/#/login';
    return null;
  }

  return (
    <div className="my-requests-wrapper">
      <Header />
      <div className="my-requests-content">
        <Requests
          header="Active Requests"
          endpoint={`http://localhost:8080/api/requests/user/{userId}/active`}
          toggleable />
        <Requests
          header="Completed Requests"
          endpoint={`http://localhost:8080/api/requests/user/{userId}/completed`}
          toggleable
        />
      </div>
    </div>
  );
}

export default MyRequests;