import { useState } from "react";
// import { useSelector } from "react-redux";
import Movie from "../../components/Movie";
import NoResult from "../NoResult/NoResult";
import { WishList } from "./useStyles";

const Wishlist = () => {
  const [datas, setDatas] = useState(
    window.localStorage.length > 0
      ? JSON.parse(window.localStorage.getItem("wishlist"))
      : []
  );
  const deleteHandler= (id) => {
      const deletedMovie = datas.filter(el => el.id !== id)
    setDatas(deletedMovie)
    window.localStorage.setItem("wishlist", JSON.stringify(deletedMovie))
    }
  return (
    <WishList style={{display:"flex",flexWrap:"wrap"}}>
        {datas.length > 0 ? (
        datas.map((el) => (
          <Movie
            key={el.id}
            title={el.name}
            img={el.image.original}
            id={el.id}
            deleteBtn={true}
            deleteHandler={deleteHandler}
          />
        ))
      ) : (<NoResult />) }
    </WishList>
  );
};

export default Wishlist;
