import React, { useState } from "react";
import { UserProfile, Heading } from "./useStyles";
import { Container, Flex } from "../../useStyles";
import Logout from "../../components/Logout";
import Navbar from "../../components/Navbar";
import { ProfileData } from "../../db";
import { Switch, Route, useHistory } from "react-router-dom";
import Wishlist from "../../containers/Wishlist";
import Settings from "../../containers/Settings";
import AccountInfo from "../../containers/AccountInfo/AccountInfo";
import { Helmet } from "react-helmet";
import { useAuth } from "../../services/context/AuthContext";

const Account = () => {
  const { currentUser } = useAuth()
  
  const history = useHistory();
  const initialState = history.location.pathname.split("");
  initialState.shift();
  console.log()
  const [active, setActive] = useState(initialState.join("").includes('settings') ? "settings" :
    initialState.join("").includes('wishlist') ? "wishlist" : initialState.join("").includes('profile') ? "account" : ""
  );
  const nameHandler = (arr) => {
    let name = ""
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== "@") {
        name += arr[i]
      } else {
        break
      }
    }
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return capitalizeFirstLetter(name)
  }
  const title = nameHandler(currentUser.email.split(""))
  return (
    <UserProfile>

      <Helmet>
        <title>User page | {nameHandler(currentUser.email.split(""))}</title>
      </Helmet>
      <Container>
        <Flex>
          <Heading>Profile</Heading>
          <div style={{ width: "150px" }}>
            {" "}
            <Logout />{" "}
          </div>
        </Flex>
        <Navbar
          type="Link"
          data={ProfileData}
          setActive={setActive}
          active={active}
        />
        <Switch>
          <Route path="/profile/settings" component={Settings} />
          <Route path="/profile/wishlist" component={Wishlist} />
          <Route path="/profile" component={AccountInfo} />
        </Switch>
      </Container>
    </UserProfile>
  );
};

export default Account;
