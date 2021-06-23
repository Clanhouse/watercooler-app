import { Link } from 'react-router-dom';
import SelectInput from './InputSelect/SelectInput';

export const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
    <SelectInput name="cars" options={['volvo', 'malczer']}>
      KEK
    </SelectInput>
  </nav>
);
