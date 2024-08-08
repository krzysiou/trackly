'use client';

import React, { useState } from 'react';

import type {
  EngagementEvent,
  ImpressionEvent,
  Application as ApplicationType,
} from '../../../fetching/types';

import { Section } from '../../common/Section/Section';
import { Background } from '../../common/Background/Background';
import { ApplicationIcon } from '../../common/Icons/ApplicationIcon';
import { ListSection } from './ListSection/ListSection';
import { GraphSection } from './GraphSection/GraphSection';
import { ApplicationStyled } from './Application.styles';
import { Button } from '../../common/Button/Button';
import { ListWhiteIcon } from '../../common/Icons/ListWhiteIcon';
import { GraphWhiteIcon } from '../../common/Icons/GraphWhiteIcon';

type ViewMode = 'list' | 'graph';

type ApplicationsParams = {
  applicationData: ApplicationType;
  engagementData: EngagementEvent[];
  impressionData: ImpressionEvent[];
};

const Application: React.FC<ApplicationsParams> = ({
  applicationData,
  engagementData,
  impressionData,
}) => {
  const [mode, setMode] = useState<ViewMode>('list');

  const viewModeComponent =
    mode === 'list' ? (
      <ListSection
        applicationData={applicationData}
        engagementData={engagementData}
        impressionData={impressionData}
      />
    ) : (
      <GraphSection
        applicationData={applicationData}
        engagementData={engagementData}
        impressionData={impressionData}
      />
    );

  return (
    <ApplicationStyled>
      <Background />
      <Section name="application" SectionImage={ApplicationIcon} align="left">
        <h2>{applicationData.name}</h2>
        <h3 className="app-id">{applicationData.id}</h3>
        <h3 className="app-date">Created: {applicationData.date}</h3>
        <p>
          You&apos;re viewing <span>detailed insights</span> for your selected
          application. Below, you&apos;ll find interactive graphs displaying{' '}
          <span>impressions</span> and <span>engagement</span> events, giving
          you a clear picture of how users are interacting with your site. Use
          these <span>visualizations</span> to track performance trends,
          identify key patterns, and make data-driven decisions to{' '}
          <span>enhance</span> your application&apos;s impact.
        </p>
        <div className="view-mode-buttons">
          <Button Icon={ListWhiteIcon} callback={() => setMode('list')} />
          <Button Icon={GraphWhiteIcon} callback={() => setMode('graph')} />
        </div>
      </Section>
      {viewModeComponent}
    </ApplicationStyled>
  );
};

export { Application };
