import React from 'react';
import './films.scss';
import CardNewFilm, { CardNewFilmInterface } from '../cards/card-new-film/card-new-film';
import CardGenre, { CardGenreInterface } from '../cards/card-genre/card-genre';

interface FilmsInterface {
  films: CardNewFilmInterface[];
  genres: CardGenreInterface[];
}

const Films = ({
  films,
  genres,
}: FilmsInterface): React.ReactElement => (
  <div className="films">
    <div className="films__wrapper wrapper">
      <section className="films-new">
        <h2 className="films-new__title">
          <span className="emoji">&#x1f525;</span>
          Новинки
        </h2>
        <div className="films-new__cards">
          {films.map(({
            id,
            title,
            logline,
            imageUrl,
          }) => (
            <CardNewFilm key={id} id={id} title={title} logline={logline} imageUrl={imageUrl} />
          ))}
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
    </div>
  </div>
);

export default Films;
