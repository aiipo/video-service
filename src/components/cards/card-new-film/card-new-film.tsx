import React from 'react';
import './card-new-film.scss';

export interface CardNewFilmInterface {
  id: string;
  title: string;
  logline: string;
  imageUrl: string;
}

export interface CardNewFilmProps extends CardNewFilmInterface {
  onClick?: () => void;
}

const CardNewFilm = ({
  title,
  logline,
  imageUrl,
  onClick = (): void => {},
}: CardNewFilmProps): React.ReactElement => (
  <div className="card" onClick={onClick} role="presentation">
    <div className="card-body">
      <div className="card-body__logline">{logline}</div>
      <img className="card-body__image" src={imageUrl} alt={title} />
    </div>
    <p className="card-title">{title}</p>
  </div>
);

export default CardNewFilm;
