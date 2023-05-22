import React, { useEffect } from "react";
import ListCards from "../Components/ListCards";
import "../App.css";
import "../Components/EventDetail/eventDetail.css";
import Cover from "../Components/Cover";
import ConfettiImg from "../assets/images/Confetti.png";
import flag1Img from "../assets/images/flag1.png";
import flag2Img from "../assets/images/flag2.png";
import { useAppDispatch } from "../app/store";
import { getEvents } from "../app/eventSlice";
import { onSnapshot } from "firebase/firestore";
import { eventCollection } from "../firebase/controller";

const Event = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    //get all events data from firebase
    onSnapshot(eventCollection, (snapshot) => {
      let data = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      //save event data to redux
      dispatch(getEvents(data));
    });
  }, [dispatch]);
  return (
    <Cover>
      <div
        style={{ backgroundImage: `url(${ConfettiImg})`, position: "relative" }}
      >
        <div className="flag flag1">
          <img src={flag1Img} alt="cờ 1" />
        </div>
        <div className="flag flag2">
          <img src={flag2Img} alt="cờ 2" />
        </div>
        <h2>Sự kiện nổi bật</h2>
        <div className="container wrapper">
          <ListCards type="event" />
        </div>
      </div>
    </Cover>
  );
};

export default Event;
