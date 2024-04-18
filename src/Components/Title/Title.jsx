import React from "react";
import "./Title.css";

const Title = (props) => {
  return (
    <div className="title">
      <p>{props.headData}</p>
      <h2>{props.paraData}</h2>
    </div>
  );
};

export default Title;
