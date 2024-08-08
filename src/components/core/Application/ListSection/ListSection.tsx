'use client';

import React from 'react';

import type {
  EngagementEvent,
  ImpressionEvent,
  Application as ApplicationType,
} from '../../../../fetching/types';

import { Section } from '../../../common/Section/Section';
import { ListIcon } from '../../../common/Icons/ListIcon';
import { ListSectionStyled } from './ListSection.styles';

type ApplicationsParams = {
  applicationData: ApplicationType;
  engagementData: EngagementEvent[];
  impressionData: ImpressionEvent[];
};

const ListSection: React.FC<ApplicationsParams> = () => {
  return (
    <ListSectionStyled>
      <Section name="list" SectionImage={ListIcon} align="left">
        <h2>List</h2>
      </Section>
    </ListSectionStyled>
  );
};

export { ListSection };
