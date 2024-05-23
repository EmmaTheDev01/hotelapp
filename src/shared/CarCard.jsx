import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import "./properties.css";
import calculateAvgRating from "../utils/avgRating";

const CarCard = ({ car }) => {
  const { _id, name, photo, country, model, reviews, featured, condition, price,desc } = car;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <div className="property-card">
      
        <div className="property-img">
          <img src={photo} alt="PropertyImage" />
          {featured && <span>Featured</span>}
        </div>
       
          <div className="card-top ">
          <h5 className="property-title">
            <Link to={`/cars/${_id}`}>{name},{model}</Link>

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
          <p>{condition}</p>
            
           
          <div className="card-bottom">
            <h5>
              ${price}
              <span> /day</span>
            </h5>
            <span className="property-location">
              <span className="icon">
                <FaMapMarkerAlt />
              </span>
              {country}
            </span>
            <button className="btn reserve-btn">
              <Link to={`/cars/${_id}`}>Reserve</Link>
            </button>
          </div>
          </div>
         
    </div>
  );
};

export default CarCard;
