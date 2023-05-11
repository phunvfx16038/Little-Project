import React from "react";
import "../../App.css";
import "../BookTickets/bookticket.css";
import "./paymentDetail.css";
import midImg from "../../assets/images/Vector.png";
import { DatePicker, DatePickerProps, Input } from "antd";
import { BiCalendar } from "react-icons/bi";
const PaymentDetail = () => {
  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {};

  return (
    <div className="container wrapper">
      <div className="leftside">
        <div className="wrap-your-ticket position-ticket">
          <div className="your-ticket">Vé cổng - vé gia đình</div>
        </div>
        <div className="wrap-leftside">
          <div className="semi-wrap">
            <div className="content-leftside p-left-form">
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
            </div>
          </div>
        </div>
        <div className="vector position-vector">
          <img src={midImg} alt="vector" />
        </div>
      </div>
      <div className="rightside">
        <div className="wrap-your-ticket position-ticket">
          <div className="your-ticket" style={{ padding: "10px 35px" }}>
            Thông tin thanh toán
          </div>
        </div>
        <div className="wrap-leftside">
          <div className="semi-wrap">
            <div className="content-leftside" style={{ padding: "" }}>
              <form>
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
                      <DatePicker
                        onChange={onChangeDate}
                        className="datePicker"
                      />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetail;
