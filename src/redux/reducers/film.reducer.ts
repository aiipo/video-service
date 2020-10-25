import { data as films } from '../../data/films.data.json';
import {
  ADD_FILM_COMMENT, REMOVE_FILM_COMMENT,
  REMOVE_FILM_SELECTED,
  SEARCH_FILM,
  SELECT_FILM,
} from '../../constants/action-types.constants';
import { CardNewFilmInterface } from '../../components/cards/card-new-film/card-new-film';

export interface CommentInterface {
  id: number;
  author: string;
  comment: string;
}

export interface FilmInterface extends CardNewFilmInterface {
  countries?: string[];
  genres?: string[];
  comments: CommentInterface[];
}

export interface FilmReducerInterface {
  films: FilmInterface[];
  selectedFilmId: CardNewFilmInterface['id'] | null;
  searchTerm: string;
}

const INITIAL_STATE: FilmReducerInterface = {
  films,
  selectedFilmId: null,
  searchTerm: '',
};

export default (state = INITIAL_STATE, action): FilmReducerInterface => {
  switch (action.type) {
    case SEARCH_FILM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case SELECT_FILM:
      return {
        ...state,
        selectedFilmId: action.payload,
      };
    case REMOVE_FILM_SELECTED:
      return {
        ...state,
        selectedFilmId: null,
      };
    case REMOVE_FILM_COMMENT:
      return {
        ...state,
        films: state.films.map((film) => (
          film.id !== state.selectedFilmId
            ? film
            : { ...film, comments: film.comments.filter(({ id }) => id !== action.payload) }
        )),
      };
    case ADD_FILM_COMMENT: {
      const { filmId, author, comment: commented } = action.payload;
      const comment = commented.trim();
      return comment
        ? {
          ...state,
          films: state.films.map((film) => (
            film.id !== filmId
              ? film
              : {
                ...film,
                comments: [
                  ...film.comments,
                  {
                    id: film.comments.length
                      ? film.comments[film.comments.length - 1].id + 1
                      : 1,
                    author,
                    comment,
                  },
                ],
              }
          )),
        }
        : state;
    }
    default:
      return state;
  }
};
