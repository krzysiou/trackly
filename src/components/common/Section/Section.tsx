'use client';

import React from 'react';

import { SectionStyled } from './Section.styles';

type SectionParams = {
  name: string;
  align?: 'left' | 'right';
  SectionImage?: React.FC;
  children: React.ReactNode;
};

const Section: React.FC<SectionParams> = ({
  name,
  align = 'left',
  SectionImage,
  children,
}) => {
  return (
    <SectionStyled align={align}>
      <section className={`${name}-section`}>
        <div className="section-wrapper">
          <div className={`${name}-container container`}>
            {SectionImage && (
              <div className="section-image">
                <SectionImage />
              </div>
            )}
            {children}
          </div>
        </div>
      </section>
    </SectionStyled>
  );
};

export { Section };
