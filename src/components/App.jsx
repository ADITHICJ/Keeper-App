import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    // Add a unique id for each note
    const noteWithId = { ...newNote, id: Date.now() };
    setNotes(prevNotes => [...prevNotes, noteWithId]);
  }

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter(noteItem => noteItem.id !== id));
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="notes-container">
  {notes.map(noteItem => (
    <Note
      key={noteItem.id}
      id={noteItem.id}
      title={noteItem.title}
      content={noteItem.content}
      onDelete={deleteNote}
    />
  ))}
</div>
      <Footer />
    </div>
  );
}

export default App;
