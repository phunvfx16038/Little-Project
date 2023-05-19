import React, { useEffect, useState } from "react";
import "../../App.css";
import "./paymentDetail.css";
import midImg from "../../assets/images/Vector.png";
import tiniImg from "../../assets/images/Trini_Arnold_Votay1 2.png";
import { DatePicker, DatePickerProps, Input } from "antd";
import { BiCalendar } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "../Box";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { dataInput, errorPaymentInfo, paymentInfoProp } from "../../propType";
import Tooltip from "../Tooltip";

const PaymentDetail = () => {
  const { state } = useLocation();
  const dispatch = useAppDispatch();
  const tickets = useAppSelector((state) => state.ticket);
  const navigate = useNavigate();

  const [ticketPayment] = useState<dataInput>({
    ticket: state.ticket,
    amount: state.amount,
    date: state.date,
    name: state.name,
    phone: state.phone,
    email: state.email,
    price: state.price * Number(state.amount),
  });

  const [paymentInfo, setPaymentInfo] = useState<paymentInfoProp>({
    numberCredit: null,
    name: "",
    date: "",
    code: "",
  });

  const [paymentError, setPaymentError] = useState<errorPaymentInfo>({
    numberCredit: "",
    name: "",
    date: "",
    code: "",
  });

  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    setPaymentInfo({ ...paymentInfo, date: dateString });
  };

  const handleChangeNumberCredit = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentInfo({
      ...paymentInfo,
      numberCredit: Number(event.target.value),
    });
  };

  const handleChangeNameCredit = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentInfo({ ...paymentInfo, name: event.target.value });
  };

  const handleChangeCodeCredit = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentInfo({ ...paymentInfo, code: event.target.value });
  };

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
            <Input className="input mt-10" value={ticketPayment.price} />
          </div>
          <div className="total-ticket">
            <label>Số lượng vé</label>
            <Input
              className="input mt-10"
              style={{ width: "50%" }}
              value={ticketPayment.amount}
            />
          </div>
          <div>
            <label>Ngày sử dụng</label>
            <Input className="input mt-10" value={ticketPayment.date} />
          </div>
        </div>
        <div className="mt-10">
          <label>Thông tin liên hệ</label>
          <Input className="input mt-10" style={{ width: "50%" }} />
        </div>
        <div className="mt-10">
          <label>Điện thoại</label>
          <Input
            className="input mt-10"
            style={{ width: "40%" }}
            value={ticketPayment.phone}
          />
        </div>
        <div className="mt-10">
          <label>Email</label>
          <Input
            className="input mt-10"
            style={{ width: "50%" }}
            value={ticketPayment.email}
          />
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
          <div className="mt-10 tooltip">
            <label>Số thẻ</label>
            <Input
              className="input mt-10"
              onChange={handleChangeNumberCredit}
            />
            <Tooltip style={{ top: "40%" }}>{state.name}</Tooltip>
          </div>
          <div className="mt-10 tooltip">
            <label>Họ tên chủ thẻ</label>
            <Input className="input mt-10" onChange={handleChangeNameCredit} />
            <Tooltip style={{ top: "40%" }}>{state.name}</Tooltip>
          </div>
          <div
            className="count-ticket-date_form mt-10 tooltip"
            style={{ display: "unset" }}
          >
            <label>Ngày hết hạn</label>
            <div style={{ display: "flex", marginTop: "10px" }}>
              <div className="show-date" style={{ marginLeft: 0 }}>
                {paymentInfo.date}
              </div>
              <Tooltip style={{ top: "40%" }}>{state.name}</Tooltip>
              <div className="wrap-datePicker">
                <DatePicker onChange={onChangeDate} className="datePicker" />
                <div className="calendar-icon">
                  <BiCalendar />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 mb-15 tooltip">
            <label>CVV/CVC</label>
            <Input
              className="input mt-10"
              style={{ width: "30%" }}
              onChange={handleChangeCodeCredit}
            />
            <Tooltip style={{ top: "40%" }}>{state.name}</Tooltip>
          </div>
          <button className="btn-ticket">Thanh toán</button>
        </form>
      </Box>
    </div>
  );
};

export default PaymentDetail;
