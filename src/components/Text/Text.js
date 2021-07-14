import styled from 'styled-components'

const Text = ({text}) => {
    const Text = styled.h1`
      font-size: 1.625rem;
    font-weight: 600;
    color: white;
`
    return (
        <Text>
            {text}
        </Text>
    )
}

export default Text
