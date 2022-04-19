import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = (address) => {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  console.log(address);
  useEffect(() => {
    const params = {
      access_key: process.env.POSITIONSTACK_APIKEY,
      query: address,
    };
    axios
      .get('http://api.positionstack.com/v1/forward', { params })
      .then((response) => {
        setLocation({
          ...response?.data.data[0],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return location;
};

export default useGoogleAddress;
