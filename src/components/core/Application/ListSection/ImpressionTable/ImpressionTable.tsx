'use client';

import React from 'react';
import { Grid, useMediaQuery } from '@mui/material';

import type { ImpressionEvent } from '../../../../../fetching/types';

import { ImpressionCard } from './ImpressionCard';
import { ChevronLeft } from '../../../../common/Icons/ChevronLeft';
import { ChevronRight } from '../../../../common/Icons/ChevronRight';
import { tracker } from '../../../../../tracker';

type ImpressionTableParams = {
  userId?: string;
  impressionData: ImpressionEvent[];
  currentImpressionPage: number;
  setCurrentImpressionPage: React.Dispatch<React.SetStateAction<number>>;
};

const ImpressionTable: React.FC<ImpressionTableParams> = ({
  userId,
  impressionData,
  currentImpressionPage,
  setCurrentImpressionPage,
}) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const previousImpressionButtonDisabled = currentImpressionPage === 1;
  const nextImpressionButtonDisabled = impressionData.length === 0;

  const handleNextImpressionPage = () => {
    if (impressionData.length === 0) return;

    setCurrentImpressionPage((prevPage) => prevPage + 1);
  };

  const handlePreviousImpressionPage = () => {
    if (currentImpressionPage === 1) return;
    setCurrentImpressionPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const impressionEventsComponent = impressionData.map((event) => {
    return <ImpressionCard key={event.id} event={event} />;
  });

  return (
    <div className="events">
      {impressionEventsComponent.length !== 0 ? (
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
          {impressionEventsComponent}
        </Grid>
      ) : (
        <p className="no-data-message">There are no impression events.</p>
      )}
      <div className="pagination-controls">
        <button
          onClick={() => {
            tracker.trackClickElement({
              actor: userId || 'unknown',
              targetName: 'Impression Previous Button',
              targetPageType: 'List Section',
            });
            handlePreviousImpressionPage();
          }}
          disabled={previousImpressionButtonDisabled}
        >
          <ChevronLeft />
        </button>
        <span>Page {currentImpressionPage}</span>
        <button
          onClick={() => {
            tracker.trackClickElement({
              actor: userId || 'unknown',
              targetName: 'Impression Next Button',
              targetPageType: 'List Section',
            });
            handleNextImpressionPage();
          }}
          disabled={nextImpressionButtonDisabled}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export { ImpressionTable };
