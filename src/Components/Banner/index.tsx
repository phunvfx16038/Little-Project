import React from "react";
import "../../App.css";
import "./banner.css";
import park from "../../assets/images/image 2.png";
import balloon1 from "../../assets/images/balloon1.png";
import balloon2 from "../../assets/images/balloon2.png";
import groupKid from "../../assets/images/groupHair.png";

const Banner = () => {
  return (
    <div className="container wrapper" style={{ alignItems: "center" }}>
      <div className="park">
        <div className="park_image">
          <img src={park} alt="đầm sen logo" />
        </div>
        <span className="park_text">Đầm sen park</span>
      </div>
      <div className="park_balloon">
        <div className="park_balloon-1">
          <img src={balloon2} alt="Khí cầu 2" />
        </div>
        <div className="park_balloon-2">
          <img src={balloon1} alt="Khí cầu 1" />
        </div>
      </div>
      <div className="park_child-image">
        <img src={groupKid} alt="Nhóm trẻ em " />
      </div>
    </div>
  );
};

export default Banner;
