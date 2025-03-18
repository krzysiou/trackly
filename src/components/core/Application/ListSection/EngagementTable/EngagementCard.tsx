'use client';

import React, { useState } from 'react';
import { Box, Grid, Modal, Typography } from '@mui/material';

import type { EngagementEvent } from '../../../../../fetching/types';

import { styleVariables } from '../../../../../../public/styles/utils/styleVariables';
import { DeleteIcon } from '../../../../common/Icons/DeleteIcon';

type EngagementCardParams = {
  event: EngagementEvent;
};

const EngagementCard: React.FC<EngagementCardParams> = ({ event }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const {
    id,
    type,
    date,
    actor,
    action,
    navigationType,
    target: {
      id: targetId,
      name: targetName,
      page: { id: pageId, type: pageType, url: pageUrl },
    },
    applicationId,
  } = event;

  return (
    <>
      <Grid
        container
        className="row"
        justifyContent="space-between"
        onClick={handleOpenModal}
        style={{ cursor: 'pointer' }}
      >
        <Grid item xs={4} className="id-info">
          {targetId}
        </Grid>
        <Grid item xs={1} className="id-info">
          {action}
        </Grid>
        <Grid item xs={2} className="id-info">
          {actor}
        </Grid>
        <Grid item xs={2} className="id-info">
          {navigationType}
        </Grid>
        <Grid item xs={3} className="id-info">
          {date}
        </Grid>
      </Grid>
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        disableScrollLock
        disableAutoFocus
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            bgcolor: styleVariables.colors.abyssBlue,
            p: 4,
            borderRadius: 4,
          }}
        >
          <Box
            display="flex"
            alignItems={'center'}
            justifyContent="space-between"
            mb={4}
          >
            <Typography
              variant="h6"
              component="h2"
              color={styleVariables.colors.white}
            >
              Event Details
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              onClick={handleCloseModal}
              sx={{
                cursor: 'pointer',
                padding: '4px',
                borderRadius: '10%',
                ':hover': { backgroundColor: styleVariables.colors.charcoal },
              }}
            >
              <DeleteIcon width={25} height={25} />
            </Box>
          </Box>

          <Typography variant="body1">
            <strong style={{ color: styleVariables.colors.pictonBlue }}>
              id:
            </strong>{' '}
            {id}
          </Typography>
          <Typography variant="body1">
            <strong style={{ color: styleVariables.colors.pictonBlue }}>
              applicationId:
            </strong>{' '}
            {applicationId}
          </Typography>
          <Typography variant="body1">
            <strong style={{ color: styleVariables.colors.pictonBlue }}>
              date:
            </strong>{' '}
            {date}
          </Typography>
          <Typography variant="body1">
            <strong style={{ color: styleVariables.colors.pictonBlue }}>
              type:
            </strong>{' '}
            {type}
          </Typography>
          <Typography variant="body1">
            <strong style={{ color: styleVariables.colors.pictonBlue }}>
              action:
            </strong>{' '}
            {action}
          </Typography>
          <Typography variant="body1">
            <strong style={{ color: styleVariables.colors.pictonBlue }}>
              actor:
            </strong>{' '}
            {actor}
          </Typography>
          <Typography variant="body1">
            <strong style={{ color: styleVariables.colors.pictonBlue }}>
              navigationType:
            </strong>{' '}
            {navigationType}
          </Typography>
          <Typography variant="body1">
            <strong style={{ color: styleVariables.colors.pictonBlue }}>
              target:
            </strong>
            <Box ml={3}>
              <Typography variant="body1">
                <strong style={{ color: styleVariables.colors.pictonBlue }}>
                  id:
                </strong>{' '}
                {targetId}
              </Typography>
              <Typography variant="body1">
                <strong style={{ color: styleVariables.colors.pictonBlue }}>
                  name:
                </strong>{' '}
                {targetName}
              </Typography>
              <Typography variant="body1">
                <strong style={{ color: styleVariables.colors.pictonBlue }}>
                  page:
                </strong>
                <Box ml={3}>
                  <Typography variant="body1">
                    <strong style={{ color: styleVariables.colors.pictonBlue }}>
                      id:
                    </strong>{' '}
                    {pageId}
                  </Typography>
                  <Typography variant="body1">
                    <strong style={{ color: styleVariables.colors.pictonBlue }}>
                      type:
                    </strong>{' '}
                    {pageType}
                  </Typography>
                  <Typography variant="body1">
                    <strong style={{ color: styleVariables.colors.pictonBlue }}>
                      url:
                    </strong>{' '}
                    {pageUrl}
                  </Typography>
                </Box>
              </Typography>
            </Box>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export { EngagementCard };
