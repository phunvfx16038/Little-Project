import { Card } from "antd";
import React from "react";
import { eventDetailProp } from "../../propType";
import { BiCalendar } from "react-icons/bi";
import "./cardInfo.css";
import { Link } from "react-router-dom";
import tick from "../../assets/images/tick 1.png";
type cardProp = {
  card: eventDetailProp;
  type: "payment" | "event";
};

const CardInfo = ({ card, type }: cardProp) => {
  const formatter = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "VND",
  });

  return (
    <>
      {type === "event" ? (
        <Card
          hoverable
          style={{ width: 250, textAlign: "center" }}
          cover={<img alt="example" src={card.mainImage} />}
        >
          <h3 className="main-title">{card.title}</h3>
          <p className="address">{card.address}</p>
          <p className="time">
            <span className="calendar">
              <BiCalendar />
            </span>
            {card.date}
          </p>
          <p className="price">{formatter.format(card.price)}</p>
          <Link to={`/event/${card.id}`} state={card}>
            <button className="btn-detail">Xem chi tiết</button>
          </Link>
        </Card>
      ) : (
        <Card
          hoverable
          style={{ width: 240, textAlign: "center" }}
          cover={
            <img
              alt="example"
              src={card.mainImage}
              style={{ width: "150px", margin: "25px auto" }}
            />
          }
        >
          <h3 className="main-title">{card.title}</h3>
          <p className="ticket-gate">Vé cổng</p>
          <p className="dash">---</p>
          <p>Ngày sử dụng: 31/05/2021</p>
          <p className="check-icon">
            <img src={tick} alt="check" />
          </p>
        </Card>
      )}
    </>
  );
};

export default CardInfo;
