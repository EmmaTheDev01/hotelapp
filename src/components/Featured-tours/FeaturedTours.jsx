import React from "react";
import { Col } from "reactstrap";
import FeaturedTourCard from "../../shared/FeaturedTourCard";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";
const FeaturedHotels = () => {
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`${BASE_URL}tours/search/getFeaturedTours`);
  console.log(featuredTours);
  return (
    <>
      {loading && <h4>loading...</h4>}
      {error && <h4>{error}</h4>}
      {!loading &&
        !error &&
        featuredTours?.map((tour) => (
          <Col lg="3" className="mb-4" key={tour._id}>
            <FeaturedTourCard hotel={tour} />
          </Col>
        ))}
    </>
  );
};

export default FeaturedHotels;
