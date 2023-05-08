import React, { useState } from 'react'
import "./formticket.css"
import { Select } from '../Select';
import { DatePicker, Input } from 'antd';
import type { DatePickerProps } from 'antd';
import { BiCalendar } from "react-icons/bi";
import { database } from '../../firebase';
import { child, push, ref } from 'firebase/database';
import { Option, dataInput } from '../../propType';
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

  const inputValue:dataInput = {
    ticket:'Gói gia đình',
    amount:'',
    date:'Ngày sử dụng',
    name:'',
    phone:'',
    email:''
  }

  const dbRef = ref(database);
  const [dataForm,setDataForm] = useState<dataInput>(inputValue)

  const onChangeDate: DatePickerProps['onChange'] = (date, dateString) => {
    setDataForm({...dataForm,date:dateString})
  };

  const handleChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataForm({...dataForm,amount:event.target.value})
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataForm({...dataForm,name:event.target.value})
  };

  const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataForm({...dataForm,phone:event.target.value})
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataForm({...dataForm,email:event.target.value})
  };

  const createTicket=(ticket: dataInput) =>{
    push(child(dbRef, `ticket/`), {
      ticket: ticket,
    });
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault()
    createTicket(dataForm)
    setDataForm({...dataForm,
      ticket:'Gói gia đình',
    amount:'',
    date:'Ngày sử dụng',
    name:'',
    phone:'',
    email:''
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='ticket-bag_form'>
        <div className='show-select-ticket'>{dataForm.ticket}</div>
        <Select
        options={options}
        onChange={(selection: Option) => setDataForm({...dataForm,ticket:selection.value})}
      />
      </div>
      <div className='count-ticket-date_form'>
        <Input placeholder="Số lượng vé" className="input" onChange={handleChangeAmount} value={dataForm.amount}/>
        <div className='show-date'>{dataForm.date}</div>
        <div className='wrap-datePicker'>
        <DatePicker onChange={onChangeDate} className='datePicker'/>
        <div className="calendar-icon"><BiCalendar /></div>
        </div>
      </div>
      <div className='full-name_form'>
        <Input placeholder="Họ và tên" className="input" onChange={handleChangeName} value={dataForm.name}/>
      </div>
      <div className='phone_form' >
        <Input placeholder="Số điện thoại" className="input" onChange={handleChangePhone} value={dataForm.phone}/>
      </div>
      <div className='email_form' >
        <Input placeholder="Địa chỉ Email" className="input" onChange={handleChangeEmail} value={dataForm.email}/>
      </div>
      <button className='btn-ticket'>Đặt vé</button>
    </form>
  )
}

export default FormTickets