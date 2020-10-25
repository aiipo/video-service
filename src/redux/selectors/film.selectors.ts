import { RootState } from '../store';
import { FilmInterface, FilmReducerInterface } from '../reducers/film.reducer';

export const selectFilms = ({ film }: RootState): FilmReducerInterface['films'] => film.films;
export const selectFilmsSearched = ({ film }: RootState): FilmReducerInterface['films'] => (
  film.films.filter(({ title }) => title.toLowerCase().includes(film.searchTerm.toLowerCase()))
);
export const selectFilmSelected = ({ film }: RootState): FilmInterface | undefined => (
  film.films.find(({ id }) => id === film.selectedFilmId)
);
