import React from "react";
import "../../App.css";
import "./bookticket.css";
import midImg from "../../assets/images/Vector.png";
import lisaImg from "../../assets/images/Lisa_Arnold_Lay_Do_F2 3.png";
import pinkBalloon from "../../assets/images/18451 [Converted]-06 1.png";
import balloon1 from "../../assets/images/balloon1.png";
import yellowBalloon from "../../assets/images/18451 [Converted]-05 1.png";
import { AiFillStar } from "react-icons/ai";
import FormTickets from "../FormTickets";
import Box from "../Box";

const BookTickets = () => {
  const infoLists = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ];
  const contentLists = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut posuere ex facilisis.",
    "Suspendisse iaculis libero lobortis condimentum gravida. Aenean auctor iaculis risus, lobortis molestie lectus consequat a.",
  ];
  return (
    <div className="container wrapper" style={{ position: "relative" }}>
      <div className="lisa-img">
        <img src={lisaImg} alt="Lisa img" />
      </div>
      <div className="balloon pink-balloon">
        <img src={pinkBalloon} alt="pink balloon" />
      </div>
      <Box style={{ width: "60%" }} className="pb-70">
        {contentLists.map((content, index) => (
          <div key={index} className="content">
            {content}
          </div>
        ))}
        <ul className="list-content">
          {infoLists.map((infoList, index) => (
            <li key={index}>
              <AiFillStar className="star-icon" />
              <span>{infoList}</span>
            </li>
          ))}
        </ul>
        <div className="vector">
          <img src={midImg} alt="vector" />
        </div>
      </Box>
      <Box
        style={{ paddingBottom: "15px", marginLeft: "12px", width: "33.33%" }}
      >
        <div className="wrap-your-ticket">
          <div className="your-ticket">Vé của bạn</div>
        </div>
        <FormTickets />
      </Box>
      <div className="balloon yellow-balloon">
        <img src={yellowBalloon} alt="yellow balloon" />
      </div>
      <div className="balloon balloon1">
        <img src={balloon1} alt="balloon 1" />
      </div>
    </div>
  );
};

export default BookTickets;
