import React from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const Note = ({ id, text, deleteNote }) => {
  return (
    <div className="note">
      <div className="note__body">{text}</div>
      <div className="note__footer" style={{ justifyContent: "flex-end" }}>
        <DeleteForeverOutlinedIcon
          className="note__delete"
          aria-hidden="true"
          //传id的话不能写成deleteNote(id)，以为会无限call
          onClick={() => deleteNote(id)}
        />
      </div>
    </div>
  );
};

export default Note;
