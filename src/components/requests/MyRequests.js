import '../../styles/requests/MyRequests.css';
import Header from '../Header';
import Requests from './Requests';

function MyRequests() {
  return (
    <div className="my-requests-wrapper">
      <Header />
      <div className="my-requests-content">
        <Requests header="Active Requests" toggleable />
        <Requests header="Completed Requests" toggleable />
      </div>
    </div>
  );
}

export default MyRequests;