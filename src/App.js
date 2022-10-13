import { useEffect, useState } from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import { NoteContext } from "./context/NoteContext";
import AllNotes from "./pages/AllNotes";




// import Swiper JS

function App() {
  const [notes, setNotes] = useState([
    { id: 0, title: "Nota di prova", content: "Nota di prova contenuto" },
    {
      id: 1,
      title: "Nota di provawxwx",
      content: "Nota di prova contenutoxqxqw",
    },
    {
      id: 2,
      title: "Nota di provawxwx",
      content: "Nota di prova contenutoxqxqw",
    },
  ]);

  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }


  return (
    <div className="App">
     
      <NoteContext.Provider
        value={{ notes, setNotes, deleteNote }}
      >
       
        <AllNotes />
        <Carousel />
      </NoteContext.Provider>
    </div>
  );
}

export default App;
