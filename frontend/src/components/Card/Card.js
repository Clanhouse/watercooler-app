// import PropTypes from 'prop-types';
import styles from './card.module.css';
import Avatar from '../Avatar/Avatar';
import CardContent from './CardContent/CardContent';
import CardUserReactions from './CardUserReactions/CardUserReactions';

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <header className={styles.card__header}>
          <Avatar size="large" />
          <CardContent />
          <CardUserReactions />
        </header>
      </div>
    </div>
  );
};

export default Card;
