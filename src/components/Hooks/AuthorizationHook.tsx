import axios from 'axios';
import { useRouter } from 'next/navigation';

import { config } from '../../config/config';

const { apiUrl } = config;

const useAuthorization = () => {
  const router = useRouter();

  const signIn = async (
    setError: React.Dispatch<React.SetStateAction<string>>,
    username: string,
    password: string
  ) => {
    try {
      await axios.post(
        `${apiUrl}/login`,
        {
          username,
          password,
        },
        { withCredentials: true }
      );

      router.push('/account');
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const signUp = async (
    setError: React.Dispatch<React.SetStateAction<string>>,
    username: string,
    password: string
  ) => {
    try {
      await axios.post(
        `${apiUrl}/register`,
        {
          username,
          password,
        },
        { withCredentials: true }
      );

      router.push('/account');
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const signOut = async () => {
    try {
      await axios.post(`${apiUrl}/logout`, {}, { withCredentials: true });

      router.push('/');
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return { signIn, signUp, signOut };
};

export { useAuthorization };
