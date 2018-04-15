import React from "react";
import styled from "styled-components";
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
`;
class SearchOil extends React.Component {
  render() {
    return (
      <FormWrapper>
        <form>
          <input type="text" placeholder="Search Oils" name="search" />
        </form>
      </FormWrapper>
    );
  }
}

export default SearchOil;
