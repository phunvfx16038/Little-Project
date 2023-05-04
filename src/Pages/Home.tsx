import React from 'react'

import bgImage from "../assets/images/bg.png"
import Banner from '../Components/Banner'
import BookTickets from '../Components/BookTickets'

const Home = () => {
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
          <Banner/>
          <BookTickets/>
        </div>
    </div>
  )
}

export default Home