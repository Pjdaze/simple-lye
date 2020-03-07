import styled from 'styled-components';
const FormWrapper = styled.div`
  width: 90%;
  max-width: 600px;
  text-align: center;
  input {
    height: 35px;
    width: 90%;
    max-width: 300px;
    outline: none;
    border-radius: 7px;
    border: none;
  }

  .result-display {
    font-size: calc(16px + 1.8vw);
    font-family: 'Raleway', sans-serif;
  }
`;
export default FormWrapper;
