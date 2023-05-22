import { Col, Row } from "antd";
import React, { useRef, useState } from "react";
import CardInfo from "../CardInfo";
import paymentImg from "../../assets/images/image 3.png";
import "../../App.css";
import "./listCard.css";
import { eventDetailProp, eventProp } from "../../propType";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useAppSelector } from "../../app/store";

type listCardProps = {
  type: "payment" | "event";
};

const ListCards = ({ type }: listCardProps) => {
  const paymentList: eventProp[] | eventDetailProp[] = [
    {
      id: "1",
      mainImage: paymentImg,
      title: "ALT20210501",
      address: "",
      date: "30/05/2021 - 01/06/2021",
      price: 0,
    },
    {
      id: "2",
      mainImage: paymentImg,
      title: "ALT20210501",
      address: "",
      date: "30/05/2021 - 01/06/2021",
      price: 0,
    },
    {
      id: "3",
      mainImage: paymentImg,
      title: "ALT20210501",
      address: "",
      date: "30/05/2021 - 01/06/2021",
      price: 0,
    },
    {
      id: "4",
      mainImage: paymentImg,
      title: "ALT20210501",
      address: "",
      date: "30/05/2021 - 01/06/2021",
      price: 0,
    },
  ];

  const dataEvent = useAppSelector((state) => state.events);

  const listRef = useRef<HTMLDivElement>(null!);
  const [slideNumber, setSlideNumber] = useState(0);
  const handleClickArrow = (direction: string) => {
    let distance = listRef.current?.getBoundingClientRect().x - 120;
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
        {(type === "event" ? dataEvent.events : paymentList).map((card) => (
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
