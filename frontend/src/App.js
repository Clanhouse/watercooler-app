import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { Routing } from './config/routing/Routing';
import { getFakeData } from './api/api';

export const App = () => {
  useEffect(() => {
    const fetchFakeData = async () => {
      const fakeData = await getFakeData();
      console.log(fakeData);
      return fakeData;
    };

    fetchFakeData();
  }, []);

  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
};
