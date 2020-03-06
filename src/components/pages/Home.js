import React from 'react';
import { Button } from 'semantic-ui-react';

import HomeWrapper from '../../components/containers/HomeWapper';
import SearchOil2 from '../SearchOil2';

const Home = props => {
  return (
    <HomeWrapper>
      <h1>Simple Lye</h1>
      <SearchOil2 />
      <br />
      <span className="far fa-smile" />

      <div className="oil-list" />
    </HomeWrapper>
  );
};

export default Home;
