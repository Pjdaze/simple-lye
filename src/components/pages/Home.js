import React from 'react';
import styled from 'styled-components';
import SearchOil from '../SearchOil';
import OilSapValues from '../../OilData';
import HomeWrapper from '../../components/containers/HomeWapper';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowing: false
    };
  }
  open() {
    this.setState({
      isShowing: true
    });
  }
  onSubmit(e) {}

  render() {
    return (
      <HomeWrapper>
        <h1>Simple Lye</h1>
        <SearchOil />
        <span className="far fa-smile" />

        <div className="oil-list" />
      </HomeWrapper>
    );
  }
}

export default Home;
