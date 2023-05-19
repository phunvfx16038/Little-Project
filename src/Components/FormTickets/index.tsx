import React, { useState } from "react";
import "./formticket.css";
import { Select } from "../Select";
import { DatePicker, Input } from "antd";
import type { DatePickerProps } from "antd";
import { BiCalendar } from "react-icons/bi";
import { database } from "../../firebase";
import { child, push, ref } from "firebase/database";
import { Option, dataInput, errorInput } from "../../propType";
import { useNavigate } from "react-router-dom";
import Tooltip from "../Tooltip";

const options: Option[] = [
  {
    label: "Gói gia đình",
    value: "Gói gia đình",
    price: 80000,
  },
];

function generateId() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

const FormTickets = () => {
  const inputValue: dataInput = {
    id: generateId(),
    ticket: "",
    amount: "",
    date: "Ngày sử dụng",
    name: "",
    phone: "",
    email: "",
    price: 0,
  };

  const [errors, setErrors] = useState<errorInput>({
    ticket: "",
    amount: "",
    date: "",
    name: "",
    phone: "",
    email: "",
  });
  const navigate = useNavigate();
  const dbRef = ref(database);
  const [dataForm, setDataForm] = useState<dataInput>(inputValue);

  const validateError = (data: dataInput) => {
    const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    let isError = true;
    //validate ticket
    if (data.ticket === "") {
      const message = "Vui lòng chọn gói sản phẩm ";
      errors.ticket = message;
      setErrors({ ...errors });
      isError = false;
    } else {
      errors.ticket = "";
      setErrors({ ...errors });
      isError = true;
    }

    //validate amount
    if (data.amount === "") {
      const message = "Vui lòng nhập số lượng vé ";
      errors.amount = message;
      setErrors({ ...errors });
      isError = false;
    } else {
      errors.amount = "";
      setErrors({ ...errors });
      isError = true;
    }

    //validate date
    if (data.date === "" || data.date === "Ngày sử dụng") {
      const message = "Vui lòng chọn ngày ";
      errors.date = message;
      setErrors({ ...errors });
      isError = false;
    } else {
      errors.date = "";
      setErrors({ ...errors });
      isError = true;
    }

    //validate title
    if (data.name === "") {
      const message = "Vui lòng nhập tên ";
      errors.name = message;
      setErrors({ ...errors });
      isError = false;
    } else {
      errors.name = "";
      setErrors({ ...errors });
      isError = true;
    }

    //validate phone
    if (data.phone === "") {
      const message = "Vui lòng nhập số điện thoại";
      errors.phone = message;
      setErrors({ ...errors });
      isError = false;
    } else if (isNaN(Number(data.phone))) {
      const message = "Số điện thoại phải là số";
      errors.phone = message;
      setErrors({ ...errors });
      isError = false;
    } else {
      errors.phone = "";
      setErrors({ ...errors });
      isError = true;
    }

    //validate email
    if (reg.test(data.email) === false) {
      const message = "Địa chỉ email phải chứa @";
      errors.email = message;
      setErrors({ ...errors });
      isError = false;
    } else if (data.email === "") {
      const message = "Vui lòng nhập email";
      errors.email = message;
      setErrors({ ...errors });
      isError = false;
    } else {
      errors.email = "";
      setErrors({ ...errors });
      isError = true;
    }

    return isError;
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

  const createTicket = (ticket: dataInput) => {
    push(child(dbRef, `ticket/`), {
      ticket: ticket,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    validateError(dataForm);
    if (validateError(dataForm)) {
      createTicket(dataForm);
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
        <div className="show-select-ticket">{dataForm.ticket}</div>
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
        {errors.ticket !== "" ? <Tooltip>{errors.ticket}</Tooltip> : null}
      </div>
      <div className="count-ticket-date_form tooltip">
        <Input
          placeholder="Số lượng vé"
          className="input"
          onChange={handleChangeAmount}
          value={dataForm.amount}
          style={{ width: "60%" }}
        />
        {errors.amount !== "" ? <Tooltip>{errors.amount}</Tooltip> : null}
        <div className="show-date">{dataForm.date}</div>
        {errors.date !== "" ? <Tooltip>{errors.date}</Tooltip> : null}
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
        />
        {errors.name !== "" ? <Tooltip>{errors.name}</Tooltip> : null}
      </div>
      <div className="phone_form tooltip">
        <Input
          placeholder="Số điện thoại"
          className="input"
          onChange={handleChangePhone}
          value={dataForm.phone}
        />
        {errors.phone !== "" ? <Tooltip>{errors.phone}</Tooltip> : null}
      </div>
      <div className="email_form tooltip">
        <Input
          placeholder="Địa chỉ Email"
          className="input"
          onChange={handleChangeEmail}
          value={dataForm.email}
        />
        {errors.email !== "" ? <Tooltip>{errors.email}</Tooltip> : null}
      </div>
      <button className="btn-ticket">Đặt vé</button>
    </form>
  );
};

export default FormTickets;
