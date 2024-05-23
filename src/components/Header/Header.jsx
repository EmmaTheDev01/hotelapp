import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "../Header/header.css";
import { FaBars } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import Offcanvas from "react-bootstrap/Offcanvas";
import UserActions from "../user/UserActions";
import { Container, Row } from "reactstrap";
const Header = () => {
 
  const { user } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className="header sticky__header">

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="offcanvas__menu">
            <ul>
              {user ? (
                <>
                  <Link to="/hotels">Hotels</Link>
                  <Link to="/tours">Tours</Link>
                  <Link to="/cars">Cars</Link>
                  <Link to="/dashboard">Dashboard</Link>
                  <Link to="/support">Support</Link>

                </>

              ) :
                (<>
                  <Link to="/hotels">Hotels</Link>
                  <Link to="/tours">Tours</Link>
                  <Link to="/cars">Cars</Link>
                  <Link to="/support">Support</Link>
                  <p className="warning">You are not logged in</p>
                  <Link to="/login">Login</Link>
                </>

                )}

            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* Logo */}
            <div className="logo">
              <Link to="/home">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
            {/* Navigation Menu  */}
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav-right-links d-flex align-items-center gap-4'">
                {user ? (
                 <UserActions user={user}/>
                ) : (
                  <>
                    <li>
                      <Link to="/login">
                        <svg
                          width="30px"
                          height="30px"
                          viewBox="0 -0.5 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M14.9769 14H10.0229C8.56488 14.0724 7.2731 14.963 6.68693 16.3C5.97993 17.688 7.39093 19 9.03193 19H15.9679C17.6099 19 19.0209 17.688 18.3129 16.3C17.7268 14.963 16.435 14.0724 14.9769 14Z"
                            stroke="#000000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.4999 8C15.4999 9.65685 14.1568 11 12.4999 11C10.8431 11 9.49994 9.65685 9.49994 8C9.49994 6.34315 10.8431 5 12.4999 5C13.2956 5 14.0587 5.31607 14.6213 5.87868C15.1839 6.44129 15.4999 7.20435 15.4999 8Z"
                            stroke="#000000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        My Booking
                      </Link>
                    </li>
                    <li>
                      <Link to="/support">
                        <svg
                          width="25px"
                          height="25px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M14.581 19.4041C14.6645 19.9894 14.2606 20.5326 13.676 20.6211L12 20.9841C11.6307 21.1187 11.2169 21.0265 10.9398 20.7477C10.6627 20.469 10.5729 20.0546 10.7097 19.6861C10.8466 19.3176 11.1851 19.0623 11.577 19.0321L13.252 18.6701C13.8213 18.509 14.4142 18.8364 14.581 19.4041V19.4041Z"
                            stroke="#000000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7 15.9919C5.89543 15.9919 5 15.0965 5 13.9919V10.9919C5 9.88737 5.89543 8.99194 7 8.99194C8.10457 8.99194 9 9.88737 9 10.9919V13.9919C9 15.0965 8.10457 15.9919 7 15.9919Z"
                            stroke="#000000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M17 15.9919C15.8954 15.9919 15 15.0965 15 13.9919V10.9919C15 9.88737 15.8954 8.99194 17 8.99194C18.1046 8.99194 19 9.88737 19 10.9919V13.9919C19 15.0965 18.1046 15.9919 17 15.9919Z"
                            stroke="#000000"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M18.25 11C18.25 11.4142 18.5858 11.75 19 11.75C19.4142 11.75 19.75 11.4142 19.75 11H18.25ZM4.25 11C4.25 11.4142 4.58579 11.75 5 11.75C5.41421 11.75 5.75 11.4142 5.75 11H4.25ZM19.75 14.0023C19.7513 13.5881 19.4165 13.2513 19.0023 13.25C18.5881 13.2487 18.2513 13.5835 18.25 13.9977L19.75 14.0023ZM13.5113 19.8951C13.1071 19.9855 12.8527 20.3865 12.9431 20.7907C13.0335 21.1949 13.4345 21.4493 13.8387 21.3589L13.5113 19.8951ZM19.75 11V9H18.25V11H19.75ZM19.75 9C19.75 4.71979 16.2802 1.25 12 1.25V2.75C15.4518 2.75 18.25 5.54822 18.25 9H19.75ZM12 1.25C7.71979 1.25 4.25 4.71979 4.25 9H5.75C5.75 5.54822 8.54822 2.75 12 2.75V1.25ZM4.25 9V11H5.75V9H4.25ZM18.25 13.9977C18.2414 16.8289 16.2742 19.2771 13.5113 19.8951L13.8387 21.3589C17.2853 20.588 19.7393 17.534 19.75 14.0023L18.25 13.9977Z"
                            fill="#000000"
                          />
                        </svg>
                        Support
                      </Link>
                    </li>
                  </>
                )}
              </div>
              <span className="mobile__menu">
                <FaBars onClick={handleShow} />
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
