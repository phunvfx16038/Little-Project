import React from "react";
import Cover from "../Components/Cover";
import Box from "../Components/Box";
import ListCards from "../Components/ListCards";
import alvinImage from "../assets/images/Alvin_Arnold_Votay1 1.png";

const PaymentSuccess = () => {
  const pageStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "20px 75px 10px 50px",
  };

  return (
    <Cover>
      <h2>Thanh toán thành công</h2>
      <div className="container wrapper" style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            left: "-110px",
            bottom: 0,
            zIndex: 200,
            width: "20%",
          }}
        >
          <img src={alvinImage} alt="alvin vo tay" />
        </div>
        <Box style={{ width: "100%" }}>
          <ListCards type="payment" />
          <div style={pageStyle}>
            <p>Số lượng: 12 vé</p>
            <p style={{ opacity: "0.6" }}>Trang 1/3</p>
          </div>
        </Box>
      </div>
    </Cover>
  );
};

export default PaymentSuccess;
