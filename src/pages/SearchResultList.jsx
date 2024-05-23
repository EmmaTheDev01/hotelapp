import React, { useState } from 'react'
import CommonSections from '../shared/CommonSections'
import { Row, Container, Col } from 'reactstrap'
import { useLocation } from 'react-router-dom'
import HotelCard from '../shared/HotelCard'
import SIdeSearch from '../components/search/SIdeSearch'

const SearchResultList = () => {

  const location = useLocation();
  const [data] = useState(location.state)
  console.log(data)



  return (
    <>
      <CommonSections title={'Search Results'} />
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <SIdeSearch />
            </Col>

            {
              data.length === 0 ? <h4 className='text-center'>No such data</h4>
                : data?.map(hotel =>
                  <col lg='9' className='mb-4' key={hotel._id}>
                    <HotelCard tour={hotel} />
                  </col>)
            }

          </Row>
        </Container>
      </section>
    </>
  )
}

export default SearchResultList