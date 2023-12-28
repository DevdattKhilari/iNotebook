import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {  
  const host = "http://localhost:5000";
  console.log("Adding a new note");
  const notesInitial = [ ];

  const [notes, setNotes] = useState(notesInitial);

  const getNotes = async() => {
    //API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`,{
         method: "GET",
         headers: {
           "Content-Type": "application/json",
           "auth-token":
             "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4NTI0MzA3YzExNTlmNTViOGU1YmI5In0sImlhdCI6MTcwMzIyNDM3Nn0.NLzNa9X3LHyxUHJzCgtmbq_CjGOWVLut0AKd-dfV8Rw",
         },
       });
       
       const json = await response.json();
       console.log(json)
       setNotes(json)
 };  


  //Adding notes
  const addNote = async(title, description, tag) => {
     //API call
     const response = await fetch(`${host}/api/notes/addnote`,{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4NTI0MzA3YzExNTlmNTViOGU1YmI5In0sImlhdCI6MTcwMzIyNDM3Nn0.NLzNa9X3LHyxUHJzCgtmbq_CjGOWVLut0AKd-dfV8Rw",
          },
          body: JSON.stringify({ title, description, tag }),
        });
        // eslint-disable-next-line
        const json = await response.json();

        //Adding new note logic
    console.log("Adding a new note");
    const note = {
      _id: "658824e987a4b5d5ef340996",
      user: "658524307c1159f55b8e5bb9",
      title: title,
      description: description,
      tag: tag,
      date: "2023-12-24T12:32:41.952Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };  

  const deleteNote = (id) => {
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  };

  const editNote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(
      `${host}/api/notes/updatenote/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4NTI0MzA3YzExNTlmNTViOGU1YmI5In0sImlhdCI6MTcwMzIyNDM3Nn0.NLzNa9X3LHyxUHJzCgtmbq_CjGOWVLut0AKd-dfV8Rw",
        },
        body: JSON.stringify({ title, description, tag }),
      });
      // eslint-disable-next-line
      const json = await response.json();
    
    

    //Logic to edit the notes
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
}

export default NoteState;
