import axios from 'axios';
import Cookies from 'js-cookie';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { config } from '../../config/config';

const { apiUrl, sessionCookieName } = config;

const useAuthorization = () => {
  const [session, setSession] = useState<string>();

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const session = Cookies.get(sessionCookieName);

    if (session) {
      setSession(session);

      return;
    }

    setSession(null);
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
      setSession(data?.accessToken);

      router.push('/applications');
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
      setSession(data?.accessToken);

      router.push('/applications');
    } catch (error) {
      setError(error.response?.data?.message);
    }
  };

  const signOut = async () => {
    await Cookies.remove(sessionCookieName);
    setSession(null);

    router.push('/');
  };

  return { session, signIn, signUp, signOut };
};

export { useAuthorization };
