import styled from "styled-components"


export const Nav = styled.nav`
  color: rgba(255, 255, 255, 0.7);
  background-color: rgb(45, 44, 50);
  box-sizing: border-box;
  margin: 24px 0;
  border-radius: 4px;
  button,a {
    border: none;
    display: inline-block;
    background: none;
    color: rgba(255, 255, 255, 0.7);
    outline: none;
    z-index: 2;
    font-weight: 600;
    transition: all ease 0.2s;
    font-size: 0.9rem;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 0.6rem 1.2rem;
    &.active {
      color: rgb(22, 21, 26);
      background-color: rgb(255, 255, 77);
    }
  }
  `