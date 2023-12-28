import React, { useContext } from "react";
import { Link } from "react-router-dom";
import noteContext from "../Context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const {deleteNote} = context;
  const { note } = props;

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <Link to="#">
              <i className="fas fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i>
            </Link>
            <Link to="#">
              <i className="fas fa-pen-to-square mx-2"></i>
            </Link>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
