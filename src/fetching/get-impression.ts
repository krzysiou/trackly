import type { ImpressionEvent } from './types';

import { config } from '../config/config';
import { postFetch } from './client';

const { apiUrl } = config;

const getImpression = async (
  applicationId: string,
  queryObject: Record<string, Record<string, string>>,
  accessToken: string,
  page: number = 1,
  limit: number = 10
): Promise<ImpressionEvent[]> => {
  return await postFetch<ImpressionEvent[]>(
    `${apiUrl}/impression/get?page=${page}&limit=${limit}`,
    { applicationId, queryObject },
    accessToken
  );
};

export { getImpression };
