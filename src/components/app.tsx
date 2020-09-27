import React from 'react';
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Header from './header/header';
import config from '../core';
import Navigation from './navigation/navigation';
import Films from './films/films';
import filmsData from '../data/films.data.json';
import genresData from '../data/genres.data.json';

const App = (): React.ReactElement => (
  <div className="app">
    <Header />
    <Navigation routes={config.routes} />
    <Switch>
      <Route
        path={config.routes.films.url}
        render={(): JSX.Element => <Films films={filmsData.data} genres={genresData.data} />}
      />
      <Route
        path={config.routes.channels.url}
      />
      <Redirect to={config.routes.films.url} />
    </Switch>
  </div>
);

export default App;
