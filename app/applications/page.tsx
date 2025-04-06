import React from 'react';
import { cookies } from 'next/headers';

import { Applications } from '../../src/components/core/Applications/Applications';
import { getAllApplications } from '../../src/fetching/get-all-applications';
import { config } from '../../src/config/config';

const { sessionCookieName } = config;

export default async function Page() {
  const applications = await getAllApplications();

  const cookieStore = cookies();
  const userId = JSON.parse(cookieStore.get(sessionCookieName)?.value || 'null')
    ?.userId;

  return <Applications userId={userId} applications={applications} />;
}
