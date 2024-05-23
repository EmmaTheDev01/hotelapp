import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Col, Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../utils/config";
import { Form } from "react-bootstrap";
import avatar from "../assets/images/1.png";
import { Link } from "react-router-dom";
import "../styles/edit.css";
const Profile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const handleChange = (e) => {
    setUserDetails((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(userDetails);
    try {
      if (!user || user === undefined || user === null) {
        return alert("Please sign in first");
      }
      const res = await fetch(`${BASE_URL}/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(userDetails),
      });

      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      {!user ? (
        navigate("/login")
      ) : (
        <Container>
          <Row>
            <Col lg="3">
              <div className="mt-5 mb-5 user-menu">
                <h5>Direct Links</h5>
                <ul>
                  <Link to="">
                    <li>Bookings</li>
                  </Link>
                  <Link to="">
                    <li>Properties</li>
                  </Link>
                  <Link to="">
                    <li>Reviews</li>
                  </Link>
                  <Link to="">
                    <li>My interests</li>
                  </Link>
                  <Link to="/dashboard">
                    <li>Dashboard</li>
                  </Link>
                </ul>
              </div>
            </Col>
            <Col lg="5">
              <div className="mt-5 mb-5 profile-card">
              <img className="avatar" src={avatar} alt="User" />
                <ul>
                  <li>
                    <b>{user.username}</b>
                  </li>
                  <li>{user.email}</li>
                  <li>{user.phone}</li>
                  <li>#{user._id}</li>
                </ul>
              </div>
            </Col>
            <Col lg="4">
              <div className="mt-5 mb-5">
                <h5>Edit Profile</h5>

                <Form className="user-info-form" onSubmit={handleClick}>
                  <input
                    type="text"
                    placeholder="New Username"
                    id="username"
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    placeholder="New Email Address"
                    id="email"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    placeholder="Update Phone number"
                    id="phone"
                    onChange={handleChange}
                  />

                  <input
                    type="password"
                    placeholder="New Password"
                    id="password"
                    onChange={handleChange}
                  />
                </Form>
                <button
                  className="edit_button"
                  onClick={handleClick}
                >
                  Edit Profile
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Profile;
