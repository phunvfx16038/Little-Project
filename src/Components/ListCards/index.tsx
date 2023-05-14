import { Col, Row } from "antd";
import React, { useRef, useState } from "react";
import CardInfo from "../CardInfo";
import eventImg from "../../assets/images/Rectangle 1.png";
import paymentImg from "../../assets/images/image 3.png";
import "../../App.css";
import "./listCard.css";
import { eventProp } from "../../propType";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

type listCardProps = {
  type: "payment" | "event";
};

const ListCards = ({ type }: listCardProps) => {
  const eventList: eventProp[] = [
    {
      id: 1,
      image: eventImg,
      title: "Sự kiện 1",
      address: "Đầm sen park",
      time: "30/05/2021 - 01/06/2021",
      price: 25000,
    },
    {
      id: 2,
      image: eventImg,
      title: "Sự kiện 2",
      address: "Đầm sen park",
      time: "30/05/2021 - 01/06/2021",
      price: 25000,
    },
    {
      id: 3,
      image: eventImg,
      title: "Sự kiện 3",
      address: "Đầm sen park",
      time: "30/05/2021 - 01/06/2021",
      price: 50000,
    },
    {
      id: 4,
      image: eventImg,
      title: "Sự kiện 4",
      address: "Đầm sen park",
      time: "30/05/2021 - 01/06/2021",
      price: 55000,
    },
    {
      id: 5,
      image: eventImg,
      title: "Sự kiện 1",
      address: "Đầm sen park",
      time: "30/05/2021 - 01/06/2021",
      price: 25000,
    },
    {
      id: 6,
      image: eventImg,
      title: "Sự kiện 2",
      address: "Đầm sen park",
      time: "30/05/2021 - 01/06/2021",
      price: 25000,
    },
    {
      id: 7,
      image: eventImg,
      title: "Sự kiện 3",
      address: "Đầm sen park",
      time: "30/05/2021 - 01/06/2021",
      price: 50000,
    },
    {
      id: 8,
      image: eventImg,
      title: "Sự kiện 4",
      address: "Đầm sen park",
      time: "30/05/2021 - 01/06/2021",
      price: 55000,
    },
  ];

  const paymentList: eventProp[] = [
    {
      id: 1,
      image: paymentImg,
      title: "ALT20210501",
      address: "",
      time: "30/05/2021 - 01/06/2021",
      price: 0,
    },
    {
      id: 2,
      image: paymentImg,
      title: "ALT20210501",
      address: "",
      time: "30/05/2021 - 01/06/2021",
      price: 0,
    },
    {
      id: 3,
      image: paymentImg,
      title: "ALT20210501",
      address: "",
      time: "30/05/2021 - 01/06/2021",
      price: 0,
    },
    {
      id: 4,
      image: paymentImg,
      title: "ALT20210501",
      address: "",
      time: "30/05/2021 - 01/06/2021",
      price: 0,
    },
    {
      id: 5,
      image: paymentImg,
      title: "ALT20210501",
      address: "",
      time: "30/05/2021 - 01/06/2021",
      price: 0,
    },
    {
      id: 6,
      image: paymentImg,
      title: "ALT20210501",
      address: "",
      time: "30/05/2021 - 01/06/2021",
      price: 0,
    },
    {
      id: 7,
      image: paymentImg,
      title: "ALT20210501",
      address: "",
      time: "30/05/2021 - 01/06/2021",
      price: 0,
    },
    {
      id: 8,
      image: paymentImg,
      title: "ALT20210501",
      address: "",
      time: "30/05/2021 - 01/06/2021",
      price: 0,
    },
  ];

  const listRef = useRef<HTMLDivElement>(null!);
  const [slideNumber, setSlideNumber] = useState(0);
  const handleClickArrow = (direction: string) => {
    let distance = listRef.current?.getBoundingClientRect().x - 120;
    console.log(listRef.current?.getBoundingClientRect().x);
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${270 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 4) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-270 + distance}px)`;
    }
  };

  return (
    <div className="px-30 list-card">
      <span className="arrow-left" onClick={() => handleClickArrow("left")}>
        <BiLeftArrow />
      </span>
      <Row
        gutter={16}
        style={{ width: "100%" }}
        className="cover-list"
        ref={listRef}
      >
        {(type === "event" ? eventList : paymentList).map((card) => (
          <Col span={6} key={card.id}>
            <CardInfo card={card} type={type} />
          </Col>
        ))}
      </Row>
      <span className="arrow-right" onClick={() => handleClickArrow("right")}>
        <BiRightArrow />
      </span>
    </div>
  );
};

export default ListCards;
