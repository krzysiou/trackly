import React from 'react';

import { PatientInfo } from '../../../src/components/core/PatientInfo/PatientInfo';

export default async function Page({ params }: { params: { id: string } }) {
  return <PatientInfo id={params.id} />;
}
