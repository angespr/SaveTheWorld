import { jwtDecode } from 'jwt-decode';

// Retrieve the userId from the stored JWT token
export function getUserIdFromToken() {
  const token = localStorage.getItem('token');

  if (token) {
    try {
      console.log('Token:', token);
      const decodedToken = jwtDecode(token);
      console.log('decoded token:', decodedToken);
      console.log('user id:', decodedToken.sub);
      return decodedToken.sub;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
  return null;
}
