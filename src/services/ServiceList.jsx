import React from 'react'
import { Col } from 'reactstrap'
import ServiceCard from './ServiceCard'

const ServiceList = () => {
    const servicesData = [
        {
            imgUrl: "https://img.icons8.com/ios/50/000000/5-star-hotel--v2.png",
            title: "Hotel Booking",
            desc: "We provide platform for booking and sharing hotel ideas.",
        },
        {
            imgUrl: "https://img.icons8.com/ios/50/passenger-with-baggage.png",
            title: "Tour Booking",
            desc: "We provide platform for booking and sharing hotel ideas.",
        },
        {
            imgUrl: "https://img.icons8.com/ios/50/meeting.png",
            title: "Vendor Services",
            desc: "We provide platform for booking and sharing hotel ideas.",
        },

    ]
    return (
        <>
            {
                servicesData.map((item, index) =>
                    <Col lg='3' key={index}>

                        <ServiceCard item={item} />
                    </Col>
                )
            }
        </>
    )
}

export default ServiceList