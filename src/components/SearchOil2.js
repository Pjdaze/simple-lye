import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { OilSapValues } from '../OilData';
import FormWrapper from './containers/FormWrapper';

class SearchOil2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOptions: [],
      oilQuantities: {}
    };
    this.numbers = Array.from(Array(100), (_, x) => {
      return { label: x + 1, value: x + 1 };
    });
  }

  handleChange = selectedOptions => {
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    this.setState({ selectedOptions });
    console.log('selectedOption', selectedOptions);
  };

  handleUpdateOilQuantity = oil => {
    // By calling this function we can pass in params to it initially
    console.log('oil\n\r', oil);
    // We return a function. The returned function is actually what is given to
    // React Select for it to deal with.
    const soapVals = this.state.selectedOptions.find(s => s.label === oil);
    return val => {
      console.log('val\n\r', val);
      this.setState({
        oilQuantities: {
          ...this.state.oilQuantities,
          [oil]: {
            quantity: val.value,
            soapVals: soapVals.value
          }
        }
      });

      console.log(val.value);
    };
  };

  render() {
    const { selectedOptions, oilQuantities } = this.state;
    console.log('======', this.state.oilQuantities);
    return (
      <FormWrapper>
        <form>
          <Select
            name="form-field-name"
            value={selectedOptions}
            onChange={this.handleChange}
            multi={true}
            options={OilSapValues}
          />
        </form>
        {selectedOptions.map((oil, i) => {
          const value = oilQuantities[oil.label] && oilQuantities[oil.label].quantity;
          return (
            <div key={i}>
              <span>Oil Name: {oil.label}</span>

              <Select
                name="oil-quantity"
                value={value}
                onChange={this.handleUpdateOilQuantity(oil.label)}
                options={this.numbers}
              />
            </div>
          );
        })}

        <button onSubmit={e => this.state.calculate}>Calculate</button>
      </FormWrapper>
    );
  }
}

export default SearchOil2;
