import React from "react";
import ListCards from "../Components/ListCards";
import "../App.css";
import Cover from "../Components/Cover";
const Event = () => {
  return (
    <Cover>
      <h2>Sự kiện nổi bật</h2>
      <div className="container wrapper">
        <ListCards type="event" />
      </div>
    </Cover>
  );
};

export default Event;
