import React, { useCallback, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CardFilmFull from '../cards/card-film-full/card-film-full';
import Comments from '../comments/comments';
import Button from '../button/button';
import { addCommentToFilm, deleteCommentFromFilm, removeFilmSelected } from '../../redux/actions/film.actions';
import { CommentInterface, FilmInterface } from '../../redux/reducers/film.reducer';
import './film-details.scss';
import AuthContext from '../../contexts/auth.context';

export interface FilmDetailsProps {
  film: FilmInterface;
}

const FilmDetails = ({
  film,
}: FilmDetailsProps): JSX.Element => {
  const dispatch = useDispatch();
  const { name } = useContext(AuthContext);

  const close = useCallback((): void => dispatch(removeFilmSelected()), [dispatch]);

  useEffect(() => {
    return (): void => {
      close();
    };
  }, [close]);

  const addComment = (comment: CommentInterface['comment']): void => dispatch(addCommentToFilm(film.id, name, comment));

  const deleteComment = (commentId: CommentInterface['id']): void => dispatch(deleteCommentFromFilm(commentId));

  return (
    <div className="film-details">
      <div className="film-details__wrapper wrapper">
        <Button className="film-details-back button--transparent" onClick={close}>{'<'}</Button>
        <div className="film-details-container">
          <CardFilmFull film={film} />
          <Comments comments={film.comments} addComment={addComment} deleteComment={deleteComment} />
        </div>
      </div>
    </div>
  );
};

export default FilmDetails;
