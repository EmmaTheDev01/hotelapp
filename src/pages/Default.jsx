import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/default.css"
const Default = () => {
    return (
        <div className='not-found mt-5'>
            <h1>404!</h1>
            <h2>Not Found</h2>
            <p>The page you are looking for does not exist</p>
            <h5>Try looking for:</h5>
            <ul>
                <Link to="home">
                    <li>Main</li>
                </Link>
                <Link to="hotels">
                    <li>Hotels</li>
                </Link>
                <Link to="tours">
                    <li>Tours</li>
                </Link>
                <Link to="dashboard">
                    <li>Dashboard</li>
                </Link>
                <Link to="about">
                    <li>About Us</li>
                </Link>
                <Link to="support">
                    <li></li>
                </Link>
                <Link to="about">
                    <li></li>
                </Link>
            </ul>
        </div>
    )
}

export default Default