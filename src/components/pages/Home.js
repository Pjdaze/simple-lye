import React from "react";
import styled from "styled-components";

const HomeWrapper = styled.div`
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
    font-family: "Molengo", cursive;
  }
  .fa-eye-dropper {
    color: #21294d;
    font-size: 50px;
    margin-top: 100px;
  }

  .add-oil {
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
        <div className="add-button">
          <span className="fas fa-eye-dropper" />
          <span className="add-oil">Add Oil</span>
        </div>
      </HomeWrapper>
    );
  }
}

export default Home;
