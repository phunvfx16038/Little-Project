import React from "react";
import "../../App.css";
import "./paymentDetail.css";
import midImg from "../../assets/images/Vector.png";
import tiniImg from "../../assets/images/Trini_Arnold_Votay1 2.png";
import { DatePicker, DatePickerProps, Input } from "antd";
import { BiCalendar } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Box from "../Box";
const PaymentDetail = () => {
  const navigate = useNavigate();

  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {};

  const handleSubmitPayment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/payment_success");
  };

  return (
    <div className="container wrapper" style={{ position: "relative" }}>
      <div className="trini-img">
        <img src={tiniImg} alt="trini vo tay" />
      </div>
      <Box className="p-left-form" style={{ width: "66.66%" }}>
        <div className="wrap-your-ticket position-ticket">
          <div className="your-ticket">Vé cổng - vé gia đình</div>
        </div>
        <div className="number-infor">
          <div>
            <label>Số tiền thanh toán</label>
            <Input className="input mt-10" />
          </div>
          <div className="total-ticket">
            <label>Số lượng vé</label>
            <Input className="input mt-10" style={{ width: "50%" }} />
          </div>
          <div>
            <label>Ngày sử dụng</label>
            <Input className="input mt-10" />
          </div>
        </div>
        <div className="mt-10">
          <label>Thông tin liên hệ</label>
          <Input className="input mt-10" style={{ width: "50%" }} />
        </div>
        <div className="mt-10">
          <label>Điện thoại</label>
          <Input className="input mt-10" style={{ width: "40%" }} />
        </div>
        <div className="mt-10">
          <label>Email</label>
          <Input className="input mt-10" style={{ width: "50%" }} />
        </div>
        <div className="vector position-vector">
          <img src={midImg} alt="vector" />
        </div>
      </Box>
      <Box style={{ marginLeft: "12px", width: "33.33%" }}>
        <div className="wrap-your-ticket position-ticket">
          <div className="your-ticket" style={{ padding: "10px 35px" }}>
            Thông tin thanh toán
          </div>
        </div>
        <form onSubmit={handleSubmitPayment}>
          <div className="mt-10">
            <label>Số thẻ</label>
            <Input className="input mt-10" />
          </div>
          <div className="mt-10">
            <label>Họ tên chủ thẻ</label>
            <Input className="input mt-10" />
          </div>
          <div
            className="count-ticket-date_form mt-10"
            style={{ display: "unset" }}
          >
            <label>Ngày hết hạn</label>
            <div style={{ display: "flex", marginTop: "10px" }}>
              <div className="show-date" style={{ marginLeft: 0 }}></div>
              <div className="wrap-datePicker">
                <DatePicker onChange={onChangeDate} className="datePicker" />
                <div className="calendar-icon">
                  <BiCalendar />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 mb-15">
            <label>CVV/CVC</label>
            <Input className="input mt-10" style={{ width: "30%" }} />
          </div>
          <button className="btn-ticket">Thanh toán</button>
        </form>
      </Box>
    </div>
  );
};

export default PaymentDetail;
