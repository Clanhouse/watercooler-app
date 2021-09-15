import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RequestHeleper from './utils/requestHelper';
import { Routing } from './config/routing/Routing';

export const App = () => {
  const requestHelper = new RequestHeleper(
    'https://jsonplaceholder.typicode.com'
  );
  useEffect(() => {
    requestHelper.get('posts').then((res) => {
      console.log(res);
    });
  }, [requestHelper]);
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
};
