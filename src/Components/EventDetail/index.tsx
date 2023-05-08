import React from 'react'
import "../../App.css"
import "./eventDetail.css" 
import { Col, Row } from 'antd'
import eventImg from "../../assets/images/tunel.png"
import eventImg1 from "../../assets/images/Rectangle 1.png"
import { BiCalendar } from 'react-icons/bi'

const EventDetail = () => {
    
  return (
    <div className='container wrapper pl-80'>
        <div className='eventDetail-wrap'>
            <h2>Sự kiện 1</h2>
            <div className="wrap-leftside">
                <div className='semi-wrap'>
                    <div className='content-detail '> 
                        <Row gutter={[24, 8]}>
                        <Col span={8}>
                            <div className='image-cover'>
                                <img src={eventImg} alt="hình ảnh"/>
                            </div>
                            <p className='address'> Đầm sen Park</p>
                            <p className='time'>
                            <span className='calendar'><BiCalendar/></span>
                            30/05/2021 - 01/06/2021
                            </p>
                            <p className='price'> 25.000 VNĐ</p>
                        </Col>
                        <Col span={16}>
                            <Row gutter={[32, 8]}>
                                <Col span={8}>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic sdsd typesetting, remaining cssa essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, of Lorem Ipsum.</p>
                                </Col>
                                <Col span={8}>
                                    <img src={eventImg1} alt="hình ảnh"/>
                                    <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, </p>    
                                </Col>
                                <Col span={8}>
                                    <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, </p>
                                    <img src={eventImg1} alt="hình ảnh"/>
                                </Col>
                            </Row>
                        </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventDetail