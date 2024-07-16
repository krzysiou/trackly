'use client';

import React from 'react';

import { NotFoundStyled } from './NotFound.styles';
import { Section } from '../../Common/Section/Section';
import { Background } from '../../Common/Background/Background';
import { SadIcon } from '../../Common/Icons/SadIcon';

const NotFound: React.FC = () => {
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
