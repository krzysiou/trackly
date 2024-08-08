import { styled } from 'styled-components';

import { styleVariables } from '../../../../public/styles/utils/styleVariables';

const ApplicationStyled = styled.div`
  .application-section {
    border-top: none;
    margin-top: 4rem;
  }

  .app-id {
    margin: 1rem 0;
    color: ${styleVariables.colors.white};
  }

  .app-date {
    font-size: 0.8rem;
  }

  .view-mode-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    .button {
      width: 4rem;
      height: 4rem;

      img {
        width: 2rem;
        height: 2rem;
      }
    }
  }
`;

export { ApplicationStyled };
