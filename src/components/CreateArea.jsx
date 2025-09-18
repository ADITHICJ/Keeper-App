import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab, Zoom } from "@mui/material";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function submitNote(event) {
    event.preventDefault(); // stop form reload
    if (note.title.trim() || note.content.trim()) {
      props.onAdd(note);
      setNote({ title: "", content: "" });
    }
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote} type="button" aria-label="Add note">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
