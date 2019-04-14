import React from 'react';
import styled from 'styled-components';

import OilSapValues from '../../OilData';
import HomeWrapper from '../../components/containers/HomeWapper';
import SearchOil2 from '../SearchOil2';

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
        <SearchOil2 />
        <span className="far fa-smile" />

        <div className="oil-list" />
      </HomeWrapper>
    );
  }
}

export default Home;
