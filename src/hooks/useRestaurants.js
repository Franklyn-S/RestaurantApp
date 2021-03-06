import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    searchApi('sushi');
  }, []);

  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'fortaleza',
        },
      });
      setRestaurants(response.data.businesses);
    } catch (err) {
      setErrorMessage('Algo deu errado :/');
    }
  };
  return [searchApi, restaurants, errorMessage];
};
