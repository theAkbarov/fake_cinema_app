import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
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
import { AppbarDatas } from "../../db";
import { SearchIcon } from "../../assets/icons";

import LogoIcon from "../../assets/icons/logo.svg";
import { useAuth } from "../../services/context/AuthContext";
const Appbar = () => {
  const {  currentUser,logout } = useAuth()
  
  const history = useHistory()
  const [active, setActive] = useState(false);
  const [error, setError] = useState("");
  const searchHandler= () => {
    
  }
  async function logOutHandler() {
    setError("")
    try {
      await logout()
      history.push('/auth')
    } catch {
      setError("Failed to log out!")
    alert(error)
    }
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
              <Menu className={active ? "opened" : " "}>
                <Link to="/wishlist">Wishlist</Link>
                <Link to="/settings">Settings</Link>
                <button onClick={logOutHandler}>Log out</button>
              </Menu>
            </Profile> : <Login to="/auth">Sign in</Login>}
          </Action>
        </HeaderInner>
      </Container>
    </Header>
  );
};

export default Appbar;
