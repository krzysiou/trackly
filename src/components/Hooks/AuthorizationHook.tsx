import axios from 'axios';
import Cookies from 'js-cookie';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { config } from '../../config/config';

const { apiUrl } = config;

const useAuthorization = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const hasSession = Cookies.get('isLoggedIn');

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
      const { data } = await axios.post(
        `${apiUrl}/login`,
        {
          username,
          password,
        },
        { withCredentials: true }
      );

      await Cookies.set('isLoggedIn', data?.isLoggedIn);
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
      const { data } = await axios.post(
        `${apiUrl}/register`,
        {
          username,
          password,
        },
        { withCredentials: true }
      );

      await Cookies.set('isLoggedIn', data?.isLoggedIn);
      setIsLoggedIn(true);

      router.push('/account');
    } catch (error) {
      setError(error.response?.data?.message);
    }
  };

  const signOut = async () => {
    try {
      await axios.post(`${apiUrl}/logout`, {}, { withCredentials: true });

      router.push('/');
    } catch (error) {
      console.error(error.response?.data?.message);
    }
  };

  return { isLoggedIn, signIn, signUp, signOut };
};

export { useAuthorization };
