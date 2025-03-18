'use client';

import React from 'react';
import { Grid, useMediaQuery } from '@mui/material';

import type { EngagementEvent } from '../../../../../fetching/types';

import { ChevronLeft } from '../../../../common/Icons/ChevronLeft';
import { ChevronRight } from '../../../../common/Icons/ChevronRight';
import { EngagementCard } from './EngagementCard';

type EngagementTableParams = {
  engagementData: EngagementEvent[];
  currentEngagementPage: number;
  setCurrentEngagementPage: React.Dispatch<React.SetStateAction<number>>;
};

const EngagementTable: React.FC<EngagementTableParams> = ({
  engagementData,
  currentEngagementPage,
  setCurrentEngagementPage,
}) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const previousEngagementButtonDisabled = currentEngagementPage === 1;
  const nextEngagementButtonDisabled = engagementData.length === 0;

  const handleNextEngagementPage = () => {
    if (engagementData.length === 0) return;

    setCurrentEngagementPage((prevPage) => prevPage + 1);
  };

  const handlePreviousEngagementPage = () => {
    if (currentEngagementPage === 1) return;
    setCurrentEngagementPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const engagementEventsComponent = engagementData.map((event) => {
    return <EngagementCard key={event.id} event={event} />;
  });

  return (
    <div className="events">
      {engagementEventsComponent.length !== 0 ? (
        <Grid container className="headers" margin="0 0 20px 0 !important">
          <Grid item xs={8} md={4}>
            <p className="header">Target Id</p>
          </Grid>
          <Grid item xs={4} md={1}>
            <p className="header">Action</p>
          </Grid>
          {!isMobile && (
            <Grid item xs={2}>
              <p className="header">Actor</p>
            </Grid>
          )}
          {!isMobile && (
            <Grid item xs={2}>
              <p className="header">Navigation</p>
            </Grid>
          )}
          {!isMobile && (
            <Grid item xs={3}>
              <p className="header last">Date</p>
            </Grid>
          )}
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
  );
};

export { EngagementTable };
