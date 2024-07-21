import { styled } from 'styled-components';

import { styleVariables } from '../../../../public/styles/utils/styleVariables';
import { mediaQuery } from '../../../../public/styles/utils/mediaQuery';

const SignInStyled = styled.div`
  .signin-section {
    border-top: none;
    margin-top: 2rem;

    .section-wrapper {
      display: flex;
      justify-content: center;
      align-items: center !important;

      ${mediaQuery['web']} {
        margin-top: 4rem;
        align-items: flex-start !important;
      }
    }

    .signin-container {
      display: flex;
      justify-content: center;
      align-items: center !important;

      ${mediaQuery['web']} {
        margin-top: 4rem;
        align-items: flex-start !important;
      }

      .error-message {
        margin: 1rem 0 0 0;
      }

      .info {
        font-size: 15px;
        margin: 1rem 0;

        .link {
          color: ${styleVariables.colors.white};
        }
      }
    }

    .signin-inputs {
      margin: 1rem 0 0 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .input-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 12rem;
        height: 4rem;
        margin: 10px 0;
        padding: 15px;
        border-radius: 8px;
        border: 2px solid ${styleVariables.colors.pictonBlue};
        background-color: ${styleVariables.colors.abyssBlue};

        ${mediaQuery['web']} {
          height: 2rem;
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
          height: 5rem;
          font-size: 18px;
          width: 9rem;
          color: ${styleVariables.colors.white};
          border: none;
          background-color: ${styleVariables.colors.abyssBlue};

          ${mediaQuery['web']} {
            height: 3rem;
            font-size: inherit;
          }

          &:focus {
            outline-width: 0;
          }
        }
      }
    }
  }
`;

export { SignInStyled };
