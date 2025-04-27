import '../../styles/homepage/Homepage.css';
import Header from '../Header';
import Recommended from './Recommended';
import Requests from '../requests/Requests';

function Homepage() {

  return (
    <div className="homepage">
      <Header />
      <Recommended />
      <Requests header="All Requests Near You"
        endpoint="https://juvoproject.com/api/requests"
      />
    </div>
  );
}

export default Homepage;
