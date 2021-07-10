import { useEffect } from "react";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import { Hero, Heading } from "./useStyles";
import { set_movies } from "../../redux/actions/movie_actions";
import { request } from "../../services/api/request";
import { BannerConfig, MoviesConfig } from "../../db";
import Card from "../../components/Card";
import { Container } from "../../useStyles";
import Movie from "../../components/Movie";
import { Link } from "react-router-dom";

const Home = () => {
  const products = useSelector((state) => state.allPayloads.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    request
      .get("/shows/1/episodes")
      .then((res) => dispatch(set_movies(res)))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Hero>
      <Slider
        className="hero"
        {...BannerConfig}
        style={{ position: "relative" }}
      >
        {products &&
          products.data
            .slice(10, 16)
            .map((el) => (
              <Card image={el.image.original} title={el.name} id={el.id} />
            ))}
      </Slider>
      <Container style={{ marginBottom: "3rem" }}>
        <Link to="/movies">
          <Heading>Films</Heading>
        </Link>
        <Slider className="slide" {...MoviesConfig}>
          {products &&
            products.data
              .slice(0, 16)
              .map((el) => (
                <Movie title={el.name} img={el.image.original} id={el.id} />
              ))}
        </Slider>
      </Container>
      <Container style={{ marginBottom: "3rem" }}>
        <Link to="/movies">
          <Heading>Trending</Heading>
        </Link>
        <Slider className="slide" {...MoviesConfig}>
          {products &&
            products.data
              .slice(16, 32)
              .map((el) => (
                <Movie title={el.name} img={el.image.original} id={el.id} />
              ))}
        </Slider>
      </Container>
    </Hero>
  );
};

export default Home;
