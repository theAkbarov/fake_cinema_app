import styled from 'styled-components'

export const AboutWrapper = styled.div`
display: flex;
.backdrop{
        flex: 0 0 25%;
    max-width: 25%;
        width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 20%) 0px 0.1rem 0.1rem, rgb(0 0 0 / 20%) 0px 0.3rem 0.3rem, rgb(0 0 0 / 20%) 0px 0.5rem 0.5rem, rgb(0 0 0 / 20%) 0px 0.7rem 0.7rem;
}
`
export const Datas = styled.div`
padding-left: 2em;
h4,p{
    font-weight: 300;
    color: rgba(255,255,255,0.7)
}
`
export const CastGroup = styled.div`
display: flex;
li{
    color: white;
    list-style: none;
    margin-left: .5rem;
}
`
export const Actors = styled.div`
display: flex;
margin: 100px 0;
    img{
        margin: 0 10px
    }
`