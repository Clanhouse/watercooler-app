import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';
import HomeIcon from '../../assets/home.svg';
import CalendarIcon from '../../assets/calendar.svg';
import RatingIcon from '../../assets/rating.svg';
import CollaborationIcon from '../../assets/collaboration.svg';

export const Menu = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        className={styles.navItem}
        activeClassName={styles.activeNavItem}
        to="/home"
      >
        <img
          className={styles.navIcon}
          src={HomeIcon}
          alt="Home icon"
        />
        Home
      </NavLink>
      <NavLink
        className={styles.navItem}
        activeClassName={styles.activeNavItem}
        to="/events"
      >
        <img
          className={styles.navIcon}
          src={CalendarIcon}
          alt="Calendar icon"
        />
        Events
      </NavLink>
      <NavLink
        className={styles.navItem}
        activeClassName={styles.activeNavItem}
        to="/groups"
      >
        <img
          className={styles.navIcon}
          src={CollaborationIcon}
          alt="2 people and a speech bubbles above them"
        />
        Groups
      </NavLink>
      <NavLink
        className={styles.navItem}
        activeClassName={styles.activeNavItem}
        to="/challenges"
      >
        <img
          className={styles.navIcon}
          src={RatingIcon}
          alt="Golden star on fullfiled red circle"
        />
        Challenges
      </NavLink>
    </nav>
  );
};
