import React from 'react';
import './header.scss';

const Header = (): React.ReactElement => {
  const handleSubmit: React.ReactEventHandler = (event) => {
    event.preventDefault();
  };

  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <a href="/" className="header-logo">
          <img src="../../assets/sign.png" alt="Video service's logo" />
          <h1 className="header-logo__title">Видеосервис</h1>
        </a>
        <form className="header-search" onSubmit={handleSubmit}>
          <input
            className="header-search__input"
            type="text"
            placeholder="Поиск..."
            onFocus={(event): void => event.target.select()}
          />
          <button className="header-search__submit" type="submit">Найти</button>
        </form>
        <div className="header-login">
          <button className="header-login__button" type="button">Войти</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
