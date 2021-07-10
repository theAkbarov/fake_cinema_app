import { Container } from "../../useStyles";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { request } from "../../services/api/request";
import About from '../../containers/About'
import Movie from '../../components/Movie'
import Images from '../../containers/Images'
import Comments from '../../containers/Comments'
import {
  ShowWrapper,
  Banner,
  MovieInfo,
  Button,
  Text,
  Seasons,
  Nav,
} from "./useStyles";
import { set_movie, set_seasons, set_images } from "../../redux/actions/movie_actions";
import { useDispatch, useSelector } from "react-redux";
import { HeartIcon } from "../../assets/icons";
import Play from "../../assets/icons/play-button-svgrepo-com.svg";
import Slider from "react-slick";
import { MoviesConfig } from "../../db";

const Show = ({ match }) => {
  const [active, setActive] = useState("about");
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.allPayloads.movie);
  const seasons = useSelector((state) => state.allPayloads.seasons);
  const movies = useSelector((state) => state.allPayloads.movies);
  useEffect(() => {
    request
      .get(`/shows/${match.params.id}`)
      .then((res) => dispatch(set_movie(res)))
      .catch((err) => console.log("This is fucking error", err));
    request
      .get(`/shows/${match.params.id}/seasons`)
      .then((res) => dispatch(set_seasons(res)))
      .catch((err) => console.log("This is fucking error", err));
    request
      .get(`/shows/${match.params.id}/images`)
      .then((res) => dispatch(set_images(res)))
      .catch((err) => console.log("This is fucking error", err));
  }, [match.params.id]);
  return (
    <ShowWrapper>
      {movie ? (
        <>
          <Banner
            style={{
              minHeight: "60vh",
              background: `url(${movie && movie.data.image.original})`,
            }}
          >
            <MovieInfo>
              <Button>
                <img width="60" height="60" alt="" src={Play} />
              </Button>
              <Text>{movie.data && movie.data.name}</Text>
              <h3 style={{ margin: "10px", color: "white" }}>
                {" "}
                {movie.data.status}
              </h3>
              <Button className="favourites">
                <HeartIcon />
              </Button>
            </MovieInfo>
          </Banner>
          <Container>
            <Seasons>
              <Text>Seasons</Text>
              <Slider {...MoviesConfig} className="slide">
                {seasons &&
                  seasons.data.map((el) => (
                    <>
                      <Link
                        style={{ margin: "8px 12px", display: "inline-block" }}
                        to={`/shows/${el.id}`}
                      >
                        <img
                          width="120"
                          src={el.image && el.image.original}
                          alt=""
                        />
                      </Link>
                      {el.image == null ? (
                        <p
                          style={{
                            color: "white",
                            textAlign: "left",
                            fontSize: "15px",
                          }}
                        >
                          coming soon...
                        </p>
                      ) : null}
                    </>
                  ))}
              </Slider>
            </Seasons>
            <Nav>
              <button
                className={active === "about" ? "active" : " "}
                onClick={() => setActive("about")}
              >
                About
              </button>
              <button
                className={active === "comments" ? "active" : " "}
                onClick={() => setActive("comments")}
              >
                Comments
              </button>
              <button
                className={active === "images" ? "active" : " "}
                onClick={() => setActive("images")}
              >
                Images
              </button>
            </Nav>
            {active === "about" ? (
              <About movie={movie}/>
            ) : active === "comments" ? (
              <Comments movie={movie}/>
            ) : active === "images" ? (
              <Images />
            ) : (
              ""
            )}
            <Text>
              Similar
            </Text>

            <Slider className="slide" {...MoviesConfig}>
              {movies.data && movies.data.slice(10,20).map(el => (
                <Movie title={el.name} img={el.image.original} id={el.id}/>
              ))}
              </Slider>
          </Container>
        </>
      ) : (
        <></>
      )}
    </ShowWrapper>
  );
};

export default Show;
