'use client';

import React from 'react';
import Image from 'next/image';

import { Section } from '../../common/Section/Section';
import { Background } from '../../common/Background/Background';
import { GalleryStyled } from './Gallery.styles';
import { ImageIcon } from '../../common/Icons/ImageIcon';
import oneImage from '../../../../public/images/scr1.png';
import twoImage from '../../../../public/images/scr2.png';
import threeImage from '../../../../public/images/scr3.png';
import fourImage from '../../../../public/images/scr4.png';
import fiveImage from '../../../../public/images/scr5.png';
import sixImage from '../../../../public/images/scr6.png';

const Gallery: React.FC = () => {
  return (
    <GalleryStyled>
      <Background />
      <Section name="gallery" SectionImage={ImageIcon} align="left">
        <h2>Gallery</h2>
        <p>
          Get a glimpse of our <span>user-friendly</span> interface with our
          detailed screenshots. Our platform&apos;s <span>intuitive UI</span> is
          designed to provide a seamless experience, featuring customizable{' '}
          <span>dashboards</span>, real-time data visualization, and
          easy-to-navigate menus. Explore these <span>screenshots</span> to see
          how effortlessly you can track user behavior, analyze key metrics, and
          gain actionable <span>insights</span> to optimize your website&apos;s
          performance.
        </p>
      </Section>
      <div className="images">
        <Image src={oneImage} alt="one image" />
        <Image src={twoImage} alt="two image" />
        <Image src={threeImage} alt="three image" />
        <Image src={fourImage} alt="four image" />
        <Image src={fiveImage} alt="five image" />
        <Image src={sixImage} alt="six image" />
      </div>
      <Section name="more" align="left">
        <h2>... and more!</h2>
        <p>
          While the <span>screenshots</span> provide a sneak peek into our
          platform&apos;s capabilities, there&apos;s so much more to discover.
          Dive deeper into the full range of <span>features</span>, advanced
          analytics tools, and customizable options by trying the platform
          yourself. <span>Experience</span> firsthand how our{' '}
          <span>comprehensive</span>
          solution can transform your data.
        </p>
      </Section>
    </GalleryStyled>
  );
};

export { Gallery };
