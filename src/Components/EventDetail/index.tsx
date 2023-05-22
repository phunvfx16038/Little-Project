import React from "react";
import "../../App.css";
import "./eventDetail.css";
import { Col, Row } from "antd";
import ConfettiImg from "../../assets/images/Confetti.png";
import flag1Img from "../../assets/images/flag1.png";
import flag2Img from "../../assets/images/flag2.png";
import { BiCalendar } from "react-icons/bi";
import Box from "../Box";
import { useLocation } from "react-router-dom";

const EventDetail = () => {
  const location = useLocation();
  const eventDetail = location.state;
  return (
    <div
      style={{ backgroundImage: `url(${ConfettiImg})`, position: "relative" }}
    >
      <div className="flag flag1">
        <img src={flag1Img} alt="cờ 1" />
      </div>
      <div className="flag flag2">
        <img src={flag2Img} alt="cờ 2" />
      </div>
      <h2 style={{ marginTop: "50px" }}>{eventDetail.title}</h2>
      <div className="container wrapper pl-80">
        <Box>
          <Row gutter={[24, 8]}>
            <Col span={8}>
              <div className="image-cover">
                <img src={eventDetail.mainImage} alt="hình ảnh" />
              </div>
              <p className="address"> {eventDetail.address}</p>
              <p className="time">
                <span className="calendar">
                  <BiCalendar />
                </span>
                {eventDetail.date}
              </p>
              <p className="price"> {eventDetail.price} VNĐ</p>
            </Col>
            <Col span={16}>
              <Row gutter={[32, 8]}>
                <Col span={8}>
                  <p>{eventDetail.contentDetail1}</p>
                </Col>
                <Col span={8}>
                  <img src={eventDetail.imageDetail1} alt="hình ảnh" />
                  <p style={{ marginTop: "15px" }}>
                    {eventDetail.contentDetail2}
                  </p>
                </Col>
                <Col span={8}>
                  <p style={{ marginBottom: "15px" }}>
                    {eventDetail.contentDetail3}
                  </p>
                  <img src={eventDetail.imageDetail2} alt="hình ảnh" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Box>
      </div>
    </div>
  );
};

export default EventDetail;
