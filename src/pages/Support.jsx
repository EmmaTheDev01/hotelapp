import React from "react";
import { Container, Col, Row } from "reactstrap";
import "../styles/support.css"
const Support = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="support">
                            <h5>Call Us</h5>
                            <p>+238448433000</p>
                            <p>info@bookingrenders.com</p>
                            <p>Get instant support</p>
                            <p>Join our community</p>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="user-guide">
                            <h5>User guide</h5>
                            <p>
                                Welcome to bookingrenders - Your Ultimate Hotel Booking Web App
                                User Guide
                            </p>
                            <p>
                                Congratulations on choosing HotelStay, your go-to hotel booking
                                web app! This user guide will help you make the most of your
                                experience and navigate through all the fantastic features we
                                offer. Whether you're planning a business trip or a dream
                                vacation, HotelStay has got you covered. Let's get started!
                            </p>
                            <h3>1. Creating an Account</h3>
                            <h5>1.1. Sign Up</h5>
                            <p>To get started with HotelStay, you need to create an account.
                                Click on the "Sign Up" button and provide your email address, a
                                secure password, and some basic information about yourself. You
                                will receive a verification email to activate your account.</p>
                            <h5>1.2. Log In</h5>
                            <p> If you already have an account, click on the "Log In" button.
                                Enter your registered email address and password to access your
                                account and continue your hotel booking journey.</p>
                            <h3>2. Exploring Hotels</h3>
                            <h5>2.1. Search Hotels</h5>
                            <p>Once you are logged in, you can begin your hotel search. Use the
                                search bar to enter your destination, preferred dates, and the
                                number of guests. Click on the "Search" button to find available
                                hotels.</p>
                            <h5>2.2. Filter Options</h5>
                            <p> Refine your search results using our advanced filter options.
                                Filter hotels by price range, star ratings, amenities, and more to
                                find the perfect accommodation that matches your preferences.</p>
                            <h5>2.3. Hotel Details</h5>
                            <p> Click on a hotel to view more details about it. Explore room
                                options, read guest reviews, and see the hotel's amenities and
                                location on the map. You can also find pictures of the hotel and
                                rooms to get a better idea of what to expect.</p>
                            <h3>3. Booking a Room</h3>
                            <h5>3.1. Selecting Dates</h5>
                            <p>Once you've found a hotel you love, select your check-in and
                                check-out dates. The available room options and their prices will
                                be displayed for your chosen dates.</p>
                            <h5>3.2. Room Types</h5>
                            <p>Choose the type of room you'd like to book, such as a standard
                                room, suite, or deluxe room. Check the availability of the room
                                type and select the number of rooms you need.</p>
                            <h5> 3.3. Additional Preferences</h5>
                            <p> Have any special requests? Let us know! During the booking
                                process, you can specify any additional preferences, such as bed
                                type, smoking/non-smoking room, or specific amenities you need.</p>
                            <h3> 4. Managing Bookings</h3>
                            <h5> 4.1. View Bookings</h5>
                            <p> Keep track of all your current and past bookings in the "My
                                Bookings" section. Here, you can see booking details, payment
                                status, and cancellation options.</p>
                            <h5> 4.2. Modify Bookings</h5>
                            <p>Need to change your travel plans? As long as it's within the
                                hotel's cancellation policy, you can modify your bookings directly
                                from your account. Select the booking you want to modify and
                                follow the on-screen instructions.</p>
                            <h5>4.3. Cancel Bookings</h5>
                            <p>If you have to cancel a reservation, you can do so through the "My
                                Bookings" section. Remember to review the hotel's cancellation policy to avoid
                                paying any charges.</p>
                                <h3>5. Rewards and Discounts</h3>
                                <h5>5.1. Loyalty Program</h5>
                                <p>Enroll in our loyalty program to earn points for every booking you
                                    make. Accumulate points and unlock exclusive rewards, such as free
                                    room upgrades and discounts on future bookings.</p>
                                <h5>5.2. Promo Codes</h5>
                                <p> Keep an eye out for special promo codes and discounts. Enter these
                                    codes during the booking process to enjoy additional savings on
                                    your hotel stays.</p>
                                <h3>6. Contact and Support</h3>
                                <h5>6.1. Customer Support</h5>
                                <p> If you have any questions or face any issues, our customer support
                                    team is here to assist you. Reach out to us through the "Contact
                                    Us" page or via the provided helpline.</p>
                                <h5>6.2. FAQ</h5>
                                <p>Check out our Frequently Asked Questions (FAQ) section for quick
                                    answers to common queries. It covers various topics related to the
                                    app's usage and policies. Remember, HotelStay is all about
                                    providing you with a seamless and enjoyable hotel booking
                                    experience. We hope this user guide helps you make the most of our
                                    web app. Happy booking and have a fantastic stay!</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Support;
