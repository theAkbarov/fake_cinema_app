import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../useStyles";
import {
  Header,
  Navbar,
  HeaderInner,
  Profile,
  Login,
  Action,
  Search,
} from "./useStyles";
import { AppbarDatas } from "../../db";
import { SearchIcon } from "../../assets/icons";
import LogoIcon from "../../assets/icons/logo.svg";
const Appbar = () => {
  const [token, setToken] = useState(false);
  const searchHandler= () => {
    
  }
  return (
    <Header>
      <Container>
        <HeaderInner>
          <Link to="/">
            <img width="150px" src={LogoIcon} />
          </Link>

          <Navbar>
            {AppbarDatas.map((el) => (
              <Link to={el.path} key={el.id}>
                {el.title}
              </Link>
            ))}
          </Navbar>
          <Action>
            <Search onClick={searchHandler}>
              <SearchIcon />
            </Search>
            {token ? <Profile>U</Profile> : <Login to="/auth">Sign in</Login>}
          </Action>
        </HeaderInner>
      </Container>
    </Header>
  );
};

export default Appbar;
