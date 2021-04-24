import { BrowserRouter } from 'react-router-dom';
import { Routing } from './config/routing/Routing';
import { getFakeData } from './api/api';
import { useEffect } from 'react';


export const App = () => {
  useEffect(() => {
    (async function() {
      const fakeData = await getFakeData();
      console.log(fakeData);
    })();
  }, [])

  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  )
}