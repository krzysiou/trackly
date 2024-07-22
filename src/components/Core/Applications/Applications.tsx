'use client';

import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

import type { Application } from '../../../fetching/types';

import { Section } from '../../common/Section/Section';
import { Button } from '../../common/Button/Button';
import { Background } from '../../common/Background/Background';
import { ApplicationsIcon } from '../../common/Icons/ApplicationsIcon';
import { DeleteIcon } from '../../common/Icons/DeleteIcon';
import { postFetch } from '../../../fetching/client';
import { useAuthorization } from '../../hooks/AuthorizationHook';
import { config } from '../../../config/config';
import { ApplicationsStyled } from './Applications.styles';
import { AppCard } from './AppCard/AppCard';

const { apiUrl } = config;

type ApplicationsParams = {
  applications: Application[];
};

const Applications: React.FC<ApplicationsParams> = ({ applications }) => {
  const [applicationName, setApplicationName] = useState<string>();
  const [error, setError] = useState<string>();

  const router = useRouter();
  const { session } = useAuthorization();

  const createApp = useCallback(() => {
    postFetch(
      `${apiUrl}/application/create`,
      { applicationName },
      session,
      setError
    ).then(() => router.refresh());
    setApplicationName('');
  }, [applicationName, router, session]);

  const clearApplicationName = (
    <button className="clear" onClick={() => setApplicationName('')}>
      <DeleteIcon />
    </button>
  );

  const applicationsComponent =
    applications && applications.length != 0
      ? applications.map((application) => (
          <AppCard key={application.id} application={application} />
        ))
      : null;

  return (
    <ApplicationsStyled>
      <Background />
      <Section name="applications" SectionImage={ApplicationsIcon} align="left">
        <h2>Applications</h2>
        <p>
          When a <span>developer</span> creates a new website, they will need to
          set up a new <span>application</span> within our platform. During this
          process, a unique <span>application ID</span> will be generated. This
          ID will be used to track and segregate events specific to that
          website, ensuring <span>precise and individualized</span> data
          collection.
        </p>
        <div className="creation">
          <div className="input-container">
            <input
              type="text"
              id="applicationName"
              name="applicationName"
              placeholder="Application name"
              value={applicationName}
              onChange={(event) => setApplicationName(event.target.value)}
              tabIndex={1}
              onKeyDown={(event) => {
                if (event.code === 'Enter') {
                  createApp();
                  setApplicationName('');
                }
              }}
              required
            />
            {applicationName && clearApplicationName}
          </div>
          <Button label="Create application" callback={createApp} />
        </div>
        <p className="error">{error}</p>
      </Section>
      <div className="applications">{applicationsComponent}</div>
    </ApplicationsStyled>
  );
};

export { Applications };
