import React from 'react';
import { NavLink } from 'react-router-dom';
import { ConfigInterface } from '../../core';
import './navigation.scss';

interface NavigationProps {
  routes: ConfigInterface['routes'];
}

const Navigation = ({ routes }: NavigationProps): React.ReactElement => (
  <nav className="navigation" role="navigation">
    <ul className="navigation__wrapper wrapper">
      {Object.entries(routes).map(([key, { name, url }]) => (
        <li key={key}>
          <NavLink className="navigation-link" activeClassName="navigation-link--active" to={url}>{name}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
