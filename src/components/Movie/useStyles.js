import styled from "styled-components";
import { Link } from "react-router-dom";
export const MovieCard = styled(Link)`
  width: 172px;
  display: block;
  height: 310px;
  margin: 0 5px;
`;

export const Image = styled.div`
  overflow: hidden;
  border-radius: 4px;
  height: 86%;
  position: relative;
  width: 100%;
  box-shadow: 0 0.1rem 0.1rem rgb(0 0 0 / 20%), 0 0.3rem 0.3rem rgb(0 0 0 / 20%),
    0 0.5rem 0.5rem rgb(0 0 0 / 20%), 0 0.7rem 0.7rem rgb(0 0 0 / 20%);
  img {
    height: 100%;
    position: relative;
    display: block;
    width: 100%;
    transition: all ease 0.4s;
    object-fit: cover;
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
    button {
      opacity: 1;
    }

  }
  &:hover + button {
    opacity: 1
  }
`;
export const Text = styled.h3`
  font-weight: 600;
  margin: 0.4rem;
  font-size: 14px;
  padding: 0.4rem 0;
  color: white;
`;
export const Button = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 966;
  opacity: 0;
  cursor: pointer;
  transition: all ease 0.45s;
  background: none;
  border-radius: 50%;
  border: none;
  &.wishlist{
    width: 100%;
    top: auto;
    border-radius: 0;
    padding: .7rem;
    background: #d2c728;
    color: black;
    font-size: .8rem;
    font-weight: 600;
  }
  img {
    object-fit: cover;
    width: 50px;
    height: 50px;
  }
`;
