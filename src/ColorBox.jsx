import React from "react";
import { useParams } from "react-router-dom";

function ColorBox(props) {
  const params = useParams();
  console.log(params);

  // let color = props.color || params.color;
  let color;
  // if the color prop has been passed
  if (props.color) {
    color = props.color;
  } else {
    // from the URL
    color = params.color;
  }
  // if we have a color prop
  // assign a variable color to that prop
  // otherwise, take the color from the URL

  const boxStyle = {
    backgroundColor: color,
  };

  return <div className="color-div" style={boxStyle}></div>;
}

export default ColorBox;
