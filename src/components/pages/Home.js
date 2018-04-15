import React from "react";
import styled from "styled-components";

const HomeWrapper = styled.div`
  background: #c9d6ff;
  background: -webkit-linear-gradient(to top, #e2e2e2, #c9d6ff);
  background: linear-gradient(to top, #e2e2e2, #c9d6ff);
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .add-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  h1 {
    color: #2a7ab0;
    font-family: "Titan One", cursive;
    margin-top: 50px;
  }
  .fa-smile {
    color: #2a7ab0;
    transform: rotate(-60deg);
    margin-left: 100px;
    font-size: 2em;
  }
  .fa-eye-dropper {
    color: #21294d;
    font-size: 50px;
    margin-top: 100px;
  }

  .add-oil {
    color: #2a7ab0;
    margin-top: 20px;
    font-size: 16px;
    font-family: "Titillium Web", cursive;
  }
`;

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      isShowing: false
    };
  }
  open() {
    this.setState({
      isShowing: true
    });
  }
  onSubmit(e) {
    e.prevetDefault();
  }

  render() {
    return (
      <HomeWrapper>
        <h1>Simple Lye</h1>

        <span className="far fa-smile" />

        <div className="add-button">
          <span className="fas fa-eye-dropper" />
          <span className="add-oil">Add Oil</span>
        </div>
      </HomeWrapper>
    );
  }
}

export default Home;
