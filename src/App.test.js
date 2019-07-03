import React from 'react';
import { create } from "react-test-renderer";
import ReactDOM from 'react-dom';
import App from './App';
import NoteListItem from "./Components/NoteListItem/NoteListItem";
import { tsExternalModuleReference, exportAllDeclaration } from '@babel/types';

const  notesToTest = { 
  validNote: "Proper note", 
  emptyNote: "", 
  tooLongNote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus ante metus, vel consectetur urna mollis ut. Fusce vel massa vestibulum, viverra sem eget, gravida lectus. Aliquam ac dui non.", 
  emojiNote: "😀😀😀"}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("Note List Item component", () => {
  test("it matches the snapshot, proper note, no errors", () => {
    const component = create(<NoteListItem checkNote={notesToTest.validNote}/>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe("Note List Item component", () => {
  test("it matches the snapshot, error, empty note", () => {
    const component = create(<NoteListItem checkNote={notesToTest.emptyNote}/>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});


describe("Note List Item component", () => {
  test("it matches the snapshot, error, longer than a 100", () => {
    const component = create(<NoteListItem checkNote={notesToTest.tooLongNote}/>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});


describe("Note List Item component", () => {
  test("it matches the snapshot, error, contains emoji", () => {
    const component = create(<NoteListItem checkNote={notesToTest.emojiNote}/>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});