import { useState, useRef } from "react";
import { Container } from "../../useStyles";
import {useHistory } from 'react-router-dom'
import { useAuth } from '../../services/context/AuthContext'
import {
  Authorize,
  Button,
  Login,
  Register,
  Wrapper,
  AuthButton,
  Error
} from "./useStyles";
import Helmet from "react-helmet"
import BackgroundImage from "../../assets/images/back.png";
const Auth = () => {
  const history = useHistory()
  const passwordRef = useRef()
  const pswref = useRef()
  const mailref = useRef()
  const emailRef = useRef()
  const confirmRef = useRef()
  const [error, setError] = useState("")
  const [error1, setError1] = useState("")
  const [loading, setLoading] = useState(false)
  const [active, setActive] = useState("login");
  const { signup, currentUser, login } = useAuth()

   async function handleSignIn(e) {
    e.preventDefault();
    try {
      setError("")
      setLoading(true)
      await login(mailref.current.value, pswref.current.value)
      history.push("/")
    } catch {
      setError1("Failed to log in")
    }
    setLoading(false)
    
  }

   async function handleSignUp(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmRef.current.value) {
      return setError("Password do not match")
    }
    
    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      setActive("login")
    } catch {
      setError("Failed to create an account")
    }
    setLoading(false)
    
  }
  return (
    <Authorize
      style={{ background: `url(${BackgroundImage})`, backgroundSize: "cover" }}
    >
      <Helmet>
        <title>Authorize</title>
      </Helmet>
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
            Registration
          </Button>
        </div>
        {active === "login" ? (
          <Login onSubmit={(e) => handleSignIn(e)}>
            {error1 && <Error>Hmmm something went wrong. {error1}</Error>}

            <Wrapper>
              <label htmlFor="mail">Email</label>
              <input required type="text" ref={mailref} id="mail" placeholder="Email" />
            </Wrapper>
            <Wrapper>
              <label htmlFor="pass">Password</label>
              <input required type="password" ref={pswref} id="pass" placeholder="Password" />
            </Wrapper>
            <AuthButton type="submit">Login</AuthButton>
          </Login>
        ) : (
            <Register onSubmit={(e) => handleSignUp(e)}>
              {currentUser && currentUser.email}
              {error && <Error>Hmmm something went wrong. {error}</Error>}
                <Wrapper>
              <label htmlFor="mail">Enter you email</label>
                <input required ref={emailRef} type="email" id="mail" placeholder="Your email" />
            </Wrapper>
            <Wrapper>
              <label htmlFor="conpass">Confirm password</label>
                <input required ref={confirmRef} type="password" id="conpass" placeholder="Password" />
            </Wrapper>
            <Wrapper>
              <label htmlFor="psw">Create your password</label>
                <input required type="password" ref={passwordRef} id="psw" placeholder="Your Password" />
            </Wrapper>
            <AuthButton disabled={loading} type="submit">Register</AuthButton>
          </Register>
        )}
      </Container>
    </Authorize>
  );
};

export default Auth;
