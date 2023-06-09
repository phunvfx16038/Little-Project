import React, { useState } from "react";
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
import { contactProp } from "../../propType";
import Tooltip from "../Tooltip";
import { addContactsToFireBase } from "../../firebase/controller";

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

  const [contact, setContact] = useState<contactProp>({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [contactError, setContactError] = useState<contactProp>({});

  const handleChangeNameContact = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setContact({ ...contact, name: event.target.value });
  };

  const handleChangeEmailContact = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setContact({ ...contact, email: event.target.value });
  };

  const handleChangePhoneContact = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setContact({ ...contact, phone: event.target.value });
  };

  const handleChangeAddressContact = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setContact({ ...contact, address: event.target.value });
  };

  const handleMessageContact = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContact({ ...contact, message: event.target.value });
  };

  const validateErrorContact = (data: contactProp) => {
    //validate name contact
    const err: any = {};
    if (data.name === "") {
      const message = "Vui lòng nhập họ và tên";
      err.name = message;
    }

    //validate name contact
    if (data.email === "") {
      const message = "Vui lòng nhập email";
      err.email = message;
    }

    //validate phone contact
    if (data.phone === "") {
      const message = "Vui lòng nhập số điện thoại";
      err.phone = message;
    }

    //validate address contact
    if (data.address === "") {
      const message = "Vui lòng nhập địa chỉ";
      err.address = message;
    }

    //validate message contact
    if (data.message === "") {
      const message = "Vui lòng nhập lời nhắn";
      err.message = message;
    }
    setContactError({ ...err });

    return Object.keys(err).length < 1;
  };

  const handleSubmitContact = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("click");
    validateErrorContact(contact);
    if (validateErrorContact(contact)) {
      addContactsToFireBase(contact);
    }
  };

  return (
    <div>
      <h2>Liên hệ</h2>
      <div className="container wrapper" style={{ position: "relative" }}>
        <div className="alex-image">
          <img src={alexImage} alt="alex img" />
        </div>
        <Box style={{ width: "66.66%" }}>
          <form style={{ alignItems: "normal" }} onSubmit={handleSubmitContact}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ac mollis justo. Etiam volutpat tellus quis risus
              volutpat, ut posuere ex facilisis.{" "}
            </p>
            <div className="input-group">
              <Input
                placeholder="Tên"
                className="input"
                onChange={handleChangeNameContact}
                style={contactError.name ? { border: "1px solid red" } : {}}
              />
              {contactError.name ? (
                <Tooltip type="left">{contactError.name}</Tooltip>
              ) : null}
              <Input
                placeholder="Email"
                className="input"
                onChange={handleChangeEmailContact}
                style={contactError.email ? { border: "1px solid red" } : {}}
              />
              {contactError.email ? (
                <Tooltip type="right">{contactError.email}</Tooltip>
              ) : null}
            </div>
            <div className="input-group">
              <Input
                placeholder="Số điện thoại"
                className="input"
                onChange={handleChangePhoneContact}
                style={contactError.phone ? { border: "1px solid red" } : {}}
              />
              {contactError.phone ? (
                <Tooltip type="left">{contactError.phone}</Tooltip>
              ) : null}
              <Input
                placeholder="Địa chỉ"
                className="input"
                onChange={handleChangeAddressContact}
                style={contactError.address ? { border: "1px solid red" } : {}}
              />
              {contactError.address ? (
                <Tooltip type="right">{contactError.address}</Tooltip>
              ) : null}
            </div>
            <div style={{ position: "relative" }}>
              <TextArea
                rows={4}
                className="input mb-30"
                placeholder="Lời nhắn"
                onChange={handleMessageContact}
                style={contactError.message ? { border: "1px solid red" } : {}}
              />
              {contactError.message ? (
                <Tooltip type="right">{contactError.message}</Tooltip>
              ) : null}
            </div>
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
