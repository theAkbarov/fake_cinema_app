import { Container } from "../../useStyles";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { request } from "../../services/api/request";
import About from "../../containers/About";
import Movie from "../../components/Movie";
import Images from "../../containers/Images";
import Comments from "../../containers/Comments";
import {
  ShowWrapper,
  Banner,
  MovieInfo,
  Button,
  Text,
  Seasons,
} from "./useStyles";
import {
  set_movie,
  set_seasons,
  set_images,
  set_wishlist,
} from "../../redux/actions/movie_actions";

import { useDispatch, useSelector } from "react-redux";
import { HeartIcon, HeartIconSaved } from "../../assets/icons";
import Play from "../../assets/icons/play-button-svgrepo-com.svg";
import Slider from "react-slick";
import { MoviesConfig, ShowsData } from "../../db";
import Navbar from "../../components/Navbar/Navbar";
const Show = ({ match }) => {
  const [active, setActive] = useState("about");
  const [heart, setHeart] = useState(false);
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.allPayloads.movie);
  // const wishlist = useSelector((state) => state.allPayloads.wishlist);
  const [wishlist, setWishlist] = useState(
    window.localStorage.getItem("wishlist") !== null
      ? JSON.parse(window.localStorage.getItem("wishlist"))
      : [],
  );

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

  const wishlistHandler = (product) => {
    const products = [...wishlist, product];
    setWishlist(products);
    window.localStorage.setItem("wishlist", JSON.stringify(products));
    console.log(products);
    console.log(product);
    // dispatch(set_wishlist(products))
    setHeart(true)
  };
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
              <Button
                onClick={() => wishlistHandler(movie.data)}
                className="favourites"
              >
                {heart ? <HeartIconSaved /> : <HeartIcon />}
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
                        key={el.id}
                        style={{ margin: "8px 12px", display: "inline-block" }}
                        to={`/show/${el.id}`}
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
            <Navbar data={ShowsData} setActive={setActive} active={active} />
            {active === "about" ? (
              <About movie={movie} />
            ) : active === "comments" ? (
              <Comments movie={movie} />
            ) : active === "images" ? (
              <Images />
            ) : (
              ""
            )}
            {movies && <Text>Similar</Text>}

            <Slider className="slide" {...MoviesConfig}>
              {movies &&
                movies.data
                  .slice(10, 20)
                  .map((el) => (
                    <Movie title={el.name} img={el.image.original} id={el.id} key={el.id} />
                  ))}
            </Slider>
            {!movies && <h1 style={{ whiteSpace: "nowrap" }}>Similar movies is not available now. Sorry :(</h1>
            }
          </Container>
        </>
      ) : (
        <></>
      )}
    </ShowWrapper>
  );
};

export default Show;
