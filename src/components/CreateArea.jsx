import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    id: "",
    title: "",
    content: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  function onSubmit(e) {
    if (note.title === "") {
      alert("Empty title. Please Enter the Title");
    } else {
      props.onAdd(note);
    }
    setNote({
      id: "",
      title: "",
      content: ""
    });
    e.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={onSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
