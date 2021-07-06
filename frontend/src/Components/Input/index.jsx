import React from "react";
import "./styles.css";

export default function Input(props) {

  return (
      <div className="input_div" id={props.id} style={props.myMargin}>
        <input
          type={props.type}
          className="input"
          placeholder={props.placeholder}
          onChange={props.onChangeAction}
          value={props.value}
          min={props.min}
          max={props.max}
        />
      </div>
  );
}