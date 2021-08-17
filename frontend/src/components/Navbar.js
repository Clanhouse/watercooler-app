import { Link } from 'react-router-dom';
import SwitchInput from './SwitchInput/SwitchInput';

export const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
    <SwitchInput name="lel" />
  </nav>
);
