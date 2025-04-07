'use client';

import React, { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

import { StyledComponentsRegistry } from './registry';
import { Reset } from '../public/styles/Reset.styles';
import { Globals } from '../public/styles/Globals.styles';
import { Footer } from '../src/components/core/Footer/Footer';
import { Navbar } from '../src/components/core/Navbar/Navbar';
import { useAuthorization } from '../src/components/hooks/AuthorizationHook';
import { tracker } from '../src/tracker';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { session } = useAuthorization();

  useEffect(() => {
    tracker.registerViewElementTracking({
      actor: session?.userId || 'unknown',
    });

    return () => {
      tracker.unregisterViewElementTracking();
    };
  }, [session]);

  return (
    <>
      <head>
        <title>trackly</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <html lang="en">
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <Reset />
            <Globals />
            <body>
              <Navbar />
              {children}
              <Footer />
            </body>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </html>
    </>
  );
}
