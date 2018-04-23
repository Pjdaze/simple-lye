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
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    this.setState({ selectedOption });
    const getStr = selectedOption
      .map(x => x.label + '' + JSON.stringify(x.value))
      .filter(y => y[1] !== Number);
    const getNumber = [...getStr]
      .join(' ')
      .split(' ')
      .slice(-1)
      .join(' ');
    console.log(getNumber.split('').filter(item => numbers.includes(item)));
    console.log(getStr);
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

//handleChange = selectedOption => {
//  this.setState({ selectedOption });
//  let arr = [];
//  let numbers = ' 0 1 2 3 4 5 6 7 8 9';
//  let getStr = `${selectedOption.map(x => JSON.stringify(x[1]).split(' '))}`;
//  console.log('====================================');
//  //let getNum = getStr.filter(item => Number
//  console.log(typeof getStr);
//  console.log('====================================');
//};
