'use client';

import React from 'react';

import { FrontpageStyled } from './Frontpage.styles';
import { List } from '../../Common/List/List';
import { Section } from '../../Common/Section/Section';
import { Button } from '../../Common/Button/Button';
import { InfoIcon } from '../../Common/Icons/InfoIcon';
import { QuestionIcon } from '../../Common/Icons/QuestionIcon';
import { WrenchIcon } from '../../Common/Icons/WrenchIcon';
import { Background } from '../../Common/Background/Background';

const Frontpage: React.FC = () => {
  return (
    <FrontpageStyled>
      <Background />
      <Section name="hero" align="left">
        <h1>
          Unlock the power of data with our cutting-edge analytics platform.
        </h1>
        <p>
          Gain deep <span>insights</span> into user behavior on your website
          with our advanced <span>analytics</span> solution. Optimize your user
          experience, drive conversions, and{' '}
          <span>make data-driven decisions</span> effortlessly.
        </p>
        <Button label="Sign up" url="/register" />
      </Section>
      <Section name="about" SectionImage={InfoIcon} align="left">
        <h2>About us</h2>
        <p>
          We are dedicated to <span>transforming</span> data into actionable{' '}
          <span>insights</span>. Our advanced analytics platform provides
          comprehensive user behavior tracking, enabling businesses to optimize
          their websites, enhance user experiences, and drive conversions. With
          a focus on simplicity, and powerful analytics tools, we{' '}
          <span>empower</span> developers and businesses to make data-driven
          decisions effortlessly. Join us in <span>unlocking</span> the full
          potential of your website with our innovative solutions and
          exceptional support.
        </p>
      </Section>
      <Section name="features" SectionImage={QuestionIcon} align="left">
        <h2>Why choose our analytics platform?</h2>
        <p>
          Our platform provides detailed insights into user interactions,
          enabling you to understand their journey and behavior on your website.
          Track <span>clicks</span>, and <span>navigation paths</span> to
          pinpoint areas for improvement. Main <span>features</span> of our
          platform are listed below:
        </p>
        <List
          elements={[
            'Comprehensive User Tracking',
            'Customizable Dashboards',
            'Easy Integration',
            'Actionable Insights',
            'Scalable Solution',
          ]}
        />
      </Section>
      <Section name="documentation" SectionImage={WrenchIcon} align="left">
        <h2>Simple and readable OpenAPI documentation.</h2>
        <p>
          Our <span>OpenAPI</span> documentation is designed with simplicity and
          readability in mind, ensuring that developers can{' '}
          <span>integrate</span> our analytics platform effortlessly. With
          clear, concise instructions and well-organized sections, you can
          <span>quickly</span> find the information you need. Our documentation
          includes comprehensive examples, detailed explanations of endpoints,
          parameters, and data structures, making it easy to{' '}
          <span>understand</span> and implement.
        </p>
      </Section>
    </FrontpageStyled>
  );
};

export { Frontpage };
