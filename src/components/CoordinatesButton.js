// Code CoordinatesButton Component Here

import React from "react";

export default function CoordinatesButton(props) {
    
  const handleClick = (event) => {
    let coordinates = [event.clientX, event.clientY];

    props.onReceiveCoordinates(coordinates);
  };

  return <button onClick={handleClick}></button>;
}
