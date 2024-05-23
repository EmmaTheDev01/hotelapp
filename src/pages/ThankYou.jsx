import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import "../styles/thank-you.css";
const ThankYou = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12 pt-5 text-center">
            <div className="thank-you-page">
              <span className="check-icon">
                <FaCheckCircle />
              </span>
              <h1 className="mb-3 fw-semibold">Thank You</h1>
              <h3 className="mb-4">
                Your reservation has been booked succesfully, wait for
                verification!
              </h3>
              <Button className="btn primary__btn w-25">
                <Link to="/home">Back to Home</Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ThankYou;
