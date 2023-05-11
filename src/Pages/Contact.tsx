import React from "react";
import bgImage from "../assets/images/bg.png";
import ContactInfo from "../Components/ContactInfo";

const Contact = () => {
  const style = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: "40px 20px",
  };
  return (
    <div style={style}>
      <ContactInfo />
    </div>
  );
};

export default Contact;
