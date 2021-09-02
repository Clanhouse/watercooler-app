import styles from './card.module.css';
// import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import CardContent from './CardContent';
import CardIconsContainer from './CardIconsContainer';

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <header className={styles.card__header}>
          <Avatar size="large" />
          <CardContent />
          <CardIconsContainer />
        </header>
      </div>
    </div>
  );
};

export default Card;
