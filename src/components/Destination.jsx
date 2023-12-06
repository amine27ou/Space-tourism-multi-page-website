import React, { useState } from "react";
import data from "../data.json";

export default function Destination() {
    const planets = data.destinations
  const [value, setValue] = useState(0);

  function handleClick(index){
    setValue(index)
  }
  return (
    <div className="destination">
      <div className="content">
        <div className="col">
          <h2 className="title">
            <span>01 </span>PICK YOUR DESITNATION
          </h2>
          <div className="planet-container">
            <img src={planets[value]?.images?.png} alt="" />
          </div>
        </div>
        <div className="col">
          <div className="mini-navbar">
            <ul className="buttons-container">
              {planets.map((planet,index)=>(
                <li key={index}>
                <button onClick={()=>{handleClick(index)}} className='planet-btn'><p className={ `${index===value ? 'active-planet' : ''}`}>{planet.name}</p></button>
              </li>
              ))}
            </ul>
          </div>
         <div className="container">
          <h1 className="planet-name">{planets[value].name}</h1>
            <p className='planet-description'>{planets[value].description}</p>
          <hr/>
         </div>
          <div className="travel-info">
            <div>
                <p>AVG. DISTANCE</p>
                <h3>{planets[value].distance}</h3>
            </div>
            <div>
                <p>EST. TRAVEL TIME</p>
                <h3>{planets[value].travel}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
