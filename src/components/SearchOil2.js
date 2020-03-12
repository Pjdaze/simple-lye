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
      result: [],

      lyeReductionOptions: []
    };
    this.numbers = Array.from(Array(100), (_, x) => {
      return { label: x + 1, value: x + 1 };
    });

    this.lyeReductionPercentage = Array.from(Array(10), (_, x) => {
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
    console.log('selectedOption logged from handleChancge', selectedOptions);
  };

  handleLyeReduction = lyeReductionOptions => {
    this.setState({ lyeReductionOptions });
  };

  handleUpdateOilQuantity = oil => {
    // By calling this function we can pass in params to it initially
    console.log('Logged from handleUpdateQuantity', oil);
    // We return a function. The returned function is actually what is given to
    // React Select for it to deal with.
    const soapVals = this.state.selectedOptions.find(s => s.label === oil);
    return val => {
      //let sapValList = [];
      console.log('val logged from handleUpdateQuantity ', val);
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
    const resultDisplay = (
      <div>
        {' '}
        <p>
          Lye Needed: <br /> {ammoutOfLyeNedded[0].toFixed(2)}
        </p>
        <p>
          Recommended Water Needed: <br /> {(waterNeeded - 2).toFixed(2)} to{' '}
          {Math.round(waterNeeded + 2)}{' '}
        </p>
        <p>
          Total Solution Weight: <br /> {totalWeightSolution.toFixed(2)}
        </p>
      </div>
    );

    this.setState({
      result: resultDisplay
    });

    console.log(
      'My Calculated VALUES',
      Object.entries(this.state.oilQuantities).map(x => x[1].quantity * x[1].soapVals.LyeSapValue)
    );
  };
  addExessFat = fatPersentage => {
    const ammoutOfLyeNedded = Object.entries(this.state.oilQuantities).map(
      x => x[1].quantity * x[1].soapVals.LyeSapValue
    );

    const lyeReductionVal = this.state.lyeReductionOptions.value;

    const newPlusFatTotal = ammoutOfLyeNedded - ammoutOfLyeNedded * 5;
    const totalWeightSolution = newPlusFatTotal / 0.3;
    const waterNeeded = totalWeightSolution - newPlusFatTotal;
    console.log('logged from addExxesFat', this.state.lyeReductionOptions.value);

    const lyeReductionDisplay = (
      <div>
        {' '}
        <p>
          Lye Needed: <br />
          {newPlusFatTotal.toFixed(5)}
        </p>
        <p>
          Water Needed: <br /> {waterNeeded.toFixed(2)}
        </p>
        <p>
          Total Solution Weight : <br /> {totalWeightSolution.toFixed(2)}
        </p>
      </div>
    );
    this.setState({
      result: lyeReductionDisplay,
      lyeReductionOptions: fatPersentage
    });
  };

  render() {
    const {
      selectedOptions,
      oilQuantities,
      sapValueData,
      result,
      totalPlusFat,
      lyeReductionOptions
    } = this.state;
    console.log('this is the oilQuantities state', this.state.oilQuantities);

    console.log('lyeReductionOptions State', lyeReductionOptions);

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
          const lyeReductionVal = lyeReductionOptions.value;

          return (
            <div key={i}>
              <span>Oil Name: {oil.label}</span>

              <Select
                name="oil-quantity"
                value={value}
                onChange={this.handleUpdateOilQuantity(oil.label)}
                options={this.numbers}
              />

              <Select
                value={lyeReductionVal}
                name="lye-reduction"
                onChange={this.handleLyeReduction}
                options={this.lyeReductionPercentage}
              />
            </div>
          );
        })}
        <div className="calculation">
          <div className="result-display">{result}</div>
        </div>
        <div>
          <Button onClick={this.calculateValues} basic color="orange">
            CALCULATE
          </Button>
          <Button onClick={this.addExessFat} basic color="blue">
            Add Exess Fat%
          </Button>
        </div>
      </FormWrapper>
    );
  }
}

export default SearchOil2;
