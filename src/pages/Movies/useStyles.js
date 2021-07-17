import styled from "styled-components";

export const MoviesWrapper = styled.div`
  /* padding-top: 3.7rem; */
`;
export const FilterWrapper = styled.div`
  padding-top: 32px 0;
  display: flex;
  align-items: center;
  min-height: 14rem;
  background-color: rgba(45, 44, 50, 0.5);
`;

export const Label =styled.label`
display: inline-block;
    font-size: .875rem;
    color: hsla(0,0%,100%,.5);
    margin: 0 0 .3rem .5rem;
    user-select: none;
`

export const InputHolder =styled.div`

`

export const FormControl =styled.input`
    align-items: center;
    background-color: rgb(45, 44, 50);
    border-color: rgb(45, 44, 50);
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    box-shadow: none;
    cursor: default;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    min-height: 38px;
    position: relative;
    transition: all 100ms ease 0s;
    box-sizing: border-box;
    font-size: 0.9375rem;
    outline: 0px !important;
    padding-left:10px;
`