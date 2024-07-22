'use client';

import React from 'react';

import { Section } from '../../common/Section/Section';
import { Background } from '../../common/Background/Background';
import { AboutStyled } from './About.styles';
import { GithubIcon } from '../../common/Icons/GithubIcon';
import { LinkedInIcon } from '../../common/Icons/LinkedInIcon';

const About: React.FC = () => {
  return (
    <AboutStyled>
      <Background />
      <Section name="gh" SectionImage={GithubIcon} align="left">
        <h2>GitHub</h2>
        <p>
          Explore more of our innovative projects on our <span>GitHub</span>. By
          visiting our GitHub profile, you can access a variety of{' '}
          <span>tools</span> and <span>applications</span> designed to enhance
          your development experience. Join our community, contribute, and stay
          updated with the latest advancements in our{' '}
          <span>analytics platform</span> and other exciting projects.
        </p>
      </Section>
      <Section name="linkedin" SectionImage={LinkedInIcon} align="left">
        <h2>LinkedIn</h2>
        <p>
          Connect with us on <span>LinkedIn</span> to stay informed about our
          latest developments, industry insights, and <span>professional</span>{' '}
          updates. Follow our page for news on product releases, company
          milestones, and <span>networking</span> opportunities. Join our
          LinkedIn community to engage with like-minded professionals and
          explore how our <span>innovative</span> solutions can benefit your
          projects.
        </p>
      </Section>
    </AboutStyled>
  );
};

export { About };
