import { MovieCard, Image, Text, Button, Remove } from "./useStyles.js";
import Play from "../../assets/icons/play-button-svgrepo-com.svg";
import DeleteIcon from "../../assets/icons/trash.svg";
import PreloadImage from "react-preload-image";

const Movie = ({ title, img, id, deleteBtn, deleteHandler }) => {
  return (
    <div style={{ position: "relative", margin: ".8rem 0" }}>
      <MovieCard to={`/show/${id}`}>
        <Image>
          <PreloadImage className="someClass" src={img} lazy />
          <Button>
            <img src={Play} alt="" />
          </Button>
        </Image>
        <div className="shadow"></div>
        <Text>{title}</Text>
      </MovieCard>
      {deleteBtn ? (
        <Remove onClick={() => deleteHandler(id)}>
          <img src={DeleteIcon} alt="" />
        </Remove>
      ) : (
        <></>
      )}
      <Button className="wishlist">add to wishlist</Button>
    </div>
  );
};

export default Movie;
