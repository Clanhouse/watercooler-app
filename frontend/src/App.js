import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { getFakeData } from './api/api';
import { Routing } from './config/routing/Routing';

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
