import React from 'react';
import './card-genre.scss';

export interface CardGenreInterface {
  id: string;
  genre: string;
  background: string;
  emoji: string;
}

const CardGenre = ({
  genre,
  background,
  emoji,
}: CardGenreInterface): React.ReactElement => (
  <div className="card-genre">
    <div className="card-genre-container" style={{ background }}>
      <span className="card-genre-container__emoji emoji">{emoji}</span>
      <span className="card-genre-container__genre">{genre}</span>
    </div>
  </div>
);

export default CardGenre;
