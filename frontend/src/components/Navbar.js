import { Link } from 'react-router-dom';

import Button from './Button/Button';

export const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
    <Button
      size="medium"
      isLoading={false}
      styles="secondary"
      link="/"
    >
      Hejo
    </Button>
  </nav>
);
