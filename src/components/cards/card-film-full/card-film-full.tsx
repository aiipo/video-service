import React from 'react';
import { FilmInterface } from '../../../redux/reducers/film.reducer';
import './card-film-full.scss';

export interface CardFilmFullProps {
  film: FilmInterface;
}

const CardFilmFull = ({
  film,
}: CardFilmFullProps): JSX.Element => (
  <div className="card-film-full">
    <img src={film.imageUrl} alt={film.title} />
    <div className="card-film-full-details">
      <p>
        Название:
        {' '}
        <span className="card-film-full-details__title">{film.title}</span>
      </p>
      <p>
        Страна:
        {' '}
        <span className="card-film-full-details__countries">
          {film.countries?.length
            ? film.countries?.join(', ')
            : 'Не указана'}
        </span>
      </p>
      <p>
        Жанр:
        {' '}
        <span className="card-film-full-details__genres">
          {film.genres?.length
            ? film.genres?.join(', ')
            : 'Не указано'}
        </span>
      </p>
      <p>
        {film.logline}
      </p>
    </div>
  </div>
);

export default CardFilmFull;
