import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/auth.context';
import Modal from '../modal/modal';
import config from '../../core';
import './header.scss';

const Header = (): React.ReactElement => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { token, name, login, logout, changeName } = useContext(AuthContext);
  const [isAuth, setIsAuth] = useState(!!token);

  useEffect(() => setIsAuth(!!token), [token]);

  const handleSubmit: React.ReactEventHandler = (event) => {
    event.preventDefault();
  };

  const handleLogin = (event): void => {
    event.preventDefault();
    login('token', localStorage.getItem(config.localStorage.userName) || 'Andrey');
    setShowAuthModal(false);
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
          <button
            className={`header-login__button ${isAuth ? 'header-login__button--auth' : ''}`}
            type="button"
            onClick={(): void => (isAuth ? logout() : setShowAuthModal(true))}
          >
            {isAuth ? 'Выйти' : 'Войти'}
          </button>
          <Modal title="Вход" isOpen={showAuthModal}>
            <form className="header-auth-form">
              <div className="header-auth-form-container">
                <input
                  className="header-auth-form-container__login header-search__input"
                  type="text"
                  placeholder="Логин"
                  name="login"
                  required
                  autoComplete="username"
                />
                <input
                  className="header-auth-form-container__password header-search__input"
                  type="password"
                  placeholder="Пароль"
                  name="password"
                  required
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
              <button
                tabIndex={0}
                className="header-auth-form__submit header-login__button"
                type="submit"
                onClick={handleLogin}
              >
                Войти
              </button>
            </form>
          </Modal>
        </div>
      </div>
    </header>
  );
};

export default Header;
