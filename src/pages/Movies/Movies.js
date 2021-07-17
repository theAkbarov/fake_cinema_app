import { useState, useEffect } from "react";
import NoResult from '../../containers/NoResult/NoResult'
import { MoviesWrapper } from "./useStyles";
import Text from "../../components/Text/Text";
import { Container, Flex } from "../../useStyles";
import Movie from "../../components/Movie";
import Helmet from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { request } from "../../services/api/request";
import Filter from "../../containers/Filter";
import { set_movies } from "../../redux/actions/movie_actions";
const Movies = () => {
  const movies = useSelector((state) => state.allPayloads.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    request
      .get("/shows")
      .then((res) => dispatch(set_movies(res)))
      .catch((err) => console.log(err));
  }, []);
  const [filteredData, setFilteredDatas] = useState({
    isFetched: false,
    data: []
  });
  const [formData, setFormData] = useState({
    genre: "",
    country: "",
    year: "",
    quality: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    request
      .get(`/schedule?country=${formData.country}&date=${formData.year}-12-01`)
      .then((res) => setFilteredDatas({
        isFetched: true,
        data: res
      }))
      .catch((err) => console.log(err));
      console.log(filteredData.data.data)
  };
  const handleFillForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleReset = () => {
    setFormData({
      genre: "",
      country: "",
      year: "",
      quality: "",
    })
  }
  return (
    <MoviesWrapper>
      <Helmet>
        <title>Latest Movies</title>
      </Helmet>
      <Filter handleReset={handleReset} handleSubmit={handleSubmit} handleFillForm={handleFillForm} />
      <Container style={{paddingTop: "3.7rem"}}>
        <Text type="h1" text={filteredData.isFetched ? "Search results" : "Latest movies"} />
          {
          filteredData.isFetched ? (
            <Flex>
              {
                filteredData.data.length !== 0 ? (
                  filteredData.data.data.map(el => (
                    <Movie title={el.name} key={el.id} img={el.show.image.original} />
                  ))
                ) : (
                    <NoResult />
                )
              }
            </Flex>
          ) : (
            <Flex>
              {movies &&
                movies.data
                  .slice(0, 36)
                  .map((el) => (
                    <Movie
                      style={{ marginBottom: "1.8rem" }}
                      title={el.name}
                      img={el.image.original}
                      key={el.id}
                      id={el.id}
                    />
                  ))}
            </Flex>
          )
          }
      </Container>
    </MoviesWrapper>
  );
};

export default Movies;
