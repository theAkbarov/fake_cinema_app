import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  background-color: #16151a;
  position: fixed;
  box-shadow: 0 10px 30px rgb(0 0 0 / 30%);
  z-index: 5410;
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 0;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    font-size: 0.875rem;
    font-weight: 600;
    padding: 0.6rem;
    color: #fff;
  }
`;

export const Login = styled(Link)`
  color: #16151a;
  background-color: #ffff4d;
  border: 1px solid #ffff4d;
  font-size: 0.875rem;
  padding: 0.5rem 1.5rem;
  font-weight: 600;
  display: inline-block;
  font-size: 0.875rem;
  padding: 0.5rem 1.5rem;
  font-weight: 600;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s, opacity 0.3s, border 0.3s;
`;
export const Profile = styled.button`
  color: #16151a;
  background-color: #ffff4d;
  font-size: 0.875rem;
  border: 1px solid #ffff4d;
  font-weight: 600;
  width: 40px;
  height: 40px;
  position: relative;
  border-radius: 50%;
`;
export const Action = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SearchButton = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  margin-right: 10px;
`;
export const Menu = styled.div`
  margin: auto;
  padding: 0.4rem;
  width: 280px;
  position: absolute;
  right: 0;
  top: 100%;
  background-color: #111014;
  text-align: left;
  color: white;
  box-shadow: 0 15px 20px rgb(0 0 0 / 80%);
  border-radius: 0 0 4px 4px;
  transform: scale(0);
  transform-origin: top right;
  opacity: 0;
  transition: all cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.3s;
  overflow: hidden;
  h3 {
    font-size: 0.875rem;

    font-weight: 600;
    margin-bottom: 1rem;
    padding: 1rem;
    border-bottom: 1px solid #272626;
  }
  &.opened {
    transform: scale(1);
    opacity: 1;
  }

  a,
  button {
    white-space: nowrap;
    display: block;
    cursor: pointer;
    border: none;
    font-weight: 600;
    background: none;
    margin: 0.3rem 0;
    text-align: start;
    color: white;
    margin-bottom: 0.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color 0.3s;
    padding: 0.5rem 1rem;
  }
  button {
    width: 100%;
    -webkit-justify-content: center;
    justify-content: center;
    text-align: center;
    font-size: 0.85rem;
    padding: 0.5rem 1rem;
    background-color: #ff2e2e;
    border-radius: 4px;
    transition: color 0.3s, background-color 0.3s;
    display: flex;
    align-items: center;
    img {
      margin-right: 10px;
    }
  }
`;
