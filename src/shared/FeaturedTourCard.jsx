import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import "./featured-properties.css";
import calculateAvgRating from "../utils/avgRating";

const FeaturedTourCard = ({ tour }) => {
  const { _id, title, photo, city, featured, reviews, price } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  if (featured) {
    return (
      <div className="featured-property-card">
        <Card>
          <div className="featured-property-img">
            <img src={photo} alt="featured-propertyImage" />
            {featured && <span>Featured</span>}
          </div>
          <CardBody>
            <div className="featured-card-top d-flex align-items-center justify-content-between">
              <span className="featured-property-location d-flex align-items-center gap-1">
                <span className="featured-icon">
                  <FaMapMarkerAlt />
                </span>
                {city}
              </span>
              <span className="featured-property-rating d-flex align-items-center gap-1">
                <span className="featured-icon">
                  <FaStar />
                </span>
                {avgRating === 0 ? null : avgRating}
                {totalRating === 0 ? (
                  "Not rated"
                ) : (
                  <span> ({reviews.length})</span>
                )}
              </span>
            </div>
            <h5 className="featured-property-title">
              <Link to={`/tours/${_id}`}>{title}</Link>
            </h5>
            <div className="featured-card-bottom d-flex align-items-center justify-content-between mt-3">
              <h5>
                {price}
                <span> /night</span>
              </h5>

              <button className="btn featured-reserve-btn">
                <Link to={`/tours/${_id}`}>Details</Link>
              </button>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
};

export default FeaturedTourCard;
