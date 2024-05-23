import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Hotels from "../pages/Hotels";
import SearchResultList from "../pages/SearchResultList";
import Checkout from "../pages/Checkout";
import Tours from "../pages/Tours";
import About from "../pages/About";
import HotelDetails from "../pages/HotelDetails";
import ThankYou from "../pages/ThankYou";
import TourDetails from "../pages/TourDetails";
import CarRental from "../pages/CarRental";
import UserDashboard from "../pages/UserDashboard";
import Default from "../pages/Default";
import Support from "../pages/Support";
import Profile from "../pages/Profile";
import CarDetails from "../pages/CarDetails";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/hotels" element={<Hotels />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/cars" element={<CarRental />} />
      <Route path="/cars/:id" element={<CarDetails />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/hotels/:id" element={<HotelDetails />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/search" element={<SearchResultList />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/users/:id" element={<Profile />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={ <Default />} />
    </Routes>
  );
};

export default Router;
