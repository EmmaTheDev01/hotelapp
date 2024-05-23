import React from "react";
import { Col } from "reactstrap";
import FeaturedHotelCard from "../../shared/FeaturedHotelCard";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";
const FeaturedHotels = () => {
  const {
    data: featuredHotels,
    loading,
    error,
  } = useFetch(`${BASE_URL}/hotels/search/getFeaturedHotels`);
  console.log(featuredHotels);
  return (
    <>
      {loading && <h4>loading...</h4>}
      {error && <h4>{error}</h4>}
      {!loading &&
        !error &&
        featuredHotels?.map((hotel) => (
          <Col lg="3" className="mb-4" key={hotel._id}>
            <FeaturedHotelCard hotel={hotel} />
          </Col>
        ))}
    </>
  );
};

export default FeaturedHotels;
