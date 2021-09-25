import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './comment.module.css';
import Avatar from '../../../Avatar/Avatar';

const Comment = ({ comment }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenReplies = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.threadContainer}>
      <div className={styles.commentContainer}>
        <Avatar size="small" />
        <div className={styles.comment}>
          <p className={styles.author}>{comment.author}</p>
          <p className={styles.content}>{comment.content}</p>
        </div>
      </div>
      {comment.replies.length && !isOpen > 0 ? (
        <button
          type="button"
          onClick={handleOpenReplies}
          className={styles.commentButton}
        >
          Show answers...
        </button>
      ) : null}
      {isOpen && (
        <div className={styles.replies}>
          {comment.replies &&
            comment.replies.map((reply) => {
              return <Comment key={reply.id} comment={reply} />;
            })}
        </div>
      )}
    </div>
  );
};

const commentShape = {
  id: PropTypes.number,
  author: PropTypes.string,
  content: PropTypes.string,
};

commentShape.replies = PropTypes.arrayOf(
  PropTypes.shape(commentShape)
);

const commentPropTypes = PropTypes.shape(commentShape);

Comment.propTypes = {
  comment: commentPropTypes.isRequired,
};

export default Comment;
