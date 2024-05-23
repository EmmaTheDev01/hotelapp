import React, { useState, useContext } from "react";
import "../styles/login.css";
import userIcon from "../assets/images/user.png";
import loginImage from "../assets/images/login1.jpg";
import { Container, Col, Row, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";


const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const [show, setShow] = useState(true);
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });
      const result = await response.json();
      if (!response.ok) {
        alert(result.message);
        dispatch({ type: "LOGIN_FAILURE", payload: result.data });
      } else {
        dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
        navigate("/hotels");
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
    }
  };
  if (show) {
    return (
      <section>
        <Container>
          <Row>
            <Col lg="8" className="m-auto">S
              <div className="login  d-flex justify-content-between">
                <div className="login-img">
                  <img src={loginImage} alt="login-icon" />
                </div>
                <div className="login-form">
                  <div className="user">
                    <img src={userIcon} alt="login-icon" />
                  </div>
                  <div className="user">{/* Image on a login page */}</div>
                  <h2>Login</h2>
                  <Form onSubmit={handleClick}>
                    <FormGroup>
                      <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                    <Button
                      className="btn secondary__btn auth-btn"
                      type="submit"
                      onClick={() => setShow(true)}
                    >
                      Login
                    </Button>
                    <p>
                      Don't have an account? <Link to="/register">Create</Link>
                    </p>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
};
export default Login;
