import { styled } from 'styled-components';

const PatientInfoStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  h2 {
    margin-bottom: 2rem !important;
  }

  .info-box {
    margin: 0 0 0.5rem !important;
  }

  .story-box {
    margin: 2rem 0 !important;
  }

  .list-box {
    margin: 1rem 0 0 !important;
    font-size: 3rem;
    color: #ffffff;
  }
`;

export { PatientInfoStyles };
