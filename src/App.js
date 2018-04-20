import React from 'react';
import styled from 'styled-components';
import './App.css';

import Routes from './Routes';
import Header from './components/Header';

import Home from './components/Home';

const MainLayout = styled.div`
  height: 100vh;

  h1 {
    text-align: center;
  }
`;

class App extends React.Component {
  render() {
    return (
      <MainLayout>
        <Header />
        <Routes />

        <h1>
          PJDUX<br />React <br /> Boilerplate
        </h1>
        <Home />
      </MainLayout>
    );
  }
}

export default App;
