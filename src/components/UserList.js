
import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import axios from "axios";
import Cards from "./Cards";

const UserList = () => {
  const [listOfUSer, setListOfUser] = useState([]);

  const listStyle = {
    display: "flex",
    flexWrap: "wrapflex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const fetchUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setListOfUser(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={listStyle}>
       <Row xs={1} md={2} className="g-4">
      {listOfUSer.map((el, i) => (
        <Cards user={el} key={i} />
      ))}
      </Row>
      <div style={{ marginLeft: "2%" }}>

      </div>
    </div>
  );
};

export default UserList;