import React, { useState, useContext } from "react";
import "../styles/login.css";
import userIcon from "../assets/images/user.png";
import RegisterImage from "../assets/images/register.png";
import { Container, Col, Row, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    phone:"",
    password: "",
  });
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.message);
      } else {
        dispatch({ type: "REGISTER_SUCCESS" });
        navigate("/login");
      }
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login  d-flex justify-content-between">
              <div className="login-img">
                <img src={RegisterImage} alt="login-icon" />
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
                      type="text"
                      placeholder="Username"
                      id="username"
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
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
                      type="text"
                      placeholder="Phone Number"
                      id="phone"
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
                  >
                    Create account
                  </Button>
                  <p>
                    Don't have an account? <Link to="/login">Login</Link>
                  </p>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Register;
