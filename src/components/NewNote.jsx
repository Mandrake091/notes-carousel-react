import React, { useContext, useState } from "react";
import { NoteContext } from "../context/NoteContext";

import Input from "@mui/material/Input";
import { Button } from "@mui/material";

function NewNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { notes, filteredList, setNotes } = useContext(NoteContext);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "60%",
        margin: "auto",
      }}
    >
      <h1>New note</h1>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Title"
      />
      <Input
        onChange={(e) => setContent(e.target.value)}
        value={content}
        type="text"
        placeholder="Content"
      />
      <Button
        variant="contained"
        onClick={() => {
          setNotes([...notes, { id: notes.length + 1, title, content }]);
        }}
        style={{ width: "50px", margin: "30px auto" }}
      >
        Add
      </Button>
    </div>
  );
}

export default NewNote;
