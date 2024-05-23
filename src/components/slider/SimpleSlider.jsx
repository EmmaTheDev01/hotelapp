import React from "react";
import Slider from "react-slick";
import "./slider.css";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay:true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
   
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <div className="slider-card">
            <img
              className="slider-card-img"
              src="https://images.unsplash.com/photo-1600493504591-aa1849716b36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
              alt="sliderimage1"
            />
            <h3>Appartments</h3>
            <p>
            Residential buildings, or a separate dwelling within a house with its own entrance, bathroom and kitchen
            </p>
          </div>
        </div>
        <div>
          <div className="slider-card">
            <img
              className="slider-card-img"
              src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="sliderimage2"
            />
            <h3>Hotels</h3>
            <p>
            Establishments that provides lodging, meals, and other services to guests, travelers, and tourists.
            </p>
          </div>
        </div>
        <div>
          <div className="slider-card">
            <img
              className="slider-card-img"
              src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="sliderimage3"
            />
            <h3>ApartHotel</h3>
            <p>
            Serviced apartment complex that uses a hotel-style booking system. No fixed contracts.
            </p>
          </div>
        </div>
        <div>
          <div className="slider-card">
            <img
              className="slider-card-img"
              src="https://images.unsplash.com/photo-1575403071235-5dcd06cbf169?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt="sliderimage4"
            />
            <h3>Cottages</h3>
            <p>
            Small houses, particularly a traditional or old-fashioned house, or one that is used seasonally. 
            </p>
          </div>
        </div>
        <div>
          <div className="slider-card">
            <img
              className="slider-card-img"
              src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt="sliderfive"
            />
            <h3>Guest Houses</h3>
            <p>
            Inexpensive hotel-like lodging. Private home converted for the exclusive use of lodging.
            </p>
          </div>
        </div>
        <div>
          <div className="slider-card">
            <img
              className="slider-card-img"
              src="https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="sliderimagesix"
            />
            <h3>Villas</h3>
            <p>
            Country estate, complete with house, grounds, and subsidiary buildings. Suburban home
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
