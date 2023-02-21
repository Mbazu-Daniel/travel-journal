import React from "react";
import path from "../assets/path.svg"

const Card = (props) => {
  return (
    <section className="card--box">
      <img src={props.imageUrl} className="card--img" />
      <aside className="card--details">
        <div className="card--direction">
          <img src={path} className="card--path" />
          <p className="card--country">{props.location}  </p>
          <p className="card--map"><a href={props.googleMapsUrl}  target="_blank"> View on Google Maps</a> </p>
        </div>
        <h1 className="card--location"> {props.title} </h1>
        <h3 className="card--date"> {props.startDate} - {props.endDate} </h3>
        <p className="card--info">
         {props.description}
        </p>

        
      </aside>
   

    </section>

  );
};

export default Card;

// Photos from Unsplash
// (can use these URLs as your img src)

// Japan
// https://source.unsplash.com/WLxQvbMyfas

// Australia
// https://source.unsplash.com/JmuyB_LibRo

// Norway
// https://source.unsplash.com/3PeSjpLVtLg
