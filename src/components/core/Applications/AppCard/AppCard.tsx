'use client';

import React from 'react';

import type { Application } from '../../../../fetching/types';

import { AppCardStyled } from './AppCard.styles';
import { AppIcon } from '../../../common/Icons/AppIcon';
import { useAuthorization } from '../../../hooks/AuthorizationHook';
import { tracker } from '../../../../tracker';
import { navigate } from '../../../hooks/NavigateHook';

type ApplicationsParams = {
  application: Application;
};

const AppCard: React.FC<ApplicationsParams> = ({ application }) => {
  const { id, name, date } = application;

  const { session } = useAuthorization();

  return (
    <AppCardStyled
      onClick={() => {
        tracker.trackClickElement({
          actor: session?.userId || 'unknown',
          targetName: 'Application Button',
          targetPageType: 'Applications',
        });
        navigate(`/applications/${id}`);
      }}
    >
      <AppIcon />
      <div className="info">
        <div className="card-header">
          <h3 className="app-name">{name}</h3>
          <p className="id-info">{id}</p>
        </div>
        <p className="creation-date">Created: {date}</p>
      </div>
    </AppCardStyled>
  );
};

export { AppCard };
