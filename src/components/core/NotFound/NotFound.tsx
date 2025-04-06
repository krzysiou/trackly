'use client';

import React, { useEffect } from 'react';

import { NotFoundStyled } from './NotFound.styles';
import { Section } from '../../common/Section/Section';
import { Background } from '../../common/Background/Background';
import { SadIcon } from '../../common/Icons/SadIcon';
import { tracker } from '../../../tracker';

type NotFoundProps = {
  userId?: string;
};

const NotFound: React.FC<NotFoundProps> = ({ userId }) => {
  useEffect(() => {
    tracker.trackViewPage({
      actor: userId || 'unknown',
      targetType: 'Not Found',
    });
  }, [userId]);

  return (
    <NotFoundStyled>
      <Background />
      <Section name="notfound" SectionImage={SadIcon} align="left">
        <h2>Page not found</h2>
        <p>
          The <span>page</span> that are trying to reach{' '}
          <span>does not exist</span>.
        </p>
      </Section>
    </NotFoundStyled>
  );
};

export { NotFound };
