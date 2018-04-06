import React from "react";
import styled from "styled-components";
import "./App.css";

const MainLayout = styled.div`
  height: 50vh;

  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: center;
  }
`;

class App extends React.Component {
  render() {
    return (
      <MainLayout>
        <h1>
          PJDUX<br />React <br /> Boilerplate
        </h1>
      </MainLayout>
    );
  }
}

export default App;
