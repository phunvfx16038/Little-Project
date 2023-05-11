import React from "react";
import bgImage from "../assets/images/bg.png";
import PaymentDetail from "../Components/PaymentDetail";
const Payment = () => {
  const style = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: "40px 20px",
  };
  return (
    <div style={style}>
      <PaymentDetail />
    </div>
  );
};

export default Payment;
