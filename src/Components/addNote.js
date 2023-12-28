import React, { useContext, useState } from "react";
import NoteContext from "../Context/notes/noteContext";

const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "default" });

  const handleOnClick = () => {
    // Ensure that you are passing the correct property names
    addNote(note.title, note.description, note.tag);

    // Optionally, you can reset the form after submission
    setNote({ title: "", description: "", tag: "" });
  };

  const handleOnChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value }); // Fix the property name
  };

  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title" // Fix the id
            aria-describedby="emailHelp"
            onChange={handleOnChange}
            name="title" // Add the name attribute
            value={note.title} // Control the input value
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={handleOnChange}
            value={note.description} // Control the input value
          />
        </div>
        <div className="mb-3 form-check">
          {/* Fix the input type */}
          <input
            type="checkbox"
            className="form-check-input"
            id="description"
            onChange={handleOnChange} // Optionally handle checkbox changes
            checked={note.tag} // Control the checkbox value
          />
          <label className="form-check-label" htmlFor="description  ">Check me out</label>
        </div>
        <button
          type="button" // Change type to "button" to prevent form submission
          className="btn btn-primary"
          onClick={handleOnClick}
        >
          AddNote
        </button>
      </form>
    </div>
  );
};

export default AddNote;
