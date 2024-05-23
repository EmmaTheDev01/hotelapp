import React, { useState, useEffect } from 'react'
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";
import CitiesGallery from '../../shared/CitiesGallery';
import { Col } from 'reactstrap';
import "../../styles/home.css"
const AllCities = () => {
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const { data: cities, loading, error, } = useFetch(`${BASE_URL}/cities?page=${page}`);
    const { data: CityCount } = useFetch(`${BASE_URL}/cities/search/getCityCounts`);

    useEffect(() => {

        const pages = Math.ceil(CityCount / 9);
        setPageCount(pages);
    }, [page, CityCount, cities]);
    return (
        <>
            {loading && <h4>loading...</h4>}
            {error && <h4>{error}</h4>}
            {!loading && !error &&
                cities?.map((gallery) => (
                    <Col lg="4"  key={gallery._id}>
                        <CitiesGallery gallery={gallery} />
                    </Col>
                ))}
                <div className='index d-flex align-items-center justify-content-center gap-3'>
                {[...Array(pageCount).keys()].map(number => (
                  <span key={number} onClick={() => setPage(number)} className={page === number ? 'active-index' : ''}> {number + 1}</span>
                ))}
              </div>
        </>
    )
}

export default AllCities