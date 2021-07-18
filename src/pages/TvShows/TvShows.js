import { Wrapper, LoadMore } from './useStyles'
import { request } from '../../services/api/request'
import Helmet from 'react-helmet'
import { useState, useEffect } from 'react'
import Text from '../../components/Text/Text'
import { Container, Flex } from '../../useStyles'
import Movie from '../../components/Movie'
import { MoviesWrapper } from '../Movies/useStyles'
import { FaChevronDown } from 'react-icons/fa'

const TvShows = () => {
    // const [filteredData, setFilteredDatas] = useState([])
    const [shows, setShows] = useState([])
    const [shownMovies, setShownMovies] = useState(12)
    // const [formData, setFormData] = useState({
    //     genre: "",
    //     country: "",
    //     year: "",
    //     quality: ""
    // })
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(formData)
    //     request.get(`updates/shows?since=${formData.year}`)
    //         .then((res) => setFilteredDatas(res))
    //         .catch((err) => console.log(err))
    // };
    // const handleFillForm = (e) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value
    //     });


    // }
    useEffect(() => {
        request.get(`/shows`)
            .then((res) => setShows(res))
            .catch((err) => console.log(err))
    },[])
    return (
        <MoviesWrapper>
        <Wrapper>
            {/* <Filter handleSubmit={handleSubmit} handleFillForm={handleFillForm}/> */}
            <Container>
                <Helmet>
                    <title>
                        Tv shows
                    </title>
                </Helmet>
                <Text type="h1" text="Latest movies" />
                <Flex>
                    {console.log(shows)}
                    {shows.data ? (
                            shows.data
                                .slice(0, shownMovies)
                                .map((el) => (
                                    <Movie
                                        style={{ marginBottom: "1.8rem" }}
                                        title={el.name}
                                        img={el.image.original}
                                        key={el.id}
                                        id={el.id}
                                    />
                                ))
                        
                    ) : (<>loading</>)}
                </Flex>
            </Container>
                                    <LoadMore>
                    <button onClick={() => setShownMovies(shownMovies + 6)}>
                        <span>
                            Load more

                        </span>
                        <FaChevronDown />
                    </button>
                                    </LoadMore>
        </Wrapper>
        </MoviesWrapper>
    )
}

export default TvShows
