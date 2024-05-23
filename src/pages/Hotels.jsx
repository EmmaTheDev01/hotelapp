import React, { useState, useEffect } from "react";
import CommonSections from "../shared/CommonSections";
import HotelCard from "../shared/HotelCard";
import { Col, Container, Row } from "reactstrap";
import "../styles/hotels.css";
import SideSearch from "../components/search/SIdeSearch";

import { BASE_URL } from "../utils/config";
import useFetch from "../hooks/useFetch";
import MiniNav from "../components/nav/MiniNav";

const Hotels = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {
    data: hotels,
    loading,
    error,
  } = useFetch(`${BASE_URL}/hotels?page=${page}`);
  const { data: hotelCount } = useFetch(
    `${BASE_URL}/hotels/search/getHotelCounts`
  );
  useEffect(() => {
    const pages = Math.ceil(hotelCount / 8);
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, hotelCount, hotels]);

  return (
    <>
      <CommonSections title={"Explore Hotels"} />
      <MiniNav />
      <section className="pt-1">
        <Container>
          {loading && <h4 className="text-center pt-5">Loading...</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg="3" className="mb-1">
                <SideSearch />
              </Col>
              <Col lg="9">
                {hotels?.map((hotel) => (
                  <Col lg="12" className="mb-1" key={hotel._id}>
                    <HotelCard hotel={hotel} />
                  </Col>
                ))}
                <div className="pagination d-flex align-items-center justify-content-center mt-3 gap-3">
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? "active-page" : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </>
  );
};

export default Hotels;
