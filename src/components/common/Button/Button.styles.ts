import { styled } from 'styled-components';

import { styleVariables } from '../../../../public/styles/utils/styleVariables';

const ButtonStyled = styled.div`
  .button {
    background-color: ${styleVariables.colors.pictonBlue};
    border: none;
    font-size: 1rem;
    border-radius: 8px;
    color: ${styleVariables.colors.white};
    padding: 1rem 1.5rem;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      filter: brightness(120%);
    }
  }
`;

export { ButtonStyled };
