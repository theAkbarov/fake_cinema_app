import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.footer`
  min-height: 6.25rem;
  font-size: 0.875rem;
  font-weight: 300;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  align-items: center;
  background-color: #16151a;
  box-shadow: 0 -10px 30px rgb(0 0 0 / 30%);
`;
export const ExternalLinks = styled.div``;
export const Row = styled.div`
  a,
  p {
    margin: 0;
    color: white;
    font-size: 0.775rem;
    margin-bottom: 0.4rem;
    font-weight: 300;
  }
`;

export const ExternalLink = styled(Link)`
  margin: 0 1rem 0 0;
  display: inline-flex;
  align-items: center;
  border-radius: 10px;
  padding: 0.5rem;
  box-shadow: 0 1px 5px rgb(0 0 0 / 40%);
  background-color: #090909;
`;
