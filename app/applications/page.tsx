import React from 'react';

import { Applications } from '../../src/components/core/Applications/Applications';
import { getAllApplications } from '../../src/fetching/get-all-applications';

export default async function Page() {
  const applications = await getAllApplications();

  return <Applications applications={applications} />;
}
