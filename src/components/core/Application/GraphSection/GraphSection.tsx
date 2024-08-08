'use client';

import React from 'react';

import type {
  EngagementEvent,
  ImpressionEvent,
  Application as ApplicationType,
} from '../../../../fetching/types';

import { Section } from '../../../common/Section/Section';
import { GraphIcon } from '../../../common/Icons/GraphIcon';
import { GraphSectionStyled } from './GraphSection.styles';

type ApplicationsParams = {
  applicationData: ApplicationType;
  engagementData: EngagementEvent[];
  impressionData: ImpressionEvent[];
};

const GraphSection: React.FC<ApplicationsParams> = ({
  applicationData,
  engagementData,
  impressionData,
}) => {
  return (
    <GraphSectionStyled>
      <Section name="graph" SectionImage={GraphIcon} align="left">
        <h2>Graph</h2>
      </Section>
    </GraphSectionStyled>
  );
};

export { GraphSection };
