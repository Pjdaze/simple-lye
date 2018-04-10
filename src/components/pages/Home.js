import React from "react";
import styled from "styled-components";

const HomeWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .fa-plus-circle {
    color: green;
    font-size: 100px;
  }
`;

class Home extends React.Component {
  render() {
    return (
      <HomeWrapper>
        <div className="add-button">
          <span className="fas fa-plus-circle" />
        </div>
      </HomeWrapper>
    );
  }
}

export default Home;
