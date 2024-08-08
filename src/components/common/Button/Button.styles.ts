import { styled } from 'styled-components';

import { styleVariables } from '../../../../public/styles/utils/styleVariables';

const ButtonStyled = styled.div`
  a {
    text-decoration: none;
  }

  .button {
    background-color: ${styleVariables.colors.pictonBlue};
    border: none;
    font-size: 1rem;
    border-radius: 8px;
    color: ${styleVariables.colors.white};
    padding: 1rem 1.5rem;
    transition: 0.3s;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      filter: brightness(120%);
    }
  }
`;

export { ButtonStyled };
