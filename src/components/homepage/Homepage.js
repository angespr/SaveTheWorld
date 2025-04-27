import '../../styles/homepage/Homepage.css';
import Header from '../Header';
import SearchBar from './SearchBar';
import Recommended from './Recommended';
import Requests from '../requests/Requests';
import { getUserIdFromToken } from '../../utility/AuthUtil';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();
  const userId = getUserIdFromToken();

  if (!userId) {
    navigate('/login');
    return null;
  }

  console.log("User ID from token:", userId);

  return (
    <div className="homepage">
      <Header />
      <SearchBar />
      <Recommended />
      <Requests
        header="All Requests Near You"
        endpoint={`https://juvoproject.com/api/requests/not-user/${userId}`}
      />
    </div>
  );
}

export default Homepage;
