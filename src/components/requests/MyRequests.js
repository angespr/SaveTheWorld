import '../../styles/requests/MyRequests.css';
import Header from '../Header';
import Requests from './Requests';

function MyRequests() {
  return (
    <div className="my-requests">
      <Header />
      <Requests header="Active Requests" />
      <Requests header="Completed Requests" />
    </div>
  );
}
export default MyRequests;