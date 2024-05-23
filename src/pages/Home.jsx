import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap'
import heroVid from '../assets/images/2.mp4'
import heroImg01 from '../assets/images/11.jpg'
import heroImg03 from '../assets/images/12.jpg'
import SearchBar from '../shared/SearchBar'
import Subtitle from '../shared/Subtitle'
import ServiceList from '../services/ServiceList'
import FeaturedHotels from '../components/Featured-hotels/FeaturedHotels'
import SimpleSlider from '../components/slider/SimpleSlider'
import AllCities from '../components/Cities/AllCities'
const Home = () => {


  return (
    <div>
      {/* Hero section of a web */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className='hero__content'>
                <div className='hero__subtitle d-flex align-items-center'>
                  <Subtitle subtitle={'Enjoy your infinite confort'} />

                </div>
                <h1>Dwell within luxurious<span className='highlight'> Possibilities</span></h1>
                <p>Join our community of explorers and have the best experience of seeing beyond perfect, We help you discover your
                  perfect stays and homes. Not only that you find from our platform, you can als share your experience or your own property.
                  There is no limit to what you can do with us!</p>
              </div>
            </Col>
            <Col lg='2'>

              {/* Hero images section */}
              <div className='hero-img-box '>
                <img src={heroImg01} alt='' controls />
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero-img-box mt-4'>
                <video width="320" height="240" controls >
                  <source src={heroVid} type="video/mp4" />
                </video>
              </div>

            </Col>
            <Col lg='2'>
              <div className='hero-img-box mt-5'>
                <img src={heroImg03} alt='' />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* Beggining of featured services  */}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className='services__subtitle'>
                What we offer
              </h5>
              <h3 className='services__title'>We deliver</h3>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* Begginning of cities browse */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-1'>
              <Subtitle subtitle={'Cities'} />
              <h3 className='featured-title'>Popular cities</h3>
            </Col>
            <AllCities/>
          </Row>
        </Container>
      </section>
      {/* Beginning of featured hotels section */}
      <section>
        <Container className='d-flex align-items-center justify-content-between'>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Featured hotels'} />
              <h3 className='featured-title'>Our Featured Hotels</h3>
            </Col>
            <div className='d-flex align-items-center justify-content-center gap-2'>
            <FeaturedHotels />
            </div>
          </Row>
        </Container>
      </section>
      {/* Slider of amenities section */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Your Choice'} />
              <h3 className='featured-title'>Browse from your choice</h3>
            </Col>
            <SimpleSlider />
          </Row>
        </Container>
      </section>



    </div>
  )
}

export default Home