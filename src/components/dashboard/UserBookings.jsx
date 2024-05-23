import React from 'react'
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../utils/config";
import useFetch from "../../hooks/useFetch";
import '../../styles/dashboard.css';
const UserBookings = () => {
  const { id } = useParams();
  const { data: bookings } = useFetch(`${BASE_URL}/bookings/${id}`);
  const { userId, hotelName, bookingDate, guestNumber, timeOut } = bookings;

  return (
    <div>
      <h5 className="d-flex align-items-center justify-content-between">My Bookings</h5>
      <div className="booking-card">
        <h5 className="booking-card-title">You booked: {hotelName}</h5>
        <p>Date In: {bookingDate}</p>
        <p>User details: {userId}</p>
        <p>Number of guests: {guestNumber}</p>
        <p>Date Out: {timeOut}</p>
      </div>
    </div>

  )
}


export default UserBookings