import { Link } from 'react-router-dom';
import DatePicker from './DatePicker/DatePicker';

export const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
    {/* <Button
      size="medium"
      isLoading={false}
      color="secondary"
      link="/"
    >
      Hejo
    </Button> */}
    <DatePicker />
  </nav>
);
