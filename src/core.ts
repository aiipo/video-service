export interface ConfigInterface {
  routes: {
    [key: string]: {
      url: string;
      name: string;
    };
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
};

export default config;
