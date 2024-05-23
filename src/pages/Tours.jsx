import React, { useState, useEffect } from "react";
import CommonSections from "../shared/CommonSections";
import { Container, Row, Col } from "reactstrap";
import TourCard from "../shared/TourCard";
import SideSearch from "../components/search/SIdeSearch";
import { BASE_URL } from "../utils/config";
import useFetch from "../hooks/useFetch";
import MiniNav from '../components/nav/MiniNav'

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {
    data: tours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: tourCount } = useFetch(
    `${BASE_URL}/tours/search/getTourCounts`
  );
  useEffect(() => {
    const pages = Math.ceil(tourCount / 8);
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, tourCount, tours]);

  return (
    <div>
      <CommonSections title={"All Tours"} />
      <MiniNav/>
      <section>
        <Container>
          {loading && <h4 className="text-center pt-5">Loading...</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg="3" className="mb-1">
                <SideSearch />
              </Col>
              <Col lg="9">
                {tours?.map((tour) => (
                  <Col lg="12" className="mb-1" key={tour._id}>
                    <TourCard tour={tour} />
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
    </div>
  );
};

export default Tours;
