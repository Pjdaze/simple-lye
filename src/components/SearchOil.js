import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { OilSapValues } from '../OilData';
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
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: ''
    };
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption}`);
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <FormWrapper>
        <form>
          <Select
            name="form-field-name"
            value={selectedOption}
            onChange={this.handleChange}
            multi={true}
            options={OilSapValues}
          />
        </form>
      </FormWrapper>
    );
  }
}

export default SearchOil;
