import { createContext } from 'react';

const AuthContext = createContext({
  name: '',
  token: '',
  login: (token: string, name: string) => {},
  logout: () => {},
  changeName: (name: string) => {},
});

export default AuthContext;
