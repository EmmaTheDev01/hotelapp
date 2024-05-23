import React, { useEffect, useRef, useState, useContext } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  ListGroup,
  Modal,
  ListGroupItem,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import { useParams } from "react-router-dom";
import { FaCity, FaDollarSign, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import "../styles/hotel-details.css";
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/1.png";
import { BASE_URL } from "../utils/config";
import useFetch from "../hooks/useFetch";
import { AuthContext } from "../context/AuthContext";
import CarBooking from "../components/booking/CarBooking";
const CarDetails = () => {
  const reviewNote = useRef("");
  const [hotelRating, setHotelRating] = useState(null);
  const { id } = useParams();
  const { data: cars, loading, error } = useFetch(`${BASE_URL}/cars/${id}` );
  const {
    photo,
    image_one,
    image_two,
    image_three,
    image_four,
    image_five,
    name,
    country,
    model,
    condition,
    desc,
    price,
    reviews,

  } = cars;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const items = [
    { src: photo, key: 1 },
    { src: image_one, key: 2 },
    { src: image_two, key: 3 },
    { src: image_three, key: 4 },
    { src: image_four, key: 5 },
    { src: image_five, key: 6 },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.src}
    >
      <img className="carousel-image" src={item.src} alt={item.altText} />
    </CarouselItem>
  ));
  const { user } = useContext(AuthContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewNote.current.value;
    
    try {
      if (!user || user === undefined || user === null) {
        alert('You have to sign in to submit your review');
      }
      const reviewObj = {
        username: user?.username,
        rating: hotelRating,
        text: reviewText,
      }
      const res = await fetch(`${BASE_URL}/reviews/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", 
        body: JSON.stringify(reviewObj),
      })
      const result = await res.json();
      if(!res.ok){
        return alert(result.message);
      }
      alert(result.message);
    } catch (err) {
      alert(err.message)
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [cars]);

  return (
    <>
      <section>
        <Container>
          {loading && <h4 className="text-center pt-5">Loading...</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          <Modal isOpen={modal} toggle={toggle}>
            <Carousel
              className="carousel"
              activeIndex={activeIndex}
              next={next}
              previous={previous}
            >
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {slides}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
              />
            </Carousel>
          </Modal>

          {!loading && error && (
            <Row>
              <Col lg="8">
                <div className="property-content">
                  <img src={photo} onClick={toggle} alt="property_image" />
                  <div className="property-info">
                    <h2>{name},{model}</h2>
                    <div className="other-images">
                      <ListGroup>
                        <ListGroupItem className="border-0 px-0 other-images">
                          <img src={photo} onClick={toggle} alt="image1" />
                          <img
                            src={image_one}
                            onClick={toggle}
                            alt="other-image2"
                          />
                          <img
                            src={image_two}
                            onClick={toggle}
                            alt="other-image3"
                          />
                        </ListGroupItem>
                      </ListGroup>
                    </div>
                    <div className="d-flex align-items-center gap-5">
                      <span className="property-rating d-flex align-items-center gap-1">
                        <span className="icon">
                          <FaStar style={{ color: "var(--primary-color)" }} />
                        </span>
                        {avgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? (
                          "Not rated"
                        ) : (
                          <span>
                          ({reviews?.length}) 
                          </span>
                        )}
                      </span>
                      <span className="">
                        <span className="det-icon">
                          <FaCity />
                        </span>
                        {country}
                      </span>
                    </div>
                    <div className="property-details">
                      <span>
                        <span className="det-icon">
                          <FaMapMarkerAlt />
                        </span>
                        {country}
                      </span>
                      <span className=""> {country}</span>
                      <span className="">
                        <span className="det-icon">
                          <FaDollarSign />
                        </span>
                        <span className="price">{price}</span> /night
                      </span>
                      <span className=""></span>
                    </div>
                    <div className="property-details">
                      <span>Condition: {condition}</span>
                    </div>
                    <h5>Description</h5>
                    <p>{desc}</p>
                  </div>
                  {/* Hotel reviews preview section */}
                  <div className="property-info">
                    <div className="property-details-reviews mt-4">
                      <h4>Reviews ({reviews?.length} reviews)</h4>
                      <Form onSubmit={submitHandler}>
                        <div className="d-flex align-items-center gap-3 mb-4 rating-group ">
                          <span onClick={() => setHotelRating(1)}>
                            <FaStar />
                          </span>
                          <span onClick={() => setHotelRating(2)}>
                            <FaStar />
                          </span>
                          <span onClick={() => setHotelRating(3)}>
                            <FaStar />
                          </span>
                          <span onClick={() => setHotelRating(4)}>
                            <FaStar />
                          </span>
                          <span onClick={() => setHotelRating(5)}>
                            <FaStar />
                          </span>
                        </div>
                        <div className="review-input">
                          <input
                            type="text"
                            ref={reviewNote}
                            placeholder="Share your review"
                            required
                          />
                          <button className="btn primary__btn" type="submit">
                            Submit
                          </button>
                        </div>
                      </Form>
                      <ListGroup className="user-reviews">
                        {reviews?.map((review) => (
                          <div className="review-item">
                            <img src={avatar} alt="userAvatar" />
                            <div className="w-100">
                              <div className="user-review d-flex align-items-center justify-content-between">
                                <div>
                                  <h5>{review.username}</h5>
                                  <p>
                                    {new Date(
                                      review.createdAt
                                      ).toLocaleDateString(
                                      "en-US",
                                      options
                                    )}
                                  </p>
                                </div>
                                <span className="d-flex align-items-center">
                                {review.rating}<FaStar />
                                </span>
                              </div>
                              <h6>{review.reviewText}</h6>
                            </div>
                          </div>
                        )) }
                      </ListGroup>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg="4">
             <CarBooking car={cars}/>
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </>
  );
};

export default CarDetails;
