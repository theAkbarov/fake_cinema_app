import { MoviesWrapper, Filter, Button } from "./useStyles"
import { Container, Flex } from '../../useStyles'
import FilterInput from "../../components/FilterInput/FilterInput"
import { filterHTMLsemanticDatas } from "../../db"
import Movie from '../../components/Movie'
import {useSelector} from 'react-redux'
const Movies = () => {
    const movies = useSelector(state => state.allPayloads.movies)
    console.log(movies)
    return (
        <MoviesWrapper>
            <Filter>
                <Container>
                    <Flex style={{ alignItems: "flex-end" }}>
                        <FilterInput data={filterHTMLsemanticDatas[0]} />
                        <FilterInput data={filterHTMLsemanticDatas[1]} />
                        <FilterInput data={filterHTMLsemanticDatas[2]} />
                        <FilterInput data={filterHTMLsemanticDatas[3]} />
                        <Button>Reset</Button>
                        <Button>Search</Button>
                    </Flex>
                </Container>
            </Filter>
            <Container>
               <Flex>
                    {movies && movies.data.slice(0,36).map(el => (
                        <Movie style={{marginBottom: "1.8rem"}} title={el.name} img={el.image.original} key={el.id} id={el.id} />
                    ))}
               </Flex>
            </Container>
        </MoviesWrapper>
    )
}

export default Movies
