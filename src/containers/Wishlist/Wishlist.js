import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Movie from "../../components/Movie";
import { Flex } from "../../useStyles";
import { WishList } from "./useStyles";

const Wishlist = () => {
  const [datas, setDatas] = useState(
    window.localStorage.length > 0
      ? JSON.parse(window.localStorage.getItem("wishlist"))
      : []
  );
  const deleteHandler= (id) => {
      const deletedMovie = datas.findIndex(el => el.id === id)
      datas.splice(deletedMovie,1)
      setDatas(datas);
      console.log(datas)
    //   window.localStorage.setItem("wishlist", JSON.stringify(datas))
    }
  return (
    <WishList>
      {console.log(datas)}
      <Flex>
        {datas && datas.map((el) => (
          <Movie
            key={el.id}
            title={el.name}
            img={el.image.original}
            id={el.id}
            deleteBtn={true}
                deleteHandler={deleteHandler}
          />
        ))}
      </Flex>
    </WishList>
  );
};

export default Wishlist;
