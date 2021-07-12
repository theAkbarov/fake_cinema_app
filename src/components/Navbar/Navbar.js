import { Nav } from "./useStyles";
import { Link } from "react-router-dom";
const Navbar = ({ type, data, setActive, active }) => {
  return (
    <Nav>
      {type === "Link"
        ? data &&
          data.map((el) => (
            <Link
              className={active === el.title.toLowerCase() ? "active" : " "}
              key={el.title}
              onClick={() => setActive(el.title.toLowerCase())}
              to={el.url}
            >
              {el.title}
            </Link>
          ))
        : data &&
          data.map((el) => (
            <button
                  key={el}

              className={active === el.toLowerCase() ? "active" : " "}
              onClick={() => setActive(el.toLowerCase())}
            >
              {el}
            </button>
          ))}
    </Nav>
  );
};

export default Navbar;
