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
  Menu
} from "./useStyles";
import Logout from '../../components/Logout'
import { AppbarDatas } from "../../db";
import {  SearchIcon } from "../../assets/icons";

import LogoIcon from "../../assets/icons/logo.svg";
import { useAuth } from "../../services/context/AuthContext";
const Appbar = () => {
  const {  currentUser } = useAuth()
  
  const [active, setActive] = useState(false);
  const searchHandler= () => {
    
  }

  return (
    <Header>
      <Container>
        <HeaderInner>
          <Link to="/">
            <img width="150px" src={LogoIcon} alt=""/>
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
            {currentUser ? <Profile onClick={() => setActive(!active)}>
              {currentUser && currentUser.email.split("")[0].toUpperCase()}
              <Menu onBlur={() => setActive(false)} className={active ? "opened" : " "}>
                <h3>{currentUser && currentUser.email}</h3>
                <Link to="/profile">Account</Link>
                <Link to="/profile/wishlist">Wishlist</Link>
                <Link to="/profile/settings">Settings</Link>
                <Logout/>
              </Menu>
            </Profile> : <Login to="/auth">Sign in</Login>}
          </Action>
        </HeaderInner>
      </Container>
    </Header>
  );
};

export default Appbar;
