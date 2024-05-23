import React, { useState, useContext } from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";
const TourBooking = ({ tour }) => {
  const { price, reviews, avgRating,title } = tour;
  const navigate = useNavigate();
  const {user } = useContext(AuthContext);
  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName : title,
    fullName: "",
    phone: "",
    guestNumber: 1,
    fromDate: "",
    toDate: "",
  });
  
  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const chargeFee = (Number(price) * 10) / 100;
  const total =
    Number(price) * Number(booking.guestNumber) + Number(chargeFee);
  //sending data to the database server

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(booking)
    try{
      if(!user || user === undefined || user === null){
        return alert('Please sign in first');
      }
      const res = await fetch(`${BASE_URL}/booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        booking: "include",
        body: JSON.stringify(booking),
      })

      const result = await res.json();
      if(!res.ok){
        return alert(result.message);
      }
      navigate("/thank-you");

    }catch(err){
      alert(err.message);
    }
 
  };

  return (
    <div className="booking">
      <div className="booking-top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>/Per person</span>
        </h3>
        <span className="property-rating d-flex align-items-center ">
          <span className="icon">
            <FaStar />
          </span>
          <span>
            {" "}
            {avgRating === 0 ? null : avgRating} ({reviews?.length})
          </span>
        </span>
      </div>
      {/* Booking form Column */}

      <div className="booking-form">
        <h5>Info</h5>
        <Form className="booking-info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="text"
              placeholder="Phone Number"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="fromDate"
              required
              onChange={handleChange}
            />
            <input
              type="date"
              placeholder=""
              id="toDate"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Guests Number"
              id="guestNumber"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
      {/* Bottom of the booking column */}
      <div className="booking-bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1 ">
              ${price}
              <span className="price-text"> /per person</span>
            </h5>
            <span className="highlighted-price">Tax: ${chargeFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <span className="">Total</span>
            <h5 className="d-flex align-items-center gap-1 ">
              ${total}
              <span className="price-text"> /per person</span>
            </h5>
          </ListGroupItem>
        </ListGroup>
        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
         Book Tour
        </Button>
      </div>
    </div>
  );
};

export default TourBooking;
