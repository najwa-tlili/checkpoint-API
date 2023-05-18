
import React from "react";
import "../App.css";
import { Card } from "react-bootstrap";

const Cards = ({ user }) => {
  const { name, email, address, website} = user;
  const { street, suite, city, zipcode } = address;


  return (
    <div>
      <Card
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "600px",
          borderRadius: "25px",
        }}
      >
        <div style={{ width: "50%" }}>
          <br />
          <Card.Text>
            <span style={{color:"purple"}}>email :</span> {email}
          </Card.Text>
        
          <Card.Text>
            <span style={{color:"purple"}}>webSite :</span> {website}
          </Card.Text>
        </div>
        <Card.Body>
          <Card.Title style={{ color: "blue" }}>{name}</Card.Title>
          <Card.Text>
            <span style={{color:"purple"}}>addrtess :</span> <br /> {street}, {suite}, {city} {zipcode}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;