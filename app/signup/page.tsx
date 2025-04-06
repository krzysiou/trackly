import React from 'react';
import { cookies } from 'next/headers';

import { SignUp } from '../../src/components/core/SignUp/SignUp';
import { config } from '../../src/config/config';

const { sessionCookieName } = config;

export default async function Page() {
  const cookieStore = cookies();
  const userId = JSON.parse(cookieStore.get(sessionCookieName)?.value || 'null')
    ?.userId;

  return <SignUp userId={userId} />;
}
