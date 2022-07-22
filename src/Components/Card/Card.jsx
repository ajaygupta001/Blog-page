import React from 'react'
import "./card.css";

export default function Card(props) {
  return (
   <div className='card-main'>
    <div className='img-container'>
      <img className='img' src={props.imageUrl} alt="" />
    </div>
    <div className='card-content'>
      <h2 className='content-category'>{props.category}</h2>
      <h3 className='content-date'>{props.date}</h3>
      
      <h2 className='contant-title'>{props.title}</h2>
      <p className='content-para'>{props.body}</p>
       
    </div>
      <div className='btn'>
      <button className='continue-btn'>Continue</button>
      </div>
      
    
   </div>

  )
}








