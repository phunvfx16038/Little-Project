import React from "react";
import "../../App.css";
import "../BookTickets/bookticket.css";
import "../FormTickets/formticket.css";
import "./contactInfo.css";
import { Input } from "antd";
import locationImg from "../../assets/images/Group.png";
import EmailImg from "../../assets/images/Group (1).png";
import phoneImg from "../../assets/images/Group (2).png";

const { TextArea } = Input;
const ContactInfo = () => {
  return (
    <div>
      <h2>Liên hệ</h2>
      <div className="container wrapper">
        <div className="leftside">
          <div className="wrap-leftside">
            <div className="semi-wrap">
              <div
                className="content-leftside"
                style={{ padding: "40px 20px 15px 20px", height: "auto" }}
              >
                <form style={{ alignItems: "normal" }}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse ac mollis justo. Etiam volutpat tellus quis
                    risus volutpat, ut posuere ex facilisis.{" "}
                  </p>
                  <div className="input-group">
                    <Input placeholder="Tên" className="input" />
                    <Input placeholder="Email" className="input" />
                  </div>
                  <div className="input-group">
                    <Input placeholder="Số điện thoại" className="input" />
                    <Input placeholder="Địa chỉ" className="input" />
                  </div>
                  <TextArea
                    rows={4}
                    className="input mb-30"
                    placeholder="Lời nhắn"
                  />
                  <button
                    className="btn-ticket"
                    style={{ width: "50%", marginBottom: "10px" }}
                  >
                    Gửi liên hệ
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="rightside">
          <div className="wrap-leftside" style={{ marginBottom: "25px" }}>
            <div className="semi-wrap">
              <div
                className="content-leftside"
                style={{ height: "auto", padding: "25px 20px" }}
              >
                <div className="group">
                  <div className="group-img">
                    <img src={locationImg} alt="vị trí" />
                  </div>
                  <div className="group-detail">
                    <p>Địa chỉ:</p>
                    <p>86/33 Âu Cơ, Phường 9, Quận Tân Bình, TP. Hồ Chí Minh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wrap-leftside" style={{ marginBottom: "25px" }}>
            <div className="semi-wrap">
              <div
                className="content-leftside"
                style={{ height: "auto", padding: "25px 20px" }}
              >
                <div className="group">
                  <div className="group-img">
                    <img src={EmailImg} alt="vị trí" />
                  </div>
                  <div className="group-detail">
                    <p>Email:</p>
                    <p>investigate@your-site.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wrap-leftside" style={{ marginBottom: "25px" }}>
            <div className="semi-wrap">
              <div
                className="content-leftside"
                style={{ height: "auto", padding: "25px 20px" }}
              >
                <div className="group">
                  <div className="group-img">
                    <img src={phoneImg} alt="vị trí" />
                  </div>
                  <div className="group-detail">
                    <p>Điện thoại:</p>
                    <p>+84 145 689 798</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
