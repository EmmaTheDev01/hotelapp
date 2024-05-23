import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import "./properties.css";
import calculateAvgRating from "../utils/avgRating";

const HotelCard = ({ hotel }) => {
  const { _id, title, photo, country, city, featured, reviews, price,desc } = hotel;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <div className="property-card">
      
        <div className="property-img">
          <img src={photo} alt="PropertyImage" />
          {featured && <span>Featured</span>}
        </div>
       
          <div className="card-top ">
          <h5 className="property-title">
            <Link to={`/hotels/${_id}`}>{title}</Link>

            <span className="property-rating">
              <span className="icon">
                <FaStar />
              </span>
              {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                "Not rated"
              ) : (
                <span> ({reviews.length}) </span>
              )}
            </span>
          
          </h5>

          <p>{desc}</p>
            
           
          <div className="card-bottom">
            <h5>
              ${price}
              <span> /night</span>
            </h5>
            <span className="property-location">
              <span className="icon">
                <FaMapMarkerAlt />
              </span>
              {city},{country}
            </span>
            <button className="btn reserve-btn">
              <Link to={`/hotels/${_id}`}>Reserve</Link>
            </button>
          </div>
          </div>
         
    </div>
  );
};

export default HotelCard;
