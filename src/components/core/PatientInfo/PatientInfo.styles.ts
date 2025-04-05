import { styled } from 'styled-components';

const PatientInfoStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  section {
    margin: 0 !important;
  }

  h2 {
    margin-bottom: 2rem !important;
  }

  .section-wrapper {
    margin: 2rem 1.5rem !important;
  }

  .info-box {
    margin: 0 0 0.5rem !important;
  }

  .story-box {
    margin: 0.5rem 0 2rem !important;
  }

  .list-box {
    margin: 1rem 0 0 !important;
    font-size: 3rem;
    color: #ffffff;
  }
`;

export { PatientInfoStyles };
