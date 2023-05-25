import React, { useState } from "react";
import "../../App.css";
import "./paymentDetail.css";
import midImg from "../../assets/images/Vector.png";
import tiniImg from "../../assets/images/Trini_Arnold_Votay1 2.png";
import { DatePicker, DatePickerProps, Input } from "antd";
import { BiCalendar } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "../Box";
import { errorPaymentInfo, paymentProp } from "../../propType";
import Tooltip from "../Tooltip";
import { addPaymentsToFireBase } from "../../firebase/controller";

const PaymentDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [paymentInfo, setPaymentInfo] = useState<paymentProp>({
    ticket: state.ticket,
    amount: state.amount,
    date: state.date,
    name: state.name,
    phone: state.phone,
    email: state.email,
    price: state.price * Number(state.amount),
    numberCredit: null,
    nameCredit: "",
    dateCredit: "",
    code: "",
  });

  const [paymentError, setPaymentError] = useState<errorPaymentInfo>({});

  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    setPaymentInfo({ ...paymentInfo, dateCredit: dateString });
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
    setPaymentInfo({ ...paymentInfo, nameCredit: event.target.value });
  };

  const handleChangeCodeCredit = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentInfo({ ...paymentInfo, code: event.target.value });
  };

  const validateErrorPayment = (data: paymentProp) => {
    const err: any = {};
    //validate numberCredit
    if (data.numberCredit === null) {
      const message = "Vui lòng nhập số thẻ ";
      err.numberCredit = message;
    } else if (isNaN(Number(data.numberCredit))) {
      const message = "Số thẻ phải là số";
      err.numberCredit = message;
    }

    //validate date
    if (data.dateCredit === "" || data.dateCredit === "Ngày sử dụng") {
      const message = "Vui lòng chọn ngày ";
      err.dateCredit = message;
    }

    //validate name
    if (data.nameCredit === "") {
      const message = "Vui lòng nhập tên chủ thẻ ";
      err.name = message;
    }

    //validate cvv/cvc
    if (data.code === "") {
      const message = "Vui lòng nhập CCV/CVC ";
      err.code = message;
    }
    setPaymentError({ ...err });

    return Object.keys(err).length < 1;
  };

  const handleSubmitPayment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    validateErrorPayment(paymentInfo);
    if (validateErrorPayment(paymentInfo)) {
      addPaymentsToFireBase(paymentInfo);
      navigate("/payment_success");
    }
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
            <Input className="input mt-10" value={paymentInfo.price} readOnly />
          </div>
          <div className="total-ticket">
            <label>Số lượng vé</label>
            <Input
              className="input mt-10"
              style={{ width: "50%" }}
              value={paymentInfo.amount}
              readOnly
            />
          </div>
          <div>
            <label>Ngày sử dụng</label>
            <Input className="input mt-10" value={paymentInfo.date} readOnly />
          </div>
        </div>
        <div className="mt-10">
          <label>Thông tin liên hệ</label>
          <Input className="input mt-10" style={{ width: "50%" }} readOnly />
        </div>
        <div className="mt-10">
          <label>Điện thoại</label>
          <Input
            className="input mt-10"
            style={{ width: "40%" }}
            value={paymentInfo.phone}
            readOnly
          />
        </div>
        <div className="mt-10">
          <label>Email</label>
          <Input
            className="input mt-10"
            style={{ width: "50%" }}
            value={paymentInfo.email}
            readOnly
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
              style={
                paymentError.numberCredit ? { border: "1px solid red" } : {}
              }
            />
            {paymentError.numberCredit ? (
              <Tooltip style={{ top: "40%" }} type="left">
                {paymentError.numberCredit}
              </Tooltip>
            ) : null}
          </div>
          <div className="mt-10 tooltip">
            <label>Họ tên chủ thẻ</label>
            <Input
              className="input mt-10"
              onChange={handleChangeNameCredit}
              style={paymentError.name ? { border: "1px solid red" } : {}}
            />
            {paymentError.name ? (
              <Tooltip style={{ top: "40%" }} type="left">
                {paymentError.name}
              </Tooltip>
            ) : null}
          </div>
          <div
            className="count-ticket-date_form mt-10 tooltip"
            style={{ display: "unset" }}
          >
            <label>Ngày hết hạn</label>
            <div style={{ display: "flex", marginTop: "10px" }}>
              <div
                className="show-date"
                style={
                  paymentError.numberCredit
                    ? { border: "1px solid red", marginLeft: 0 }
                    : { marginLeft: 0 }
                }
              >
                {paymentInfo.dateCredit}
              </div>
              {paymentError.dateCredit ? (
                <Tooltip style={{ top: "40%" }} type="left">
                  {paymentError.dateCredit}
                </Tooltip>
              ) : null}
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
              onChange={handleChangeCodeCredit}
              style={
                paymentError.code
                  ? { border: "1px solid red", width: "30%" }
                  : { width: "30%" }
              }
            />
            {paymentError.code ? (
              <Tooltip style={{ top: "40%" }} type="left">
                {paymentError.code}
              </Tooltip>
            ) : null}
          </div>
          <button className="btn-ticket">Thanh toán</button>
        </form>
      </Box>
    </div>
  );
};

export default PaymentDetail;
