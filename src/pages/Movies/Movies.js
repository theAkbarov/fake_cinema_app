import { useState } from "react";
import { MoviesWrapper, FilterWrapper } from "./useStyles";
import Text from '../../components/Text/Text'
import { Container, Flex } from "../../useStyles";
import Movie from "../../components/Movie";
import { useSelector } from "react-redux";
import { request } from '../../services/api/request'
import Filter from '../../containers/Filter'
const Movies = () => {
  const data = useSelector((state) => state.allPayloads.movies);
  window.localStorage.setItem("movies", JSON.stringify(data));
  const movies = JSON.parse(window.localStorage.getItem("movies"));
  const [ filteredData, setFilteredDatas ] = useState([])
  const [ formData, setFormData ] = useState({
    genre: "",
    country: "",
    year: "",
    quality: ""
  })
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData)
    request.get(`updates/shows?since=${formData.year}`)
      .then((res) => setFilteredDatas(res))
      .then((res) => console.log(filteredData))
      .catch((err) => console.log(err))
    };
  const handleFillForm = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });


  }

  return (
    <MoviesWrapper>
          <Filter handleSubmit={handleSubmit} handleFillForm={handleFillForm}/>
      <Container>
       <Text type="h1" text="Latest movies"/>
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
      </Container>
    </MoviesWrapper>
  );
};

export default Movies;
