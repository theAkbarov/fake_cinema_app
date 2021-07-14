import styled from "styled-components"

export const Wrapper = styled.div`
padding-top: 3.7rem
`
export const LoadMore= styled.div`
display: flex;
justify-content: center;
align-items: center;
button{
    background: none;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    font-size: .8rem;
    color: white;
    font: 600px;
    text-align: center;
    transition: cubic-bezier(0.68, -0.55, 0.265, 1.55) all 0.5s;
    padding: 0.4rem;
    &:hover{
        transform: scale(1.1)
    }
    span{
        display: block;
    }
}
`