import { Container } from '../../useStyles'
import { Wrapper,Text } from './useStyles'
import Helmet from "react-helmet"
const Collections = () => {
    return (
        <Wrapper>
            <Helmet>
                <title>Collections</title>
            </Helmet>
            <Container>
                <Text>
                    Collection
                </Text>
            </Container>
        </Wrapper>
    )
}

export default Collections
