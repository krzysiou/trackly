'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { getCookie } from 'cookies-next';
import { Box, Typography, useMediaQuery } from '@mui/material';

import type {
  EngagementEvent,
  ImpressionEvent,
  Application as ApplicationType,
} from '../../../../fetching/types';

import { Section } from '../../../common/Section/Section';
import { ListIcon } from '../../../common/Icons/ListIcon';
import { ListSectionStyled } from './ListSection.styles';
import { getImpression } from '../../../../fetching/get-impression';
import { config } from '../../../../config/config';
import { getEngagement } from '../../../../fetching/get-engagement';
import { ImpressionTable } from './ImpressionTable/ImpressionTable';
import { EngagementTable } from './EngagementTable/EngagementTable';
import { Button } from '../../../common/Button/Button';
import { SearchIcon } from '../../../common/Icons/SearchIcon';
import { tracker } from '../../../../tracker';

const { sessionCookieName } = config;

type ApplicationsParams = {
  userId?: string;
  applicationData: ApplicationType;
  engagementData: EngagementEvent[];
  impressionData: ImpressionEvent[];
};

const ListSection: React.FC<ApplicationsParams> = ({
  userId,
  applicationData,
  engagementData: initialEngagementData,
  impressionData: initialImpressionData,
}) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const { id: appId } = applicationData;

  const [currentEngagementPage, setCurrentEngagementPage] = useState<number>(1);
  const [engagementInput, setEngagementInput] = useState<string>('');
  const [engagementError, setEngagementError] = useState<string>('');
  const [engagementData, setEngagementData] = useState<EngagementEvent[]>(
    initialEngagementData
  );
  const [engagementFilter, setEngagementFilter] = useState<Record<
    string,
    Record<string, string>
  > | null>(null);

  const [currentImpressionPage, setCurrentImpressionPage] = useState<number>(1);
  const [impressionInput, setImpressionInput] = useState<string>('');
  const [impressionError, setImpressionError] = useState<string>('');
  const [impressionData, setImpressionData] = useState<ImpressionEvent[]>(
    initialImpressionData
  );
  const [impressionFilter, setImpressionFilter] = useState<Record<
    string,
    Record<string, string>
  > | null>(null);

  useEffect(() => {
    tracker.trackViewPage({
      actor: userId || 'unknown',
      targetType: 'List Section',
    });
  }, [userId]);

  const getEngagementData = useCallback(
    async (page: number) => {
      const accessToken = JSON.parse(
        getCookie(sessionCookieName)?.toString()
      ).accessToken;
      const fetchedEngagementData = await getEngagement(
        appId,
        engagementFilter || {},
        accessToken,
        page,
        10
      );

      setEngagementData(fetchedEngagementData);
    },
    [appId, engagementFilter]
  );

  const getImpressionData = useCallback(
    async (page: number) => {
      const accessToken = JSON.parse(
        getCookie(sessionCookieName)?.toString()
      ).accessToken;
      const fetchedImpressionData = await getImpression(
        appId,
        impressionFilter || {},
        accessToken,
        page,
        10
      );

      setImpressionData(fetchedImpressionData);
    },
    [appId, impressionFilter]
  );

  const handleEngagementSearch = () => {
    try {
      if (!engagementInput) {
        setEngagementFilter({});

        return;
      }

      const parsedInput = JSON.parse(engagementInput);
      if (typeof parsedInput === 'object' && !Array.isArray(parsedInput)) {
        setEngagementFilter(parsedInput);
      } else {
        setEngagementError('Input must be a valid MongoDB query');
        setTimeout(() => setEngagementError(''), 3000);
        setEngagementFilter({});
      }
    } catch (error) {
      setEngagementError('Input must be a valid MongoDB query');
      setTimeout(() => setEngagementError(''), 3000);
      setEngagementFilter({});
    }
  };

  const handleImpressionSearch = () => {
    try {
      if (!impressionInput) {
        setImpressionFilter({});

        return;
      }

      const parsedInput = JSON.parse(impressionInput);

      if (typeof parsedInput === 'object' && !Array.isArray(parsedInput)) {
        setImpressionFilter(parsedInput);
      } else {
        setImpressionError('Input must be a valid MongoDB query');
        setTimeout(() => setImpressionError(''), 3000);
        setImpressionFilter({});
      }
    } catch (error) {
      setImpressionError('Input must be a valid MongoDB query');
      setTimeout(() => setImpressionError(''), 3000);
      setImpressionFilter({});
    }
  };

  useEffect(() => {
    getEngagementData(currentEngagementPage);
  }, [getEngagementData, currentEngagementPage]);

  useEffect(() => {
    getImpressionData(currentImpressionPage);
  }, [getImpressionData, currentImpressionPage]);

  return (
    <ListSectionStyled>
      <Section name="list" SectionImage={ListIcon} align="left">
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: {
              xs: 'flex-start',
              md: 'center',
            },
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
          }}
        >
          <h2>Impression Events</h2>
          {impressionError && (
            <Typography sx={{ margin: '0 !important' }}>
              Error: {impressionError}
            </Typography>
          )}
        </Box>
        <Box
          display={'flex'}
          alignItems={'center'}
          my={2}
          gap={1}
          position={'relative'}
          width={'100%'}
        >
          <input
            type="text"
            placeholder="Enter MongoDB query"
            value={impressionInput}
            style={{ width: isMobile ? '100%' : '18rem' }}
            onChange={(e) => setImpressionInput(e.target.value)}
          />
          {isMobile ? (
            <button
              type="button"
              className="mobile-search"
              onClick={handleImpressionSearch}
            >
              <SearchIcon width={20} height={20} />
            </button>
          ) : (
            <Button Icon={SearchIcon} callback={handleImpressionSearch} />
          )}
        </Box>
        <ImpressionTable
          impressionData={impressionData}
          currentImpressionPage={currentImpressionPage}
          setCurrentImpressionPage={setCurrentImpressionPage}
        />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: {
              xs: 'flex-start',
              md: 'center',
            },
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
          }}
        >
          <h2>Engagement Events</h2>
          {engagementError && (
            <Typography sx={{ margin: '0 !important' }}>
              Error: {engagementError}
            </Typography>
          )}
        </Box>
        <Box
          display={'flex'}
          alignItems={'center'}
          my={2}
          gap={1}
          position={'relative'}
          width={'100%'}
        >
          <input
            type="text"
            placeholder="Enter MongoDB query"
            value={engagementInput}
            style={{ width: isMobile ? '100%' : '18rem' }}
            onChange={(e) => setEngagementInput(e.target.value)}
          />
          {isMobile ? (
            <button
              type="button"
              className="mobile-search"
              onClick={handleEngagementSearch}
            >
              <SearchIcon width={20} height={20} />
            </button>
          ) : (
            <Button Icon={SearchIcon} callback={handleEngagementSearch} />
          )}
        </Box>
        <EngagementTable
          engagementData={engagementData}
          currentEngagementPage={currentEngagementPage}
          setCurrentEngagementPage={setCurrentEngagementPage}
        />
      </Section>
    </ListSectionStyled>
  );
};

export { ListSection };
