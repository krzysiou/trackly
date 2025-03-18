'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { getCookie } from 'cookies-next';
import { Grid } from '@mui/material';

import type {
  EngagementEvent,
  ImpressionEvent,
  Application as ApplicationType,
} from '../../../../fetching/types';

import { Section } from '../../../common/Section/Section';
import { ListIcon } from '../../../common/Icons/ListIcon';
import { ListSectionStyled } from './ListSection.styles';
import { ImpressionCard } from './ImpressionCard';
import { getImpression } from '../../../../fetching/get-impression';
import { config } from '../../../../config/config';
import { getEngagement } from '../../../../fetching/get-engagement';
import { ChevronLeft } from '../../../common/Icons/ChevronLeft';
import { ChevronRight } from '../../../common/Icons/ChevronRight';
import { EngagementCard } from './EngagementCard';

const { sessionCookieName } = config;

type ApplicationsParams = {
  applicationData: ApplicationType;
  engagementData: EngagementEvent[];
  impressionData: ImpressionEvent[];
};

const ListSection: React.FC<ApplicationsParams> = ({
  applicationData,
  engagementData: initialEngagementData,
  impressionData: initialImpressionData,
}) => {
  const [currentEngagementPage, setCurrentEngagementPage] = useState<number>(1);
  const [isEngagementLoading, setIsEngagementLoading] =
    useState<boolean>(false);

  const [engagementData, setEngagementData] = useState<EngagementEvent[]>(
    initialEngagementData
  );

  const [currentImpressionPage, setCurrentImpressionPage] = useState<number>(1);
  const [isImpressionLoading, setIsImpressionLoading] =
    useState<boolean>(false);

  const [impressionData, setImpressionData] = useState<ImpressionEvent[]>(
    initialImpressionData
  );

  const { id: appId } = applicationData;

  const previousEngagementButtonDisabled = currentEngagementPage === 1;
  const nextEngagementButtonDisabled =
    isEngagementLoading || engagementData.length === 0;

  const previousImpressionButtonDisabled = currentImpressionPage === 1;
  const nextImpressionButtonDisabled =
    isImpressionLoading || impressionData.length === 0;

  const getEngagementData = useCallback(
    async (page: number) => {
      setIsEngagementLoading(true);

      const accessToken = getCookie(sessionCookieName)?.toString();
      const fetchedEngagementData = await getEngagement(
        appId,
        {},
        accessToken,
        page,
        10
      );

      setEngagementData(fetchedEngagementData);
      setIsEngagementLoading(false);
    },
    [appId]
  );

  const getImpressionData = useCallback(
    async (page: number) => {
      setIsImpressionLoading(true);

      const accessToken = getCookie(sessionCookieName)?.toString();
      const fetchedImpressionData = await getImpression(
        appId,
        {},
        accessToken,
        page,
        10
      );

      setImpressionData(fetchedImpressionData);
      setIsImpressionLoading(false);
    },
    [appId]
  );

  const handleNextEngagementPage = () => {
    if (engagementData.length === 0) return;
    if (isEngagementLoading) return;

    setCurrentEngagementPage((prevPage) => prevPage + 1);
  };

  const handlePreviousEngagementPage = () => {
    if (currentEngagementPage === 1) return;
    setCurrentEngagementPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextImpressionPage = () => {
    if (impressionData.length === 0) return;
    if (isImpressionLoading) return;

    setCurrentImpressionPage((prevPage) => prevPage + 1);
  };

  const handlePreviousImpressionPage = () => {
    if (currentImpressionPage === 1) return;
    setCurrentImpressionPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  useEffect(() => {
    getEngagementData(currentEngagementPage);
  }, [getEngagementData, currentEngagementPage]);

  useEffect(() => {
    getImpressionData(currentImpressionPage);
  }, [getImpressionData, currentImpressionPage]);

  const engagementEventsComponent = engagementData.map((event) => {
    return <EngagementCard key={event.id} event={event} />;
  });

  const impressionEventsComponent = impressionData.map((event) => {
    return <ImpressionCard key={event.id} event={event} />;
  });

  return (
    <ListSectionStyled>
      <Section name="list" SectionImage={ListIcon} align="left">
        <div className="events">
          <h2>Impression Events</h2>
          {impressionEventsComponent.length !== 0 ? (
            <Grid container className="headers">
              <Grid item xs={4}>
                <p className="header">Target Id</p>
              </Grid>
              <Grid item xs={1}>
                <p className="header">Action</p>
              </Grid>
              <Grid item xs={2}>
                <p className="header">Actor</p>
              </Grid>
              <Grid item xs={2}>
                <p className="header">Navigation</p>
              </Grid>
              <Grid item xs={3}>
                <p className="header last">Date</p>
              </Grid>
              {impressionEventsComponent}
            </Grid>
          ) : (
            <p className="no-data-message">There are no impression events.</p>
          )}
          <div className="pagination-controls">
            <button
              onClick={handlePreviousImpressionPage}
              disabled={previousImpressionButtonDisabled}
            >
              <ChevronLeft />
            </button>
            <span>Page {currentImpressionPage}</span>
            <button
              onClick={handleNextImpressionPage}
              disabled={nextImpressionButtonDisabled}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className="events">
          <h2>Engagement Events</h2>
          {engagementEventsComponent.length !== 0 ? (
            <Grid container className="headers">
              <Grid item xs={4}>
                <p className="header">Target Id</p>
              </Grid>
              <Grid item xs={1}>
                <p className="header">Action</p>
              </Grid>
              <Grid item xs={2}>
                <p className="header">Actor</p>
              </Grid>
              <Grid item xs={2}>
                <p className="header">Navigation</p>
              </Grid>
              <Grid item xs={3}>
                <p className="header last">Date</p>
              </Grid>
              {engagementEventsComponent}
            </Grid>
          ) : (
            <p className="no-data-message">There are no engagement events.</p>
          )}
          <div className="pagination-controls">
            <button
              onClick={handlePreviousEngagementPage}
              disabled={previousEngagementButtonDisabled}
            >
              <ChevronLeft />
            </button>
            <span>Page {currentEngagementPage}</span>
            <button
              onClick={handleNextEngagementPage}
              disabled={nextEngagementButtonDisabled}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </Section>
    </ListSectionStyled>
  );
};

export { ListSection };
