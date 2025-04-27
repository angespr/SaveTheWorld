import '../../styles/requests/MyRequests.css';
import Header from '../Header';
import Requests from './Requests';

function MyRequests() {
  const userId = localStorage.getItem('token');
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