import React from "react";
import styled from "styled-components"


const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <h2>Memory Game</h2>
        <p>Don't click on the same card twice!</p>
      </HeaderWrapper>
    </>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  padding: 10px;
  height: 100px;
  align-items: center;
  color: ${({ theme }) => theme.colors.light};
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.dark};
` 
export default Header