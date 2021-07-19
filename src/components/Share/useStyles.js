import styled from 'styled-components'

export const Wrapper = styled.div`
    position: absolute;
    z-index: 98488;
    top: 0;
    bottom: 0;
    width: 100%;
    padding-top: 5rem;
    height: 100%;
    background: rgba(0, 0, 0 , 0.8);
    display: none;
    &.active{
        display: block;
    }
    .close-button{
        background: none;
        border: none;
        cursor:pointer;
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 2rem

    }
`
export const External = styled.div`
    margin-top: 1rem;
    border-top: 1px solid #aaa;
    button{
        margin: 0 8px
    }
`
export const Block = styled.div`
    width: 100%;
    padding: 1rem;
    border-radius: 4px;
    position: relative;

    max-width: 400px;
    background: white;
    margin : 0 auto;

`