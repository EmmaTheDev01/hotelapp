import React from "react";
const col = {

  padding: "10px",
}
const p = {
  color: "var(--secondary-color)",
  fontSize: "13px",
  padding: "1px",
  margin: "7px",
  cursor: "pointer",
  textAlign: "left",
};

const FooterWhite = () => {
  return (

    <>
      <div
        style={{
          width: "80%",
          margin: "auto",
          backgroundColor: "white",
          padding: "10px",
          overflow:"hidden",
          display: "flex",
          flexWrap:"wrap",
          justifyContent: "space-between",
        }}
      >
        <div style={col}>
          <p style={p}>Countries</p>
          <p style={p}>Regions</p>
          <p style={p}>Cities</p>
          <p style={p}>Hotels</p>
          <p style={p}>Places of interests</p>
        </div>
        <div style={col}>
          <p style={p}>Homes</p>
          <p style={p}>Apartments</p>
          <p style={p}>Resorts</p>
          <p style={p}>Vilas</p>
          <p style={p}>Guest houses</p>
        </div>
        <div style={col}>
          <p style={p}>Unique places to stay</p>
          <p style={p}>Tours</p>
          <p style={p}>Reviews</p>
          <p style={p}>Travel articles</p>
          <p style={p}>Travel communities</p>
        </div>
        <div style={col}> 
          <p style={p}>Car rental</p>
          <p style={p}>Become a host</p>
          <p style={p}>About</p>
          <p style={p}>Contacts</p>
          <p style={p}>Get Support</p>
        </div>
        <div style={col}>
          <p style={p}>Safety Resource Center</p>
          <p style={p}>Investor relations</p>
          <p style={p}>Terms & conditions</p>
          <p style={p}>Partner dispute</p>
          <p style={p}>Privacy & cookie statement</p>
          
        </div>
      </div>

      <div
        style={{
          width: "100%",
          padding: "1rem",
          margin: "auto",
          textAlign: "center",
          fontSize: "13px",
        }}
      >
        Copyright © 2023 bookingrenders.com. All rights reserved.
      </div>
    </>
  );
};

export default FooterWhite;
