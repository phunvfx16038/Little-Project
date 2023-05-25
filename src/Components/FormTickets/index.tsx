import React, { useState } from "react";
import "./formticket.css";
import { Select } from "../Select";
import { DatePicker, Input } from "antd";
import type { DatePickerProps } from "antd";
import { BiCalendar } from "react-icons/bi";
import { Option, dataInput, errorInput } from "../../propType";
import { useNavigate } from "react-router-dom";
import Tooltip from "../Tooltip";
import { addTicketsToFireBase } from "../../firebase/controller";

const options: Option[] = [
  {
    label: "Gói gia đình",
    value: "Gói gia đình",
    price: 80000,
  },
];

const FormTickets = () => {
  const inputValue: dataInput = {
    ticket: "",
    amount: "",
    date: "Ngày sử dụng",
    name: "",
    phone: "",
    email: "",
    price: 0,
  };

  const [errors, setErrors] = useState<errorInput>({});
  const navigate = useNavigate();
  // const dbRef = ref(database);
  const [dataForm, setDataForm] = useState<dataInput>(inputValue);

  const validateError = (data: dataInput) => {
    const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    const err: any = {};
    //validate ticket
    if (data.ticket === "") {
      const message = "Vui lòng chọn gói sản phẩm ";
      err.ticket = message;
    }

    //validate amount
    if (data.amount === "") {
      const message = "Vui lòng nhập số lượng vé ";
      err.amount = message;
    }

    //validate date
    if (data.date === "" || data.date === "Ngày sử dụng") {
      const message = "Vui lòng chọn ngày ";
      err.date = message;
    }

    //validate title
    if (data.name === "") {
      const message = "Vui lòng nhập tên ";
      err.name = message;
    }

    //validate phone
    if (data.phone === "") {
      const message = "Vui lòng nhập số điện thoại";
      err.phone = message;
    } else if (isNaN(Number(data.phone))) {
      const message = "Số điện thoại phải là số";
      err.phone = message;
    }
    //validate email
    if (reg.test(data.email) === false) {
      const message = "Địa chỉ email phải chứa @";
      err.email = message;
    } else if (data.email === "") {
      const message = "Vui lòng nhập email";
      err.email = message;
    }
    setErrors({ ...err });

    return Object.keys(err).length < 1;
  };

  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    setDataForm({ ...dataForm, date: dateString });
  };

  const handleChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataForm({ ...dataForm, amount: event.target.value });
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataForm({ ...dataForm, name: event.target.value });
  };

  const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataForm({ ...dataForm, phone: event.target.value });
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataForm({ ...dataForm, email: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    validateError(dataForm);
    console.log(validateError(dataForm));
    if (validateError(dataForm)) {
      addTicketsToFireBase(dataForm);
      setDataForm({
        ...dataForm,
        ticket: "",
        amount: "",
        date: "Ngày sử dụng",
        name: "",
        phone: "",
        email: "",
        price: 0,
      });
      navigate("/payment", { state: dataForm });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="ticket-bag_form tooltip">
        <div
          className="show-select-ticket"
          style={errors.ticket ? { border: "1px solid red" } : {}}
        >
          {dataForm.ticket}
        </div>
        <Select
          options={options}
          onChange={(selection: Option) =>
            setDataForm({
              ...dataForm,
              ticket: selection.value,
              price: selection.price,
            })
          }
        />
        {errors.ticket ? <Tooltip type="left">{errors.ticket}</Tooltip> : null}
      </div>
      <div className="count-ticket-date_form tooltip">
        <Input
          placeholder="Số lượng vé"
          className="input"
          onChange={handleChangeAmount}
          value={dataForm.amount}
          style={
            errors.amount
              ? { border: "1px solid red", width: "60%" }
              : { width: "60%" }
          }
        />
        {errors.amount ? <Tooltip type="left">{errors.amount}</Tooltip> : null}
        <div
          className="show-date"
          style={errors.date ? { border: "1px solid red" } : {}}
        >
          {dataForm.date}
        </div>
        {errors.date ? <Tooltip type="right">{errors.date}</Tooltip> : null}
        <div className="wrap-datePicker">
          <DatePicker onChange={onChangeDate} className="datePicker" />
          <div className="calendar-icon">
            <BiCalendar />
          </div>
        </div>
      </div>
      <div className="full-name_form tooltip">
        <Input
          placeholder="Họ và tên"
          className="input"
          onChange={handleChangeName}
          value={dataForm.name}
          style={errors.name ? { border: "1px solid red" } : {}}
        />
        {errors.name ? <Tooltip type="left">{errors.name}</Tooltip> : null}
      </div>
      <div className="phone_form tooltip">
        <Input
          placeholder="Số điện thoại"
          className="input"
          onChange={handleChangePhone}
          value={dataForm.phone}
          style={errors.phone ? { border: "1px solid red" } : {}}
        />
        {errors.phone ? <Tooltip type="left">{errors.phone}</Tooltip> : null}
      </div>
      <div className="email_form tooltip">
        <Input
          placeholder="Địa chỉ Email"
          className="input"
          onChange={handleChangeEmail}
          value={dataForm.email}
          style={errors.email ? { border: "1px solid red" } : {}}
        />
        {errors.email ? <Tooltip type="left">{errors.email}</Tooltip> : null}
      </div>
      <button className="btn-ticket">Đặt vé</button>
    </form>
  );
};

export default FormTickets;
