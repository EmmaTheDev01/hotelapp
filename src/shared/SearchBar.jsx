import React from "react";
import { Form } from "reactstrap";
import "./search-bar.css";
import { Col, FormGroup } from "reactstrap";
import { useRef } from "react";
import { FaMapMarkerAlt, FaRoad, FaSearch } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { BASE_URL } from "../utils/config";
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const cityRef = useRef("");
  const distanceRef = useRef(0);
  const titleRef = useRef("");
  const navigate = useNavigate()

  const searchHandler = async () => {
    const city = cityRef.current.value;
    const distance = distanceRef.current.value;
    const title = titleRef.current.value;

    const res = await fetch(`${BASE_URL}hotels/search/getHotelBySearch?city=${city}&distance=${distance}&title=${title}`);
    if (!res.ok) alert('Something went wrong!');
    const result = await res.json()
    navigate(`/hotels/search?city=${city}&distance=${distance}&title=${title}`,
      { state: result.data })
  };
  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group full form__group-fast">
            <span>
              <FaMapMarkerAlt />
            </span>
            <div>
              <h6>Location</h6>
              <input
                type="text"
                placeholder="City or country"
                ref={cityRef}
                required
              />
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <FaRoad />
            </span>
            <div>
              <h6>Distance</h6>
              <input
                type="number"
                placeholder="0 Km"
                ref={distanceRef}
                required
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form__group ">
            <span>
              <HiUserGroup />
            </span>
            <div>
              <h6>Name</h6>
              <input type="text" placeholder="search" ref={titleRef} required/>
            </div>
          </FormGroup>
          <span className="search__icon" type="submit" onClick={searchHandler}>
            <span className="search">
              <FaSearch />
            </span>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
