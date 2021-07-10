import { useState } from "react";
import { Container } from "../../useStyles";
import {
  Authorize,
  Button,
  Login,
  Register,
  Wrapper,
  AuthButton,
} from "./useStyles";
import BackgroundImage from "../../assets/images/back.png";

const Auth = () => {
  const [active, setActive] = useState("login");
  return (
    <Authorize
      style={{ background: `url(${BackgroundImage})`, backgroundSize: "cover" }}
    >
      <Container>
        <div>
          <Button
            className={active === "login" ? "active" : ""}
            onClick={() => setActive("login")}
          >
            Login
          </Button>
          <Button
            className={active === "register" ? "active" : ""}
            onClick={() => setActive("register")}
          >
            Registeration
          </Button>
        </div>
        {active === "login" ? (
          <Login>
            <Wrapper>
              <label htmlFor="mail">Email</label>
              <input type="text" id="mail" placeholder="Email" />
            </Wrapper>
            <Wrapper>
              <label htmlFor="pass">Password</label>
              <input type="text" id="pass" placeholder="Password" />
            </Wrapper>
            <AuthButton>Login</AuthButton>
          </Login>
        ) : (
          <Register>
            <Wrapper>
              <label htmlFor="name">Enter your name</label>
              <input type="text" id="name" placeholder="Your name" />
            </Wrapper>
            <Wrapper>
              <label htmlFor="mail">Enter you email</label>
              <input type="email" id="mail" placeholder="Your email" />
            </Wrapper>
            <Wrapper>
              <label htmlFor="psw">Create your password</label>
              <input type="password" id="psw" placeholder="Your Password" />
            </Wrapper>
            <AuthButton>Register</AuthButton>
          </Register>
        )}
      </Container>
    </Authorize>
  );
};

export default Auth;
