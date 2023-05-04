import React, { useState } from 'react'
import "./formticket.css"
import { Option, Select } from '../Select';
import { DatePicker } from 'antd';
import type { DatePickerProps } from 'antd';
import { BiCalendar } from "react-icons/bi";
const options: Option[] = [
  {
    label: "Audi",
    value: "audi"
  },
  {
    label: "Ferrari",
    value: "ferrari"
  },
  {
    label: "Mercedes Benz",
    value: "mercedes"
  },
  {
    label: "BMW",
    value: "bmw"
  },
  {
    label: "Tesla",
    value: "tesla"
  },
];

const FormTickets = () => {
  
  const [selectedItem, setSelectedItem] = useState<Option | null>(null);
  const [useDate,setUseDate] = useState('')

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    setUseDate(dateString)
  };

  return (
    <form>
      <div className='ticket-bag_form'>
        <input type='text' className='ticket-bag-inp_form' placeholder='Gói gia đình' value={selectedItem?.value}/>
        <Select
        options={options}
        onChange={(selection: Option) => setSelectedItem(selection)}
      />
      </div>
      <div className='count-ticket-date_form'>
        <input type='text' className='count-ticket' placeholder='Số lượng vé'/>
        <input type='text' className='show-date' placeholder='Ngày sử dụng' value={useDate} readOnly/>
        <div className='wrap-datePicker'>
        <DatePicker onChange={onChange} className='datePicker'/>
        <div className="calendar-icon"><BiCalendar /></div>
        </div>
      </div>
      <div className='full-name_form'>
        <input type='text' placeholder='Họ và tên'/>
      </div>
      <div className='phone_form' >
        <input type='tel' placeholder='Số điện thoại'/>
      </div>
      <div className='email_form' >
        <input type='email' placeholder='Địa chỉ Email'/>
      </div>
      <button className='btn-ticket'>Đặt vé</button>
    </form>
  )
}

export default FormTickets