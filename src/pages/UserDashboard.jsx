import React, { useContext } from "react";
import { Container, Col, Row } from "reactstrap";
import "../styles/dashboard.css";
import { AuthContext } from "../context/AuthContext";
import UserBookings from "../components/dashboard/UserBookings";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import HotelHost from "../components/host/HotelHost";
import CarHost from "../components/host/CarHost";
import TourHost from "../components/host/TourHost";
const UserDashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col lg="5" className="leftside">
            <h5>My Uploads</h5>
            <p>#000028289</p>
            <p>#889266000</p>
            <p>#009466000</p>
            <h6 className="new-feature">Coming soon</h6>
          </Col>
          <Col lg="6" className="middleside">
            <UserBookings />
          </Col>
          <h3>Host your Property</h3>
          <Col lg="12" className="rightside">
            {!user ? (
              <p className="mt-3 d-flex align-items-center justify-content-center text-danger">
                You need to login to become a Host!
              </p>
            ) : (
              <Tabs
                defaultActiveKey="home"
                transition={false}
                id="noanim-tab-example"
                className="mb-3 tabs"
              >
                <Tab eventKey="home" title="Accomodation">
                  <h5> Online Hosting Accomodation Instructions</h5>
                  <div className="instructions">
                    <h6> Step 1: Preparing Your Property</h6>
                    Clean and Organize: Thoroughly clean and organize the
                    property before taking any photos or listing it online.
                    Ensure that it's in a welcoming and presentable condition
                    for guests. <h6>Photography:</h6> Take high-quality photos of your
                    property, capturing all relevant rooms, amenities, and
                    unique features. Use natural light and ensure images are
                    well-lit and well-framed. Write a Detailed 
                    <h6>Description:</h6>
                    Craft a clear and accurate description of your property.
                    Highlight its key features, amenities, nearby attractions,
                    and any house rules guests should be aware of.
                    <h6> Step 2: Listing Creation</h6>
                    Choose a Hosting Platform: Select a reputable online
                    platform for hosting your property. Examples include Airbnb,
                    Vrbo, Booking.com, and HomeAway.
                    <h6> Create a Listing:</h6>
                    <h6> Upload your property photos.</h6>
                    Fill in all necessary details about the property, such as
                    location, number of guests it can accommodate, number of
                    bedrooms and bathrooms, amenities provided, etc. Set pricing
                    and availability based on factors like season, demand, and
                    local events. House Rules and Policies: Clearly outline
                    house rules related to smoking, pets, parties, quiet hours,
                    and any other important policies. Specify your cancellation
                    policy and any additional fees guests might incur. Profile
                    Verification: Complete your host profile by adding a
                    friendly photo, a brief introduction, and any relevant
                    verification steps required by the platform.
                    <h6> Step 3: Communication with Guests</h6>
                    Prompt Responses: Respond to inquiries, booking requests,
                    and messages from potential guests in a timely manner. A
                    quick response time can positively influence your hosting
                    reputation. Answering Questions: Be prepared to answer
                    questions about the property, the neighborhood, and any
                    specific requirements or concerns guests might have.
                    Check-in and Check-out Instructions: Provide clear
                    instructions on how guests can check in and check out,
                    including key retrieval, access codes, and any necessary
                    information about the property.
                    <h6> Step 4: Hosting Preparation</h6>
                    Welcome Guide: Create a welcome guide that provides guests
                    with essential information about the property, local
                    attractions, emergency contacts, and any other relevant
                    details. Cleaning and Maintenance: Ensure the property is
                    thoroughly cleaned and well-maintained before each guest's
                    arrival. Make sure amenities like linens, towels, and
                    toiletries are stocked. Contact Information: Provide guests
                    with a way to contact you during their stay for any
                    questions, concerns, or emergencies.
                    <h6> Step 5: Guest Interaction</h6>
                    Respect Privacy: Give guests space to enjoy their stay, but
                    also be available if they need assistance. Local Tips: Offer
                    recommendations for nearby restaurants, attractions, and
                    activities to enhance their experience.
                    <h6> Step 6: Post-Stay</h6>
                    <h6>Reviews: </h6>
                    After the guest's departure, encourage them to leave a
                    review. A positive review can boost your property's
                    visibility and credibility.
                    <h6>Feedback:</h6>
                    Pay attention to any feedback from guests and use it to
                    improve the hosting experience. By following these
                    instructions, you'll be well on your way to effectively
                    hosting your property online and providing a positive
                    experience for your guests. Remember that a successful
                    hosting experience often relies on clear communication,
                    attention to detail, and a welcoming environment for your
                    guests.
                  </div>
                  <div className="button">
                    <HotelHost />
                  </div>
                </Tab>
                <Tab eventKey="profile" title="Tour ">
                  <h5> Online Hosting Tour Instructions</h5>
                  <div className="instructions">
                    <h6> Step 1: Preparing Your Tour</h6>
                    Clean and Organize: Thoroughly clean and organize the
                    tour descriptions before taking any photos or listing it online.
                    Ensure that it's in a welcoming and presentable condition
                    for guests. 
                    <h6>Photography:</h6> Take high-quality photos of your
                    property, capturing all relevant rooms, amenities, and
                    unique features. Use natural light and ensure images are
                    well-lit and well-framed. Write a Detailed 
                    <h6>Description:</h6>
                    Craft a clear and accurate description of your property.
                    Highlight its key features, amenities, nearby attractions,
                    and any house rules guests should be aware of.
                    <h6> Step 2: Listing Creation</h6>
                    Choose a Hosting Platform: Select a reputable online
                    platform for hosting your property. Examples include Airbnb,
                    Vrbo, Booking.com, and HomeAway.
                    <h6> Create a Listing:</h6>
                    <h6> Upload your Tour photos.</h6>
                    Fill in all necessary details about the tour, such as
                    location, number of guests it can host, amenities provided,
                    etc. Set pricing and availability based on factors like
                    season, demand, and local events. House Rules and Policies:
                    Clearly outline guidelines related to smoking, pets,
                    parties, quiet hours, and any other important policies.
                    Specify your cancellation policy and any additional fees
                    guests might incur. Profile Verification: Complete your host
                    profile by adding a friendly photo, a brief introduction,
                    and any relevant verification steps required by the
                    platform.
                    <h6> Step 3: Communication with Guests</h6>
                    Prompt Responses: Respond to inquiries, booking requests,
                    and messages from potential guests in a timely manner. A
                    quick response time can positively influence your hosting
                    reputation. Answering Questions: Be prepared to answer
                    questions about the property, the neighborhood, and any
                    specific requirements or concerns guests might have.
                    Check-in and Check-out Instructions: Provide clear
                    instructions on how guests can check in and check out,
                    including key retrieval, access codes, and any necessary
                    information about the property.
                    <h6> Step 4: Hosting Preparation</h6>
                    Welcome Guide: Create a welcome guide that provides guests
                    with essential information about the property, local
                    attractions, emergency contacts, and any other relevant
                    details. Cleaning and Maintenance: Ensure the property is
                    thoroughly cleaned and well-maintained before each guest's
                    arrival. Make sure amenities like linens, towels, and
                    toiletries are stocked. Contact Information: Provide guests
                    with a way to contact you during their stay for any
                    questions, concerns, or emergencies.
                    <h6> Step 5: Guest Interaction</h6>
                    Respect Privacy: Give guests space to enjoy their stay, but
                    also be available if they need assistance. Local Tips: Offer
                    recommendations for nearby restaurants, attractions, and
                    activities to enhance their experience.
                    <h6> Step 6: Post-Stay</h6>
                    <h6>Reviews: </h6>
                    After the guest's departure, encourage them to leave a
                    review. A positive review can boost your property's
                    visibility and credibility.
                    <h6>Feedback:</h6>
                    Pay attention to any feedback from guests and use it to
                    improve the hosting experience. By following these
                    instructions, you'll be well on your way to effectively
                    hosting your property online and providing a positive
                    experience for your guests. Remember that a successful
                    hosting experience often relies on clear communication,
                    attention to detail, and a welcoming environment for your
                    guests.
                  </div>
                  <div className="button">
                    <TourHost />
                  </div>
                </Tab>
                <Tab eventKey="contact" title="Carrental">
                  <h5> Online Renting Cars Instructions</h5>
                  <div className="instructions">
                    <h6> Step 1: Preparing Your Car</h6>
                    Clean and Organize: Thoroughly clean and organize the
                    car before taking any photos or listing it online.
                    Ensure that it's in a welcoming and presentable condition
                    for guests. <h6>Photography:</h6> Take high-quality photos of your
                    car, capturing all relevant rooms, amenities, and
                    unique features. Use natural light and ensure images are
                    well-lit and well-framed. Write a Detailed 
                    <h6>Description:</h6>
                    Craft a clear and accurate description of your property.
                    Highlight its key features, amenities, nearby attractions,
                    and any house rules guests should be aware of.
                    <h6> Step 2: Listing Creation</h6>
                    Choose a Hosting Platform: Select a reputable online
                    platform for hosting your property. Examples include Airbnb,
                    Vrbo, Booking.com, and HomeAway.
                    <h6> Create a Listing:</h6>
                    <h6> Upload your Car photos.</h6>
                    Fill in all necessary details about the car, such as
                    location, number of
                    condition and model, etc. Set pricing
                    and availability based on factors like season, demand, and
                    local events. instructions and Policies: Clearly outline
                    house rules related to smoking, pets, parties, quiet hours,
                    and any other important policies. Specify your cancellation
                    policy and any additional fees guests might incur. Profile
                    Verification: Complete your host profile by adding a
                    friendly photo, a brief introduction, and any relevant
                    verification steps required by the platform.
                    <h6> Step 3: Communication with Guests</h6>
                    Prompt Responses: Respond to inquiries, booking requests,
                    and messages from potential guests in a timely manner. A
                    quick response time can positively influence your hosting
                    reputation. Answering Questions: Be prepared to answer
                    questions about the property, the neighborhood, and any
                    specific requirements or concerns guests might have.
                    Check-in and Check-out Instructions: Provide clear
                    instructions on how guests can check in and check out,
                    including key retrieval, access codes, and any necessary
                    information about the property.
                    <h6> Step 4: Hosting Preparation</h6>
                    Welcome Guide: Create a welcome guide that provides guests
                    with essential information about the property, local
                    attractions, emergency contacts, and any other relevant
                    details. Cleaning and Maintenance: Ensure the property is
                    thoroughly cleaned and well-maintained before each guest's
                    arrival. Make sure amenities like linens, towels, and
                    toiletries are stocked. Contact Information: Provide guests
                    with a way to contact you during their stay for any
                    questions, concerns, or emergencies.
                    <h6> Step 5: Guest Interaction</h6>
                    Respect Privacy: Give guests space to enjoy their stay, but
                    also be available if they need assistance. Local Tips: Offer
                    recommendations for nearby restaurants, attractions, and
                    activities to enhance their experience.
                    <h6> Step 6: Post-Stay</h6>
                    <h6>Reviews: </h6>
                    After the guest's departure, encourage them to leave a
                    review. A positive review can boost your property's
                    visibility and credibility.
                    <h6>Feedback:</h6>
                    Pay attention to any feedback from guests and use it to
                    improve the hosting experience. By following these
                    instructions, you'll be well on your way to effectively
                    hosting your property online and providing a positive
                    experience for your guests. Remember that a successful
                    hosting experience often relies on clear communication,
                    attention to detail, and a welcoming environment for your
                    guests.
                  </div>
                  <div className="button">
                    <CarHost />
                  </div>
                </Tab>
              </Tabs>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserDashboard;
