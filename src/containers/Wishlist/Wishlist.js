import { useState } from "react";
import { useSelector } from "react-redux";
import Movie from '../../components/Movie'
import { Flex } from "../../useStyles";
import { WishList } from "./useStyles";

const Wishlist = () => {
  const [datas, setDatas] = useState(
    window.localStorage.length > 0
      ? JSON.parse(window.localStorage.getItem("wishlist"))
      : null,
  );
  return (
    <WishList>
          {console.log(datas)}
        <Flex>
              {datas.map(el => (
                  <Movie key={el.id} title={el.name} img={el.image.original} id={el.id} key={el.id} />
              ))}
        </Flex>
    </WishList>
  );
};

export default Wishlist;
