import React from "react";
import Input from "../Input/Input";
import "./AddNoteForm.css"


const AddNoteForm = props => {
    return (<form onSubmit={props.onSubmit} className="addNoteForm">
    <Input
      type="text"
      value={props.value}
      placeholder="Add a note"
      onChange={props.onChange}>
    </Input>
    <Input type="submit" value="Submit" placeholder="Add to list"></Input>
  </form> )
}

export default AddNoteForm;