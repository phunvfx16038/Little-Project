import React from 'react'
import bgImage from "../assets/images/bg.png"
import ListCards from '../Components/ListCards'
const Event = () => {
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
          <ListCards/>
        </div>
    </div>
  )
}

export default Event