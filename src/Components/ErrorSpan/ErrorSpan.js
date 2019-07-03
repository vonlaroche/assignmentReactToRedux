import React from "react";
import emojiRegex from "emoji-regex";
import "./ErrorSpan.css";

const regex = emojiRegex();

const ErrorSpan = props => {
    const err1 = "Error, note is empty";
    const err2 = "Error, number of characters is longer than a 100";
    const err3 = "Error, contains emojis";
   
    if(props.checkNote.match(regex)){
            return <span className="errorSpan">{err3}</span>;
    }
    if (props.checkNote.length <= 0) {
        return <span className="errorSpan">{err1}</span>
    }
    if (props.checkNote.length > 100) {
        return <span className="errorSpan">{err2}</span>
    }
    return ("");
}

export default ErrorSpan;