import React from "react";
import "./Icon.css";

const Icon = props => {
    return <i onClick={props.click} className="fas fa-comment-alt minMaxBtn"></i>;
}

export default Icon;