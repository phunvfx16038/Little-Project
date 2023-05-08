import { Card } from 'antd'
import React from 'react'
import { eventProp } from '../../propType';
import { BiCalendar } from "react-icons/bi";
import "./cardInfo.css"
import { Link } from 'react-router-dom';

type cardProp = {
  card:eventProp
}

const CardInfo = ({card}:cardProp) => {

  const formatter = new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'VND',

  })

  return (
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={card.image} />}
  >
    <h3 className="main-title">{card.title}</h3>
    <p className='address'>{card.address}</p>
    <p className='time'>
      <span className='calendar'><BiCalendar/></span>
      {card.time}
      </p>
    <p className='price'>{formatter.format(card.price)}</p>
    <Link to={`/event/${card.id}`}>
      <button className='btn-detail' >Xem chi tiết</button>
    </Link>
  </Card>
  )
}

export default CardInfo