import React from 'react'

export default function card(props) {
  return (
    <div>
      <a href="" class="card">
      <img src={props.img} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src={props.img} alt="" />
          <div class="card__header-text">
            <h3 class="card__title">{props.name}</h3>            
            <span class="card__status">{props.time}1 hour ago</span>
          </div>
        </div>
        <p class="card__description">
        {props.description}
        </p>
        <a href={props.links}>
          <button class="btn">Watch Now</button>
        </a> 
       </div>
    </a>      
    </div>
  )
}
