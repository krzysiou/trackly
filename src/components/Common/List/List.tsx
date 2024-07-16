'use client';

import React from 'react';

import { ListStyled } from './List.styles';
import { ChevronRight } from '../Icons/ChevronRight';

type ListParams = {
  elements: string[];
};

const List: React.FC<ListParams> = ({ elements }) => {
  const elementsComponent = elements.map((element, index) => (
    <li key={`${element}-${index}`}>
      <ChevronRight />
      {element}
    </li>
  ));

  return (
    <ListStyled>
      <ul>{elementsComponent}</ul>
    </ListStyled>
  );
};

export { List };
