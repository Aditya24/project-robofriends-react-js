import React from "react";
import "./Card.css";
import "tachyons";

function Card({ name, email, id }) {
  return (
    <div className='card tc dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img
        src={`https://robohash.org/${id}`}
        width='200'
        height='200'
        alt='robot_image'></img>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}
export default Card;
