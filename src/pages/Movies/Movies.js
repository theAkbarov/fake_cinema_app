import { useState } from "react";
import { MoviesWrapper, Filter, Button } from "./useStyles";
import { Container, Flex } from "../../useStyles";
import FilterInput from "../../components/FilterInput/FilterInput";
import { filterHTMLsemanticDatas } from "../../db";
import Movie from "../../components/Movie";
import { useSelector } from "react-redux";
const Movies = () => {
  const movies = useSelector((state) => state.allPayloads.movies);
  const [ formData, setFormData ] = useState({
    genre: "",
    country: "",
    year: "",
    quality: ""
  })
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData)
  };
  const handleFillForm = (e) => {
      setFormData({
          ...formData,
          [e.target.name]: e.target.value
        })
  }
  return (
    <MoviesWrapper>
      <Filter>
        <Container>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Flex style={{ alignItems: "flex-end" }}>
              <FilterInput onEdit={handleFillForm} data={filterHTMLsemanticDatas[0]} />
              <FilterInput onEdit={handleFillForm} data={filterHTMLsemanticDatas[1]} />
              <FilterInput onEdit={handleFillForm} data={filterHTMLsemanticDatas[2]} />
              <FilterInput onEdit={handleFillForm} data={filterHTMLsemanticDatas[3]} />
              <Button>Reset</Button>
              <Button>Search</Button>
            </Flex>
          </form>
        </Container>
      </Filter>
      <Container>
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
