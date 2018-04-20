import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  height: 50px;

  box-shadow: inset 0 -2px 5px #8d97b7;
`;

export default props => (
  <HeaderWrapper>
    <div className="header" />
  </HeaderWrapper>
);
