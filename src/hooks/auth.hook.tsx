import { useCallback, useState } from 'react';
import config from '../core';

export interface UseAuthResult {
  name: string;
  token: string;
  login: (token: string, name: string) => void;
  logout: () => void;
  changeName: (name: string) => void;
}

const useAuth = (): UseAuthResult => {
  const [name, setName] = useState<UseAuthResult['name']>('');
  const [token, setToken] = useState<UseAuthResult['token']>('');

  const login: UseAuthResult['login'] = useCallback((token, userName) => {
    const name = userName.trim();
    if (token && name) {
      setName(name);
      setToken(token);

      localStorage.setItem(config.localStorage.userName, name);
    }
  }, []);

  const logout: UseAuthResult['logout'] = useCallback(() => {
    setName('');
    setToken('');
  }, []);

  const changeName: UseAuthResult['changeName'] = useCallback((newName) => {
    const name = newName.trim();
    if (name) {
      setName(name);

      localStorage.setItem(config.localStorage.userName, name);
    }
  }, []);

  return { login, logout, name, token, changeName };
};

export default useAuth;
