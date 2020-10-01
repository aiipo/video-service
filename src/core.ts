export interface ConfigInterface {
  routes: {
    [key: string]: {
      url: string;
      name: string;
    };
  };

  localStorage: {
    [key: string]: string;
  };
}

const config: ConfigInterface = {
  routes: {
    films: {
      url: '/films',
      name: 'Фильмы',
    },
    channels: {
      url: '/channels',
      name: 'Телеканалы',
    },
  },

  localStorage: {
    userName: 'userName',
    userAuthData: 'userAuthData',
  },
};

export default config;
