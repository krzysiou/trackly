import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

import { config as appConfig } from './src/config/config';

const { sessionCookieName } = appConfig;

const validationPaths = ['/signin', '/signup'];

export const config = {
  matcher: ['/signin', '/signup', '/applications/:path*'],
};

const middleware = (request: NextRequest) => {
  const isValidationPath = validationPaths.includes(request.nextUrl.pathname);
  const sessionCookie = request.cookies.get(sessionCookieName)?.value;

  const signinURL = new URL('/signin', request.url);
  const applicationsUrl = new URL('/applications', request.url);

  if (!sessionCookie && !isValidationPath) {
    return NextResponse.redirect(signinURL);
  }

  if (sessionCookie && isValidationPath) {
    return NextResponse.redirect(applicationsUrl);
  }
};

export { middleware };
