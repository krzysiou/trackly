import axios from 'axios';
import Cookies from 'js-cookie';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { config } from '../../config/config';

const { apiUrl, sessionCookieName } = config;

const useAuthorization = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const hasSession = Cookies.get(sessionCookieName);

    if (hasSession) {
      setIsLoggedIn(true);

      return;
    }

    setIsLoggedIn(false);
  }, [pathname]);

  const signIn = async (
    setError: React.Dispatch<React.SetStateAction<string>>,
    username: string,
    password: string
  ) => {
    try {
      const { data } = await axios.post(`${apiUrl}/login`, {
        username,
        password,
      });

      await Cookies.set(sessionCookieName, data?.accessToken);
      setIsLoggedIn(true);

      router.push('/account');
    } catch (error) {
      setError(error.response?.data?.message);
    }
  };

  const signUp = async (
    setError: React.Dispatch<React.SetStateAction<string>>,
    username: string,
    password: string
  ) => {
    try {
      const { data } = await axios.post(`${apiUrl}/register`, {
        username,
        password,
      });

      await Cookies.set(sessionCookieName, data?.accessToken);
      setIsLoggedIn(true);

      router.push('/account');
    } catch (error) {
      setError(error.response?.data?.message);
    }
  };

  const signOut = async () => {
    await Cookies.remove(sessionCookieName);
    setIsLoggedIn(false);

    router.push('/');
  };

  return { isLoggedIn, signIn, signUp, signOut };
};

export { useAuthorization };
