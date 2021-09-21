import PropTypes from 'prop-types';
import styles from './comments.module.css';
import Comment from './Comment/Comment';

const Comments = ({ comments }) => {
  return (
    <div className={styles.commentsContainer}>
      {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

Comments.defaultProps = {
  comments: [],
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};

export default Comments;
