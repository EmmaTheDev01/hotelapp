import React from "react";
import "./mininav.css";
import { Link } from "react-router-dom";
const MiniNav = () => {
  return (
    <div>
      <ul className="mt-3 d-flex align-items-center justify-content-center">
        <Link to="/hotels">
          <li className="navlink">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path d="M20.5,5h-7A3.5,3.5,0,0,0,10,8.5V13H3V2H0V22H3V19H21v3h3V8.5A3.5,3.5,0,0,0,20.5,5ZM13,13V8.5a.5.5,0,0,1,.5-.5h7a.5.5,0,0,1,.5.5V13ZM6.5,12A2.5,2.5,0,1,1,9,9.5,2.5,2.5,0,0,1,6.5,12Z" />
            </svg>
            Hotels
          </li>
        </Link>
        <Link to="/cars">
          <li className="navlink">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path d="M20.389,3.3A3.512,3.512,0,0,0,17.1,1H6.9A3.493,3.493,0,0,0,3.628,3.263L1.469,8.7A24.288,24.288,0,0,0,0,17.032V20H3v3H7V20H17v3h4V20h3V17.032a24.349,24.349,0,0,0-1.484-8.375ZM17,15.5h0A1.5,1.5,0,0,1,18.5,14h0A1.5,1.5,0,0,1,20,15.5h0A1.5,1.5,0,0,1,18.5,17h0A1.5,1.5,0,0,1,17,15.5ZM4.271,9.765,6.432,4.329A.5.5,0,0,1,6.9,4H17.1a.52.52,0,0,1,.485.37l2.128,5.354c.153.421.285.847.206,1.276H3.878C4,10.584,4.124,10.171,4.271,9.765ZM5.5,17h0A1.5,1.5,0,0,1,4,15.5H4A1.5,1.5,0,0,1,5.5,14h0A1.5,1.5,0,0,1,7,15.5H7A1.5,1.5,0,0,1,5.5,17Z" />
            </svg>
            Cars
          </li>
        </Link>
        <Link to="/tours">
          <li className="navlink">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Isolation_Mode"
              data-name="Isolation Mode"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,21V16.693a.875.875,0,0,0-.875-.875H6.75L3,12.072c0-.024,0-.048,0-.072A8.989,8.989,0,0,1,17.6,4.967l-.351.351H13.909V9.136H11.045V12.08a.875.875,0,0,0,.875.875h5.807V13.9a5.976,5.976,0,0,0,1.3,3.712A8.983,8.983,0,0,1,12,21Z" />
            </svg>
            Tours
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default MiniNav;
