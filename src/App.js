import React, { Component } from 'react';
import Icon from "./Components/Icon/Icon";
import NoteList from "./Components/NoteList/NoteList";
import AddNoteForm from "./Components/AddNoteForm/AddNoteForm";
import './App.css';
import {connect} from "react-redux";


class App extends Component {

  state = {
    // notes: ["Proper Note 1",
    //   "Proper Note 2",
    //   "😀",
    //   "",
    //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus ante metus, vel consectetur urna mollis ut. Fusce vel massa vestibulum, viverra sem eget, gravida lectus. Aliquam ac dui non."],
    // newNoteValue: "",
    // isHidden: true
  }


  // handleInputChange = event => {
  //   this.setState({ newNoteValue: event.target.value })
  // }

  // handleAddNote = event => {
  //   event.preventDefault();
  //   let noteToAdd = this.state.newNoteValue;
  //   this.setState({ notes: this.state.notes.concat(noteToAdd), newNoteValue: "" });
  // }

  // handleDeleteNote = index => {
  //   let array = [...this.state.notes]; // make a separate copy of the array
  //   array.splice(index, 1);
  //   this.setState({ notes: array });
  // }


  render() {

    return (<div className="App">
      <section className="mainPageSection">

        <div className="sideView">
          <h3>My notes</h3>
          <hr />
          <NoteList notes={this.props.state.notes} wait={2000} onDelete={this.props.handleDeleteNote} />
        </div>

        <div className="dialogWindowView">

          <div className={this.props.state.isHidden ? "quickListView hide" : "quickListView"}>
            <h3 className="listTitle">Append some new notes</h3>
            <div className="list">
              <NoteList notes={this.props.state.notes} wait={1000} onDelete={this.props.handleDeleteNote} />
            </div>

            <AddNoteForm
              onSubmit={event => this.props.handleAddNote(event)}
              value={this.props.newNoteValue}
              onChange={this.props.handleInputChange}
            />
          </div>
          <Icon click={this.props.handleMinMax}></Icon>
        </div>

      </section>
    </div>);
  }
}

const mapStateToProps = state =>{
 return{
   state: state
 }
}

const mapDispatchToProps = dispatch => {
  return {
    handleAddNote: (event) => dispatch({ type:"ADD_NOTE", event:event}),
    handleInputChange: (event) => dispatch({type:"HANDLE_CHANGE", event:event}),
    handleMinMax: () => dispatch({type:"HANDLE_MIN_MAX"}),
    handleDeleteNote: (index) => dispatch({type:"DELETE_NOTE", index:index})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
