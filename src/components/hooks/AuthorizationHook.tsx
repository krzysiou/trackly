import axios from 'axios';
import Cookies from 'js-cookie';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { config } from '../../config/config';
import { tracker } from '../../tracker';

const { apiUrl, sessionCookieName } = config;

const useAuthorization = () => {
  const [session, setSession] = useState<{
    accessToken: string;
    userId: string;
  } | null>(null);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const session = JSON.parse(Cookies.get(sessionCookieName) || 'null');

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
      tracker.trackSubmitForm({
        actor: session?.userId || 'unknown',
        targetName: 'Sign In Form',
        targetPageType: 'Sign In',
      });

      const { data } = await axios.post(`${apiUrl}/login`, {
        username,
        password,
      });

      await Cookies.set(sessionCookieName, JSON.stringify(data));
      setSession(data);

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
      tracker.trackSubmitForm({
        actor: session?.userId || 'unknown',
        targetName: 'Sign Up Form',
        targetPageType: 'Sign Up',
      });

      const { data } = await axios.post(`${apiUrl}/register`, {
        username,
        password,
      });

      await Cookies.set(sessionCookieName, JSON.stringify(data));
      setSession(data);

      router.push('/applications');
    } catch (error) {
      setError(error.response?.data?.message);
    }
  };

  const signOut = async () => {
    tracker.trackSubmitForm({
      actor: session?.userId || 'unknown',
      targetName: 'Sign Out Form',
      targetPageType: 'Navbar',
    });

    await Cookies.remove(sessionCookieName);
    setSession(null);

    router.push('/');
  };

  return { session, signIn, signUp, signOut };
};

export { useAuthorization };
