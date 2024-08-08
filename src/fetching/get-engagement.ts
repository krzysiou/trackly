import { cookies } from 'next/headers';

import type { EngagementEvent } from './types';

import { config } from '../config/config';
import { postFetch } from './client';

const { sessionCookieName, apiUrl } = config;

const getEngagement = async (
  applicationId: string,
  queryObject: Record<string, Record<string, string>>
): Promise<EngagementEvent[]> => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get(sessionCookieName).value;

  return await postFetch<EngagementEvent[]>(
    `${apiUrl}/engagement/get`,
    { applicationId, queryObject },
    accessToken
  );
};

export { getEngagement };
