import React from "react";
import "../../App.css";
import "../BookTickets/bookticket.css";
import "../FormTickets/formticket.css";
import "./contactInfo.css";
import { Input } from "antd";
import locationImg from "../../assets/images/Group.png";
import EmailImg from "../../assets/images/Group (1).png";
import phoneImg from "../../assets/images/Group (2).png";
import alexImage from "../../assets/images/Alex_AR_Lay_Do shadow 1.png";
import Box from "../Box";

const { TextArea } = Input;
type dataProp = {
  id: number;
  title: string;
  detail: string;
  image: string;
};
const ContactInfo = () => {
  const contactData: dataProp[] = [
    {
      id: 1,
      title: "Địa chỉ:",
      detail: "86/33 Âu Cơ, Phường 9, Quận Tân Bình, TP. Hồ Chí Minh",
      image: locationImg,
    },
    {
      id: 2,
      title: "Email:",
      detail: "investigate@your-site.com",
      image: EmailImg,
    },
    {
      id: 3,
      title: "Điện thoại:",
      detail: "+84 145 689 798",
      image: phoneImg,
    },
  ];

  return (
    <div>
      <h2>Liên hệ</h2>
      <div className="container wrapper" style={{ position: "relative" }}>
        <div className="alex-image">
          <img src={alexImage} alt="alex img" />
        </div>
        <Box style={{ width: "66.66%" }}>
          <form style={{ alignItems: "normal" }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ac mollis justo. Etiam volutpat tellus quis risus
              volutpat, ut posuere ex facilisis.{" "}
            </p>
            <div className="input-group">
              <Input placeholder="Tên" className="input" />
              <Input placeholder="Email" className="input" />
            </div>
            <div className="input-group">
              <Input placeholder="Số điện thoại" className="input" />
              <Input placeholder="Địa chỉ" className="input" />
            </div>
            <TextArea rows={4} className="input mb-30" placeholder="Lời nhắn" />
            <button
              className="btn-ticket"
              style={{ width: "50%", marginBottom: "10px" }}
            >
              Gửi liên hệ
            </button>
          </form>
        </Box>
        <div className="rightside">
          {contactData.map((data) => (
            <Box key={data.id} style={{ marginBottom: "15px" }}>
              <div className="group">
                <div className="group-img">
                  <img src={data.image} alt="vị trí" />
                </div>
                <div className="group-detail">
                  <p>{data.title}</p>
                  <p>{data.detail}</p>
                </div>
              </div>
            </Box>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
