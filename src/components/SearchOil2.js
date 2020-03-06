import { Button } from 'semantic-ui-react';
import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import FormWrapper from './containers/FormWrapper';

class SearchOil2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOptions: [],
      oilQuantities: {},
      sapValueData: [],
      result: []
    };
    this.numbers = Array.from(Array(100), (_, x) => {
      return { label: x + 1, value: x + 1 };
    });
  }

  componentDidMount() {
    const url = 'https://sapvalues-api.herokuapp.com/sap-values';

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          sapValueData: [...data]
        });
      });
  }

  handleChange = selectedOptions => {
    this.setState({ selectedOptions });
    console.log('these are The selectedOption', selectedOptions);
  };

  handleUpdateOilQuantity = oil => {
    // By calling this function we can pass in params to it initially
    console.log('this is the OIL from handleUpdateQuantity()', oil);
    // We return a function. The returned function is actually what is given to
    // React Select for it to deal with.
    const soapVals = this.state.selectedOptions.find(s => s.label === oil);
    return val => {
      //let sapValList = [];
      console.log('THIS IS THE VAL ', val);
      this.setState({
        oilQuantities: {
          ...this.state.oilQuantities,
          [oil]: {
            quantity: val.value,
            soapVals: soapVals.value
          }
        }
        //result: (val.value * soapVals.value.LyeSapValue) / 0.3
      });

      console.log('This Is The Val with the value', val.value);
      console.log('This Is The Val with the QUANTITY', val.quantity);
    };
  };
  calculateValues = () => {
    const ammoutOfLyeNedded = Object.entries(this.state.oilQuantities).map(
      x => x[1].quantity * x[1].soapVals.LyeSapValue
    );

    const totalWeightSolution = ammoutOfLyeNedded / 0.3;
    const waterNeeded = totalWeightSolution - ammoutOfLyeNedded;

    this.setState({
      result: ['Lye Nedded', ammoutOfLyeNedded, 'Water Needed', waterNeeded]
    });

    console.log(
      'My Calculated VALUES',
      Object.entries(this.state.oilQuantities).map(x => x[1].quantity * x[1].soapVals.LyeSapValue)
    );
  };
  render() {
    const { selectedOptions, oilQuantities, sapValueData, result } = this.state;
    console.log('this is the oilQuantities state', this.state.oilQuantities);

    return (
      <FormWrapper>
        <form>
          <Select
            name="form-field-name"
            value={selectedOptions}
            onChange={this.handleChange}
            multi={true}
            options={sapValueData}
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
              <div>{result}</div>
            </div>
          );
        })}
        <div className="calculation">
          <h4>{result}</h4>
        </div>
        <Button onClick={this.calculateValues} basic color="orange">
          CALCULATE
        </Button>
      </FormWrapper>
    );
  }
}

export default SearchOil2;
