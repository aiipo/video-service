import React from 'react';
import Button from '../../button/button';
import './comment.scss';

export interface CommentProps {
  author: string;
  comment: string;
  deleteComment?: () => void;
  isAbleDeleteComment?: boolean;
}

const Comment = ({
  author,
  comment,
  deleteComment = (): void => {},
  isAbleDeleteComment = false,
}: CommentProps): JSX.Element => (
  <div className="comment">
    <p className="comment-author">{author}</p>
    <div className="comment-container">{comment}</div>
    {isAbleDeleteComment
      && <Button className="comment-remove button--transparent" onClick={deleteComment}>&times;</Button>}
  </div>
);

export default Comment;
