import React from 'react';
import './card-new-film.scss';

export interface CardNewFilmInterface {
  id: string;
  title: string;
  logline: string;
  imageUrl: string;
}

const CardNewFilm = ({
  title,
  logline,
  imageUrl,
}: CardNewFilmInterface): React.ReactElement => (
  <div className="card">
    <div className="card-body">
      <div className="card-body__logline">{logline}</div>
      <img className="card-body__image" src={imageUrl} alt={title} />
    </div>
    <p className="card-title">{title}</p>
  </div>
);

export default CardNewFilm;
