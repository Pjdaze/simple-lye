import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { OilSapValues } from '../OilData';
import FormWrapper from './containers/FormWrapper';

class SearchOil2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOptions: [],
      oilQuantities: {},
      totals: ''
    };
    this.numbers = Array.from(Array(100), (_, x) => {
      return { label: x + 1, value: x + 1 };
    });

    this.CalculateOil = this.CalculateOil.bind(this);
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
  CalculateOil(oil, qty) {
    const data = this.state.selectedOptions.find(obj => obj.label === oil);
    const lyeValue = data.value.LyeSapValue * qty;
    const lyeWaterSolution = lyeValue / 0.3;
    const water = lyeWaterSolution - lyeValue;
    console.log(`The Lye Needed is ${lyeValue} and the water needed is ${water}`);
    if (!data) {
      return 'Oil not found';
    }
    console.log(`The Lye Needed is ${lyeValue} and the water needed is ${water}`);

    this.setState({
      totals: `The Lye Needed is ${lyeValue} and the water needed is ${water}`
    });
  }

  render() {
    const { selectedOptions, oilQuantities, totals } = this.state;
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
                onChange={() => this.handleUpdateOilQuantity(oil.label)}
                options={this.numbers}
              />
            </div>
          );
        })}

        <button onSubmit={() => this.CalculateOil(this.state.soapVals, this.state.quantity)}>
          Calculate
        </button>
        <h1>{`so ${totals}`}</h1>
      </FormWrapper>
    );
  }
}

export default SearchOil2;
