import React from "react";
import styled from "styled-components";
import OilList from "../OilList";

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
  .fa-plus-circle {
    color: green;
    font-size: 100px;
    margin-top: 200px;
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
        <div className="add-button" onSubmit={e => e}>
          <span className="fas fa-plus-circle" />
          <span className="add-oil">Add Oil</span>
        </div>
        <OilList />
      </HomeWrapper>
    );
  }
}

export default Home;
