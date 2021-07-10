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
  border-radius: 50%;
`;
export const Action = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Search = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  margin-right: 10px;
`;
