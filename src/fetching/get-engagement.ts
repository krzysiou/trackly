import type { EngagementEvent } from './types';

import { config } from '../config/config';
import { postFetch } from './client';

const { apiUrl } = config;

const getEngagement = async (
  applicationId: string,
  queryObject: Record<string, Record<string, string>>,
  accessToken: string,
  page: number = 1,
  limit: number = 10
): Promise<EngagementEvent[]> => {
  return await postFetch<EngagementEvent[]>(
    `${apiUrl}/engagement/get?page=${page}&limit=${limit}`,
    { applicationId, queryObject },
    accessToken
  );
};

export { getEngagement };
