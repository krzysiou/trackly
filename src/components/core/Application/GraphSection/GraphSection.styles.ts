import { styled } from 'styled-components';

import { styleVariables } from '../../../../../public/styles/utils/styleVariables';

const GraphSectionStyled = styled.div`
  display: flex;
  flex-direction: column;

  .graph-section {
    margin-top: 0 !important;
  }

  .graph-container {
    width: 100% !important;
  }

  select {
    padding: '0.5rem 1rem';
    border: '1px solid #ccc';
    border-radius: '4px';
    font-size: '1rem';
    background-color: '#fff';
    color: '#333';
    outline: 'none';
    cursor: 'pointer';
    transition: 'border-color 0.3s';
  }

  .chart-container {
    margin-bottom: 100px;
  }

  .label {
    margin: 15px 0;
  }

  .button {
    height: 4rem;
    width: 4rem;
  }

  .mobile-search {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    padding: 0;
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translate(20%, -50%);
    background-color: ${styleVariables.colors.oxfordBlue};
    padding: 10px;
  }

  input {
    height: 3rem;
    font-size: 18px;
    margin: 15px 0;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    color: ${styleVariables.colors.white};
    border: 1px solid ${styleVariables.colors.charcoal};
    background-color: ${styleVariables.colors.oxfordBlue};
    font-family: 'Roboto Mono', monospace;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;

    &::placeholder {
      color: ${styleVariables.colors.charcoal};
    }

    &:focus {
      outline-width: 0;
    }
  }

  canvas {
    width: 100% !important;
    height: 100% !important;
  }
`;

export { GraphSectionStyled };
