import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardNewFilm from '../cards/card-new-film/card-new-film';
import CardGenre from '../cards/card-genre/card-genre';
import { selectFilmSelected, selectFilmsSearched } from '../../redux/selectors/film.selectors';
import { data as genres } from '../../data/genres.data.json';
import FilmDetails from '../film-details/film-details';
import { selectFilm } from '../../redux/actions/film.actions';
import './films.scss';

const Films = (): React.ReactElement => {
  const dispatch = useDispatch();
  const films = useSelector(selectFilmsSearched);
  const selectedFilm = useSelector(selectFilmSelected);

  const handleSelectFilm = (filmId): void => dispatch(selectFilm(filmId));

  return (
    <div className="films">
      <div className="films__wrapper wrapper">
        {!selectedFilm
          ? (
            <>
              <section className="films-new">
                <h2 className="films-new__title">
                  <span className="emoji">&#x1f525;</span>
                  Новинки
                </h2>
                <div className="films-new__cards">
                  {films.length
                    ? films.map(({
                      id,
                      title,
                      logline,
                      imageUrl,
                    }) => (
                      <CardNewFilm
                        onClick={(): void => handleSelectFilm(id)}
                        key={id}
                        id={id}
                        title={title}
                        logline={logline}
                        imageUrl={imageUrl}
                      />
                    ))
                    : <p className="films-new__cards--empty">Фильмы не найдены</p>}
                </div>
              </section>
              <section className="films-genres">
                <h2 className="films-genres__title">Жанры</h2>
                <div className="films-genres__genres">
                  {genres.map(({
                    id,
                    genre,
                    background,
                    emoji,
                  }) => (
                    <CardGenre key={id} id={id} genre={genre} background={background} emoji={emoji} />
                  ))}
                </div>
              </section>
            </>
          )
          : <FilmDetails film={selectedFilm} />}
      </div>
    </div>
  );
};

export default Films;
