import React from "react";
import "./NoteListItem.css";
import ErrorSpan from "../ErrorSpan/ErrorSpan";

const NoteListItem = props => {
    return (<>
        <li>
            <span>{props.children}</span>
            <i className="fas fa-trash-alt deleteIcon" onClick={props.delete}></i>
        </li>
        <ErrorSpan checkNote={props.checkNote}/>
    </>);
}

export default NoteListItem;