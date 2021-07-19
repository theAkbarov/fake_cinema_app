import { useEffect, useState } from "react";
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
import Helmet from "react-helmet";

const Home = () => {
  const [datas, setDatas] = useState(
    window.localStorage.getItem("wishlist") &&
      window.localStorage.getItem("wishlist").length !== 0
      ? JSON.parse(window.localStorage.getItem("wishlist"))
      : []
  );
  const products = useSelector((state) => state.allPayloads.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    request
      .get("/shows")
      .then((res) => dispatch(set_movies(res)))
      .catch((err) => console.log(err));
  }, []);
  window.localStorage.setItem("wishlist", JSON.stringify(datas));
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
              <Card
                image={el.image.original}
                title={el.name}
                id={el.id}
                key={el.id}
              />
            ))}
      </Slider>
      <Container style={{ marginBottom: "3rem" }}>
        <Helmet>
          <title>Cinemagic | cinema portal</title>
        </Helmet>
        <Link to="/movies">
          <Heading>Films</Heading>
        </Link>
        <Slider className="slide" {...MoviesConfig}>
          {products &&
            products.data
              .slice(0, 16)
              .map((el) => (
                <Movie
                  title={el.name}
                  img={el.image.original}
                  key={el.id}
                  id={el.id}
                />
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
                <Movie
                  title={el.name}
                  img={el.image.original}
                  key={el.id}
                  id={el.id}
                />
              ))}
        </Slider>
      </Container>
    </Hero>
  );
};

export default Home;
