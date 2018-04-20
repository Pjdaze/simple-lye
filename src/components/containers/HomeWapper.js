import React from 'react';
import styled from 'styled-components';
import Home from '../pages/Home';
const HomeWrapper = styled.div`
  background: #c9d6ff;
  background: -webkit-linear-gradient(to top, #e2e2e2, #c9d6ff);
  background: linear-gradient(to top, #e2e2e2, #c9d6ff);
  position: relative;
  height: 100%;
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
    color: #406098;
    font-family: 'Titan One', cursive;
    margin-top: 50px;
  }
  .fa-smile {
    color: #2a7ab0;
    transform: rotate(-60deg);
    margin-left: 100px;
    font-size: 3em;
  }

  .add-oil {
    color: #2a7ab0;
    margin-top: 20px;
    font-size: 16px;
    font-family: 'Titillium Web', cursive;
  }
  .oil-list {
    display: none;
    text-align: center;
    overflow-y: scroll;

    background-color: #fff;
    &.active {
    }
  }
`;

export default HomeWrapper;
