import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { v4 as uuidv4 } from "uuid";

function App() {
  const userId = uuidv4();
  const [notes, setNotes] = useState([]);
  function addNotes(note) {
    note.id = userId;
    setNotes((prevValue) => {
      return [...prevValue, note];
    });
  }
  function deleteNotes(id) {
    setNotes((prevValue) => {
      return prevValue.filter((item) => {
        return item.id !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes} />
      {notes.map((item) => {
        return (
          <Note
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            onDelete={deleteNotes}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
