import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Header from './header/header';
import config from '../core';
import Navigation from './navigation/navigation';
import Films from './films/films';
import Channels from './channels/channels';
import AuthContext from '../contexts/auth.context';
import filmsData from '../data/films.data.json';
import genresData from '../data/genres.data.json';
import channelsData from '../data/channels.data.json';
import useAuth from '../hooks/auth.hook';
import Footer from './footer/footer';
import 'core-js';

const App = (): React.ReactElement => {
  const auth = useAuth();

  return (
    <AuthContext.Provider value={auth}>
      <Header />
      <Navigation routes={config.routes} />
      <Switch>
        <Route
          path={config.routes.films.url}
          render={(): JSX.Element => <Films films={filmsData.data} genres={genresData.data} />}
        />
        <Route
          path={config.routes.channels.url}
          render={(): JSX.Element => <Channels channels={channelsData.data} />}
        />
        <Redirect to={config.routes.films.url} />
      </Switch>
      <Footer />
    </AuthContext.Provider>
  );
};

export default App;
