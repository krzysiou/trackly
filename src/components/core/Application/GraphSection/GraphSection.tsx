'use client';

import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { getCookie } from 'cookies-next';

import type {
  EngagementEvent,
  ImpressionEvent,
  Application as ApplicationType,
} from '../../../../fetching/types';

import { Section } from '../../../common/Section/Section';
import { GraphIcon } from '../../../common/Icons/GraphIcon';
import { GraphSectionStyled } from './GraphSection.styles';
import { Button } from '../../../common/Button/Button';
import { SearchIcon } from '../../../common/Icons/SearchIcon';
import { config } from '../../../../config/config';
import { getEngagement } from '../../../../fetching/get-engagement';
import { getImpression } from '../../../../fetching/get-impression';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Timeline = 'today' | 'week' | 'month';

const generateLabels = (timeline: Timeline): string[] => {
  const now = new Date();
  const labels: string[] = [];

  const range = timeline === 'today' ? 24 : timeline === 'week' ? 7 : 30;
  const unit = timeline === 'today' ? 60 * 60 * 1000 : 24 * 60 * 60 * 1000;

  for (let i = range - 1; i >= 0; i--) {
    const date = new Date(now.getTime() - i * unit);

    if (timeline === 'today') {
      labels.push(`${date.getHours().toString().padStart(2, '0')}:00`);
    } else if (timeline === 'week') {
      labels.push(date.toLocaleDateString('en-US', { weekday: 'long' }));
    } else {
      labels.push(date.toISOString().split('T')[0]);
    }
  }

  return labels;
};

const prepareGraphData = (events: { date: string }[], timeline: Timeline) => {
  const now = new Date();
  const labels = generateLabels(timeline);
  const dataMap: Record<string, number> = {};

  events.forEach((event) => {
    const eventDate = new Date(event.date);

    if (
      timeline === 'today' &&
      now.getTime() - eventDate.getTime() > 24 * 60 * 60 * 1000
    ) {
      return;
    }

    if (
      timeline === 'week' &&
      now.getTime() - eventDate.getTime() > 7 * 24 * 60 * 60 * 1000
    ) {
      return;
    }

    if (
      timeline === 'month' &&
      now.getTime() - eventDate.getTime() > 30 * 24 * 60 * 60 * 1000
    ) {
      return;
    }

    const key =
      timeline === 'today'
        ? `${eventDate.getHours().toString().padStart(2, '0')}:00`
        : timeline === 'week'
        ? eventDate.toLocaleDateString('en-US', { weekday: 'long' })
        : eventDate.toISOString().split('T')[0];

    if (labels.includes(key)) {
      dataMap[key] = (dataMap[key] || 0) + 1;
    }
  });

  const data = labels.map((label) => dataMap[label] || 0);

  return { labels, data };
};

const chartOptions = (maxValue: number) => ({
  responsive: true,
  maintainAspectRatio: true,
  layout: {
    padding: {
      top: 20,
      bottom: 20,
    },
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      min: 0,
      max: Math.max(10, maxValue),
      ticks: {
        stepSize: 1,
        callback: (value: number) => value,
      },
    },
  },
});

const { sessionCookieName } = config;

type ApplicationsParams = {
  applicationData: ApplicationType;
  engagementData: EngagementEvent[];
  impressionData: ImpressionEvent[];
};

const GraphSection: React.FC<ApplicationsParams> = ({
  applicationData,
  engagementData: initialEngagementData,
  impressionData: initialImpressionData,
}) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const { id: appId } = applicationData;

  const [engagementTimeline, setEngagementTimeline] =
    useState<Timeline>('today');
  const [impressionTimeline, setImpressionTimeline] =
    useState<Timeline>('today');

  const [engagementInput, setEngagementInput] = useState<string>('');
  const [impressionInput, setImpressionInput] = useState<string>('');
  const [engagementError, setEngagementError] = useState<string>('');
  const [impressionError, setImpressionError] = useState<string>('');

  const [engagementData, setEngagementData] = useState<EngagementEvent[]>(
    initialEngagementData
  );
  const [impressionData, setImpressionData] = useState<ImpressionEvent[]>(
    initialImpressionData
  );

  useEffect(() => {
    const accessToken = JSON.parse(
      getCookie(sessionCookieName)?.toString()
    ).accessToken;

    const fetchData = async () => {
      const fetchedEngagementData = await getEngagement(
        appId,
        {},
        accessToken,
        1,
        1000000
      );
      const fetchedImpressionData = await getImpression(
        appId,
        {},
        accessToken,
        1,
        1000000
      );

      setEngagementData(fetchedEngagementData);
      setImpressionData(fetchedImpressionData);
    };

    fetchData();
  }, [appId]);

  const handleEngagementSearch = async () => {
    try {
      if (!engagementInput) {
        const accessToken = JSON.parse(
          getCookie(sessionCookieName)?.toString()
        ).accessToken;
        const fetchedEngagementData = await getEngagement(
          appId,
          {},
          accessToken,
          1,
          1000000
        );
        setEngagementData(fetchedEngagementData);

        return;
      }
      const parsedInput = JSON.parse(engagementInput);
      if (typeof parsedInput === 'object' && !Array.isArray(parsedInput)) {
        const accessToken = JSON.parse(
          getCookie(sessionCookieName)?.toString()
        ).accessToken;
        const fetchedEngagementData = await getEngagement(
          appId,
          parsedInput || {},
          accessToken,
          1,
          1000000
        );

        setEngagementData(fetchedEngagementData);
      } else {
        setEngagementError('Input must be a valid MongoDB query');
        setTimeout(() => setEngagementError(''), 3000);
      }
    } catch (error) {
      setEngagementError('Input must be a valid MongoDB query');
      setTimeout(() => setEngagementError(''), 3000);
    }
  };

  const handleImpressionSearch = async () => {
    try {
      if (!impressionInput) {
        const accessToken = JSON.parse(
          getCookie(sessionCookieName)?.toString()
        ).accessToken;
        const fetchedImpressionData = await getImpression(
          appId,
          {},
          accessToken,
          1,
          1000000
        );
        setImpressionData(fetchedImpressionData);

        return;
      }
      const parsedInput = JSON.parse(impressionInput);
      if (typeof parsedInput === 'object' && !Array.isArray(parsedInput)) {
        const accessToken = JSON.parse(
          getCookie(sessionCookieName)?.toString()
        ).accessToken;
        const fetchedImpressionData = await getImpression(
          appId,
          parsedInput || {},
          accessToken,
          1,
          1000000
        );

        setImpressionData(fetchedImpressionData);
      } else {
        setImpressionError('Input must be a valid MongoDB query');
        setTimeout(() => setImpressionError(''), 3000);
      }
    } catch (error) {
      setImpressionError('Input must be a valid MongoDB query');
      setTimeout(() => setImpressionError(''), 3000);
    }
  };

  const engagementGraph = prepareGraphData(engagementData, engagementTimeline);
  const engagementChartOptions = chartOptions(
    Math.max(...engagementGraph.data)
  );
  const engagementChartData = {
    labels: engagementGraph.labels,
    datasets: [
      {
        label: 'Engagement Events',
        data: engagementGraph.data,
        borderColor: '#0EA5E9',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        tension: 0.4,
        clip: false as const,
      },
    ],
  };

  const impressionGraph = prepareGraphData(impressionData, impressionTimeline);
  const impressionChartOptions = chartOptions(
    Math.max(...impressionGraph.data)
  );
  const impressionChartData = {
    labels: impressionGraph.labels,
    datasets: [
      {
        label: 'Impression Events',
        data: impressionGraph.data,
        borderColor: '#0EA5E9',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        tension: 0.4,
        clip: false as const,
      },
    ],
  };

  return (
    <GraphSectionStyled>
      <Section name="graph" SectionImage={GraphIcon} align="left">
        <div>
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
              style={{ width: isMobile ? '100%' : '18rem' }}
              value={impressionInput}
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
          <div className="label">
            <FormControl sx={{ width: 130 }}>
              <Select
                labelId="impression-timeline-label"
                id="impression-timeline"
                value={impressionTimeline}
                onChange={(e) =>
                  setImpressionTimeline(e.target.value as Timeline)
                }
                MenuProps={{
                  disableScrollLock: true,
                  PaperProps: {
                    style: {
                      backgroundColor: '#0F172A',
                      marginTop: 4,
                    },
                  },
                }}
                sx={{
                  color: '#ffffff',
                  marginTop: 0,
                  marginBottom: 1,
                  backgroundColor: '#0F172A',
                  '& .MuiSelect-icon': {
                    color: '#ffffff', // Icon color
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#334155', // Border color
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#334155', // Border color
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#334155', // Border color when focused
                  },
                  ul: {
                    backgroundColor: '#0F172A',
                    color: '#ffffff',
                  },
                }}
              >
                <MenuItem value="today" sx={{ color: '#d6d6d6' }}>
                  Past Day
                </MenuItem>
                <MenuItem value="week" sx={{ color: '#d6d6d6' }}>
                  Past Week
                </MenuItem>
                <MenuItem value="month" sx={{ color: '#d6d6d6' }}>
                  Past Month
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="chart-container">
            <Line data={impressionChartData} options={impressionChartOptions} />
          </div>
        </div>
        <div>
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
              style={{ width: isMobile ? '100%' : '18rem' }}
              value={engagementInput}
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
          <div className="label">
            <FormControl sx={{ width: 130 }}>
              <Select
                labelId="engagement-timeline-label"
                id="engagement-timeline"
                value={engagementTimeline}
                onChange={(e) =>
                  setEngagementTimeline(e.target.value as Timeline)
                }
                MenuProps={{
                  disableScrollLock: true,
                  PaperProps: {
                    style: {
                      backgroundColor: '#0F172A',
                      marginTop: 4,
                    },
                  },
                }}
                sx={{
                  color: '#ffffff',
                  marginTop: 0,
                  marginBottom: 1,
                  backgroundColor: '#0F172A',
                  '& .MuiSelect-icon': {
                    color: '#ffffff', // Icon color
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#334155', // Border color
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#334155', // Border color
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#334155', // Border color when focused
                  },
                  ul: {
                    backgroundColor: '#0F172A',
                    color: '#ffffff',
                  },
                }}
              >
                <MenuItem value="today" sx={{ color: '#d6d6d6' }}>
                  Past Day
                </MenuItem>
                <MenuItem value="week" sx={{ color: '#d6d6d6' }}>
                  Past Week
                </MenuItem>
                <MenuItem value="month" sx={{ color: '#d6d6d6' }}>
                  Past Month
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="chart-container">
            <Line data={engagementChartData} options={engagementChartOptions} />
          </div>
        </div>
      </Section>
    </GraphSectionStyled>
  );
};

export { GraphSection };
