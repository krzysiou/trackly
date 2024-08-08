import React from 'react';

import { getEngagement } from '../../../src/fetching/get-engagement';
import { getImpression } from '../../../src/fetching/get-impression';
import { getApplication } from '../../../src/fetching/get-application';
import { Application } from '../../../src/components/core/Application/Application';

export default async function Page({ params }: { params: { id: string } }) {
  const applicationData = await getApplication(params.id);
  const engagementData = await getEngagement(params.id, {});
  const impressionData = await getImpression(params.id, {});

  return (
    <Application
      applicationData={applicationData}
      engagementData={engagementData}
      impressionData={impressionData}
    />
  );
}
