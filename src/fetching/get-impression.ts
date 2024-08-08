import { cookies } from 'next/headers';

import type { ImpressionEvent } from './types';

import { config } from '../config/config';
import { postFetch } from './client';

const { sessionCookieName, apiUrl } = config;

const getImpression = async (
  applicationId: string,
  queryObject: Record<string, Record<string, string>>
): Promise<ImpressionEvent[]> => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get(sessionCookieName).value;

  return await postFetch<ImpressionEvent[]>(
    `${apiUrl}/impression/get`,
    { applicationId, queryObject },
    accessToken
  );
};

export { getImpression };
