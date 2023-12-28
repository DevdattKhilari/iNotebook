import React,{useContext, useEffect} from "react";
import noteContext from "../Context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./addNote";


const Notes = () => {
  const context = useContext(noteContext);
  const { notes,getNotes } = context;
  useEffect(()=>{
    getNotes();
  },[getNotes])
  return (
    <>
    <AddNote/>
    
    <div className="row my-3">
      {notes.map((note) => {
        return <NoteItem key={note._id} note={note}/>;
      })}
    </div>
    </>
  );
};

export default Notes;