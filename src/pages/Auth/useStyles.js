import styled from "styled-components";
export const Authorize = styled.div`
  padding-top: 8rem;
  box-sizing: border-box;
  height: 100vh;
`;
export const Button = styled.button`
  background: none;
  border: none;
  color: white;
  font-weight: 600;
  padding: 0 0.4rem;
  font-size: 1rem;
  background-color: transparent;
  border: 1px solid transparent;
  transition: all ease 0.3s;
  padding: 0.5rem 1.5rem;
  &.active {
    background-color: #ffff4d;
    border: 1px solid #ffff4d;
    color: black;
    border-radius: 4px;
  }
`;
export const Login = styled.form`
  width: 50%;
`;
export const Register = styled.form`
  width: 50%;
`;
export const Wrapper = styled.div`
  margin: 1.2rem 0;
  label,
  input {
    display: block;
    font-weight: 600;
  }
  label {
    color: white;
    margin-bottom: 0.1rem;
  }
  input {
    padding: 10px 8px;
    width: 100%;
    border-radius: 4px;
    outline: none;
    transition: all ease 0.1s;
    border: 2px solid #16151a;
    &:focus {
      border-color: #2a9cd2;
    }
  }
`;

export const AuthButton = styled.button`
  color: #16151a;
  background-color: #ffff4d;
  border: 1px solid #ffff4d;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
  padding: 0.5rem 1.5rem;
  font-weight: 600;
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
`;
