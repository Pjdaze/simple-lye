import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  height: 50px;
  padding: 20px;
  box-shadow: 0 0 10px #222;
`;

export default props => (
  <HeaderWrapper>
    <div className="header" />
  </HeaderWrapper>
);
