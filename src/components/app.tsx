import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Header from './header/header';
import config from '../core';
import Navigation from './navigation/navigation';
import Films from './films/films';
import Channels from './channels/channels';
import AuthContext from '../contexts/auth.context';
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
          component={Films}
        />
        <Route
          path={config.routes.channels.url}
          component={Channels}
        />
        <Redirect to={config.routes.films.url} />
      </Switch>
      <Footer />
    </AuthContext.Provider>
  );
};

export default App;
