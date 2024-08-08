import { cookies } from 'next/headers';

import type { Application } from './types';

import { config } from '../config/config';
import { getFetch } from './client';

const { sessionCookieName, apiUrl } = config;

const getApplication = async (applicationId: string): Promise<Application> => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get(sessionCookieName).value;

  return await getFetch<Application>(
    `${apiUrl}/application/get/${applicationId}`,
    accessToken
  );
};

export { getApplication };
