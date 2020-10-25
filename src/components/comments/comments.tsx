import React, { useContext, useRef, useState } from 'react';
import Button from '../button/button';
import Comment from './comment/comment';
import { CommentInterface } from '../../redux/reducers/film.reducer';
import './comments.scss';
import AuthContext from '../../contexts/auth.context';
import { MAX_COMMENT_LENGTH } from '../../constants/comments.constants';

export interface CommentsProps {
  comments: CommentInterface[];
  addComment: (comment: string) => void;
  deleteComment: (commentId: number) => void;
}

const Comments = ({
  comments,
  addComment,
  deleteComment = (): void => {},
}: CommentsProps): JSX.Element => {
  const [comment, setComment] = useState('');
  const { name, token } = useContext(AuthContext);
  const commentRef = useRef<HTMLTextAreaElement>(null);

  const handleCommentChange = ({ currentTarget }: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setComment(currentTarget.value);
  };

  const handleAddComment = (): void => {
    addComment(comment);
    if (commentRef && commentRef.current) {
      setComment('');
      commentRef.current.focus();
    }
  };

  return (
    <div className="comments">
      <div className="comments__wrapper wrapper">
        <p className="comments-title">Комментарии</p>
        <div className="comments-publish">
          <textarea
            id="comments-publish__message"
            name="comments-publish__message"
            ref={commentRef}
            className="comments-publish__message"
            maxLength={MAX_COMMENT_LENGTH}
            value={comment}
            onChange={handleCommentChange}
            placeholder="Введите комментарий..."
          />
          <Button
            className="comments-publish__submit"
            onClick={handleAddComment}
            disabled={!token || !name}
          >
            Опубликовать
          </Button>
        </div>
        <div className="comments-container">
          {comments.length
            ? comments.map(({ id, author, comment }) => (
              <Comment
                key={id}
                author={author}
                comment={comment}
                deleteComment={(): void => deleteComment(id)}
                isAbleDeleteComment={author === name}
              />
            ))
            : <p className="comments-container--empty">Комментариев нету.</p>}
        </div>
      </div>
    </div>
  );
};

export default Comments;
