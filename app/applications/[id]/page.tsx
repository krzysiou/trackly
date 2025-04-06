import React from 'react';
import { cookies } from 'next/headers';

import { getEngagement } from '../../../src/fetching/get-engagement';
import { getImpression } from '../../../src/fetching/get-impression';
import { getApplication } from '../../../src/fetching/get-application';
import { Application } from '../../../src/components/core/Application/Application';
import { config } from '../../../src/config/config';

const { sessionCookieName } = config;

export default async function Page({ params }: { params: { id: string } }) {
  const cookieStore = cookies();
  const accessToken = JSON.parse(
    cookieStore.get(sessionCookieName).value || 'null'
  )?.accessToken;
  const userId = JSON.parse(cookieStore.get(sessionCookieName).value || 'null')
    ?.userId;

  const applicationData = await getApplication(params.id);
  const engagementData = await getEngagement(params.id, {}, accessToken);
  const impressionData = await getImpression(params.id, {}, accessToken);

  return (
    <Application
      userId={userId}
      applicationData={applicationData}
      engagementData={engagementData}
      impressionData={impressionData}
    />
  );
}
