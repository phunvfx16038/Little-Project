import React from 'react'
import "./bookticket.css"
import "../Header/header.css"
import midImg from "../../assets/images/Vector.png"
import { AiFillStar } from "react-icons/ai";
import FormTickets from '../FormTickets';
const BookTickets = () => {

    const infoLists = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Lorem ipsum dolor sit amet, consectetur adipiscing elit.','Lorem ipsum dolor sit amet, consectetur adipiscing elit.']
    const contentLists = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut posuere ex facilisis.","Suspendisse iaculis libero lobortis condimentum gravida. Aenean auctor iaculis risus, lobortis molestie lectus consequat a."]
  return (
    <div className='container wrapper'>
        <div className='leftside'>
            <div className="wrap-leftside">
                <div className='semi-wrap'>
                    <div className='content-leftside '>
                        {
                            contentLists.map((content,index)=>(
                                <div key={index} className='content'>{content}</div>
                            ))
                        }
                        <ul className='list-content'>
                            {infoLists.map((infoList,index)=>(
                                <li key={index}>
                                <AiFillStar className='star-icon'/> 
                                <span>{infoList}</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='rightside'>
            <div className='wrap-your-ticket'>
        <div className='your-ticket'>Vé của bạn</div>

            </div>
        <div className="wrap-leftside">
                <div className='semi-wrap'>
                    <div className='content-leftside'>
                        <FormTickets/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookTickets