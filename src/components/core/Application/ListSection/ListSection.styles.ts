import { styled } from 'styled-components';

import { styleVariables } from '../../../../../public/styles/utils/styleVariables';

const ListSectionStyled = styled.div`
  .list-container {
    width: 100% !important;
  }

  .headers {
    margin: 30px 0;

    .header {
      color: ${styleVariables.colors.pictonBlue};
      text-align: left;
      font-size: 20px !important;
      margin: 0 !important;
      margin-bottom: 10px !important;
    }

    .row {
      padding: 15px 0;
      border-bottom: 1px solid ${styleVariables.colors.pictonBlue};

      &:hover {
        color: ${styleVariables.colors.white};
      }

      .id-info {
        height: 18px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }

  .events {
    margin-bottom: 100px;
    width: 100%;

    .pagination-controls {
      display: flex;
      align-items: center;
      gap: 10px;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: none;
        padding: 0;

        img {
          width: 1.2rem;
          height: 1.2rem;
        }

        &:disabled {
          filter: grayscale(100%);
        }
      }
    }
  }
`;

export { ListSectionStyled };
