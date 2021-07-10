import styled from 'styled-components'

export const CommentWrapper = styled.form`
    display: flex;
        margin-bottom: 3.5rem;
    align-items: center;
    justify-content: space-between;
    span{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: #16151a;
    background-color: #ffff4d;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.7rem;
    font-weight: 600;
    }
    input{
        width: 90%;
            flex-grow: 1;
    font-size: 0.875rem;
    margin-right: 0.7rem;
    padding: 0.7rem;
    border: none;
    color: rgb(255, 255, 255);
    background-color: rgb(45, 44, 50);
    border-radius: 4px;
    }
`

export const Button= styled.button`
    background: none;
    border: none;

`