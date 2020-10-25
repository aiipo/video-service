import {
  ADD_FILM_COMMENT,
  REMOVE_FILM_COMMENT,
  REMOVE_FILM_SELECTED,
  SEARCH_FILM,
  SELECT_FILM,
} from '../../constants/action-types.constants';
import { CommentInterface, FilmInterface } from '../reducers/film.reducer';

export const searchFilm = (query: string): { type: typeof SEARCH_FILM; payload: string } => ({
  type: SEARCH_FILM,
  payload: query,
});

export const selectFilm = (filmId: FilmInterface['id']) => ({
  type: SELECT_FILM,
  payload: filmId,
});

export const addCommentToFilm = (filmId: FilmInterface['id'], author: CommentInterface['author'], comment: string) => ({
  type: ADD_FILM_COMMENT,
  payload: { filmId, author, comment },
});

export const deleteCommentFromFilm = (commentId: CommentInterface['id']) => ({
  type: REMOVE_FILM_COMMENT,
  payload: commentId,
});

export const removeFilmSelected = (): { type: typeof REMOVE_FILM_SELECTED } => ({
  type: REMOVE_FILM_SELECTED,
});
