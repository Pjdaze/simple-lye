import React from 'react';
import { Button } from 'semantic-ui-react';

import HomeWrapper from '../../components/containers/HomeWapper';
import SearchOil2 from '../SearchOil2';

const Home = props => {
  return (
    <HomeWrapper>
      <h1>Simple Lye</h1>
      <SearchOil2 />
      <span className="far fa-smile" />

      <div className="oil-list" />

      <Button basic color="blue">
        <a className="ba f6 link dim ph3 pv2 mb2 dib white bg-dark-blue" href="#0">
          Button Text
        </a>
      </Button>
    </HomeWrapper>
  );
};

export default Home;
