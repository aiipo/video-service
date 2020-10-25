import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import AuthContext from '../../contexts/auth.context';
import Modal from '../modal/modal';
import config from '../../core';
import { searchFilm } from '../../redux/actions/film.actions';
import Button from '../button/button';
import './header.scss';

const Header = (): React.ReactElement => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { token, name, login, logout, changeName } = useContext(AuthContext);
  const [isAuth, setIsAuth] = useState(!!token);
  const [form, setForm] = useState({ login: '', password: '' });
  const dispatch = useDispatch();

  const handleFormChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  useEffect(() => setIsAuth(!!token), [token]);

  const handleFilmSearchSubmit: React.ReactEventHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleSearchQuery = ({ currentTarget }: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(searchFilm(currentTarget.value));
  };

  const handleLogin = (event): void => {
    event.preventDefault();
    login('token', localStorage.getItem(config.localStorage.userName) || 'Andrey');
    setShowAuthModal(false);
  };

  const handleModalClose = (): void => setShowAuthModal(false);

  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <a href="/" className="header-logo">
          <img src="../../assets/sign.png" alt="Video service's logo" />
          <h1 className="header-logo__title">Видеосервис</h1>
        </a>
        <form className="header-search" onSubmit={handleFilmSearchSubmit}>
          <input
            className="header-search__input header-search__input--mobile"
            type="text"
            placeholder="Поиск..."
            onChange={handleSearchQuery}
            onFocus={(event): void => event.target.select()}
          />
          <div className="svg-search">
            <svg>
              <use href="#svg-search" />
              <svg xmlns="http://www.w3.org/2000/svg" className="none">
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 28" id="svg-search">
                  <path d="M32.9418651,-20.6880772 C37.9418651,-20.6880772 40.9418651,-16.6880772 40.9418651,-12.6880772 C40.9418651,-8.68807717 37.9418651,-4.68807717 32.9418651,-4.68807717 C27.9418651,-4.68807717 24.9418651,-8.68807717 24.9418651,-12.6880772 C24.9418651,-16.6880772 27.9418651,-20.6880772 32.9418651,-20.6880772 L32.9418651,-29.870624 C32.9418651,-30.3676803 33.3448089,-30.770624 33.8418651,-30.770624 C34.08056,-30.770624 34.3094785,-30.6758029 34.4782612,-30.5070201 L141.371843,76.386562" transform="translate(83.156854, 22.171573) rotate(-225.000000) translate(-83.156854, -22.171573)" />
                </symbol>
              </svg>
            </svg>
          </div>
          <Button className="header-search__submit button--transparent" type="submit">Найти</Button>
        </form>
        <div className="header-login">
          {isAuth && (
            <div
              className="header-login__name"
              onBlur={(event): '' | null | void => (
                event.currentTarget.textContent && changeName(event.currentTarget.textContent)
              )}
              contentEditable="true"
              role="textbox"
              aria-multiline="false"
            >
              {name}
            </div>
          )}
          <Button
            className={isAuth ? 'button--transparent' : ''}
            type="button"
            onClick={(): void => (isAuth ? logout() : setShowAuthModal(true))}
          >
            {isAuth ? 'Выйти' : 'Войти'}
          </Button>
          <Modal title="Вход" isOpen={showAuthModal} onClose={handleModalClose}>
            <form className="header-auth-form">
              <div className="header-auth-form-container">
                <input
                  className="header-auth-form-container__login header-search__input"
                  type="text"
                  placeholder="Логин"
                  name="login"
                  aria-label="login"
                  aria-describedby="login"
                  required
                  onChange={handleFormChange}
                  autoComplete="username"
                />
                <input
                  className="header-auth-form-container__password header-search__input"
                  type="password"
                  placeholder="Пароль"
                  name="password"
                  aria-label="password"
                  aria-describedby="password"
                  required
                  onChange={handleFormChange}
                  autoComplete="current-password"
                />
                <div className="header-auth-form-container__save">
                  <label htmlFor="auth-save">
                    <input
                      id="auth-save"
                      type="checkbox"
                      name="auth"
                    />
                    Запомнить
                  </label>
                </div>
              </div>
              <Button
                tabIndex={0}
                className="header-auth-form__submit"
                type="submit"
                onClick={handleLogin}
              >
                Войти
              </Button>
            </form>
          </Modal>
        </div>
      </div>
    </header>
  );
};

export default Header;
