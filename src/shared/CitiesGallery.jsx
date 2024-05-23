import React from "react";
import "../styles/home.css";
const CitiesGallery = ({ gallery }) => {
  const { city, photo, properties } = gallery;

  return (
    <div className="cities-section">
      <div className="citythree">
        <div className="city-section">
          <img src={photo} alt="city" />
          <span className="headcity-section">{city}</span>
          <p className="childcity-section">{properties} properties</p>
        </div>
      </div>
    </div>
  );
};

export default CitiesGallery;
