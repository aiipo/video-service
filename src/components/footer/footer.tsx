import React from 'react';
import './footer.scss';

const Footer = (): React.ReactElement => (
  <footer className="footer">
    <div className="footer__wrapper wrapper">
      <a className="footer-logo" href="https://www.htc-cs.ru">
        <img src="../../assets/htc.png" alt="High technologies center's logotype" />
      </a>
      <div className="footer-container">
        <span className="footer-container__location">426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)</span>
        <div className="footer-container__tel">
          <a href="tel:+7(3412)93-88-61">+7 (3412) 93-88-61</a>
          <span>, </span>
          <a href="tel:43-29-29">43-29-29</a>
        </div>
        <a className="footer-container__site" href="https://www.htc-cs.ru" target="_blank" rel="noreferrer">
          htc-cs.ru
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
