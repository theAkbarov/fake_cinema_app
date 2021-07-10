import styled from "styled-components";

export const ShowWrapper = styled.div`
  padding-top: 3.7rem;
`;
export const Banner = styled.div`
  position: relative;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;
export const MovieInfo = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 200px;
  height: 200px;
  text-align: center;
  right: 0;
  z-index: 44;
  margin: auto;
`;
export const Button = styled.div`
  border: none;
  background: none;
  cursor: pointer;
  &.favourites {
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 8px;
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    transition: all ease 0.5s;
  }
  &:hover {
    img {
      transform: scale(1.2);
    }
  }
`;
export const Text = styled.h1`
  color: white;
  margin: 1.3rem;
  white-space: nowrap;
  mix-blend-mode: difference;
`;
export const Seasons = styled.div`
  /* width: 40% */
`;
export const Nav = styled.nav`
  color: rgba(255, 255, 255, 0.7);
  background-color: rgb(45, 44, 50);
  box-sizing: border-box;
  margin: 24px 0;
  border-radius: 4px;
  button {
    border: none;
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
`;
