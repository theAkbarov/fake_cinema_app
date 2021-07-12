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

const Account = () => {
  const history = useHistory();
  const initialState = history.location.pathname.split("");
  initialState.shift();
  console.log()
  const [active, setActive] = useState(initialState.join("").includes('settings') ? "settings" :
    initialState.join("").includes('wishlist') ? "wishlist" : initialState.join("").includes('profile') ? "account" : ""
  );
  return (
    <UserProfile>
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
