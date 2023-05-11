import React from "react";
import bgImage from "../assets/images/bg.png";
import EventDetail from "../Components/EventDetail";
const Detail = () => {
  const style = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: "40px 20px",
  };
  return (
    <div style={style}>
      <EventDetail />
    </div>
  );
};

export default Detail;
