import { styled } from 'styled-components';

import { styleVariables } from '../../../../public/styles/utils/styleVariables';
import { mediaQuery } from '../../../../public/styles/utils/mediaQuery';

const ApplicationsStyled = styled.div`
  .applications-section {
    border-top: none;
    margin-top: 4rem;

    .error {
      position: absolute;
      bottom: 0.2rem;
      margin: 0 !important;
      font-size: 14px !important;

      ${mediaQuery['web']} {
        font-size: 18px !important;
        bottom: 1.5rem;
      }
    }
  }

  .applications {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 7rem;
  }

  .creation {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    ${mediaQuery['web']} {
      flex-direction: row;
      align-items: center;
    }

    .input-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 9rem;
      height: 3rem;
      margin: 10px 0;
      margin-right: 1rem;
      padding: 15px;
      border-radius: 8px;
      border: 2px solid ${styleVariables.colors.pictonBlue};
      background-color: ${styleVariables.colors.abyssBlue};

      ${mediaQuery['web']} {
        height: 1rem;
        width: 12rem;
      }

      button {
        background-color: transparent;
        border: none;

        img {
          width: 20px;
          height: 20px;
        }
      }

      input {
        height: 2rem;
        font-size: 18px;
        width: 9rem;
        color: ${styleVariables.colors.white};
        border: none;
        background-color: ${styleVariables.colors.abyssBlue};

        ${mediaQuery['web']} {
          height: 2rem;
          font-size: inherit;
        }

        &:focus {
          outline-width: 0;
        }
      }
    }
  }
`;

export { ApplicationsStyled };
