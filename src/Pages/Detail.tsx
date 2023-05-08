import React from 'react'
import bgImage from "../assets/images/bg.png"
import EventDetail from '../Components/EventDetail'
const Detail = () => {
    const style = {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding:'40px 20px'
      }
  return (
    <div style={{padding:"0 30px"}}>
        <div style={style}>
          <EventDetail/>
        </div>
    </div>
  )
}

export default Detail