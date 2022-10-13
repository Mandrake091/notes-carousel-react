/* eslint-disable array-callback-return */
import { Container } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import React, { useContext, useEffect, useState } from "react";
import { OutlinedInput } from "@mui/material";
import NewNote from "../components/NewNote";
import Note from "../components/Note";

import { NoteContext } from "../context/NoteContext";

function AllNotes() {
  const { notes, deleteNote } = useContext(NoteContext);

  const [filteredList, setFilterList] = useState(notes);

  const filterBySearch = (e) => {
    const query = e.target.value;
    var updatedList = [...notes];

    updatedList = updatedList.filter(
      (item) => item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
    setFilterList(updatedList);
    console.log(updatedList);
    console.log(notes);
  };
  useEffect(() => {
    return setFilterList(notes);
  }, [notes]);

  return (
    <Container>
      <Box md={{ flexGrow: 2 }}>
        <Grid
          justifyContent='center'
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 6, sm: 2, md: 8 }}
        >
          <div
            style={{
              backgroundColor: "#a4e4aa",
            }}
          >
            <h1>Hai ({filteredList.length}) note.</h1>

            <OutlinedInput
              placeholder="Cerca la tua nota qui"
              color="secondary"
              name="filter"
              type="search"
              onChange={filterBySearch}
            />
            <Box sx={{ width: "100%" }}>
              <Grid
                style={{ padding: "20px" }}
                container
                justifyContent="start"
                spacing={{ xs: 6, md: 6 }}
                columns={{ xs: 6, sm: 8, md: 12 }}
              >
                {filteredList.map((note, k) => (
                  <Grid item xs={6}>
                    <Note
                      key={k}
                      note={note}
                      onDelete={() => deleteNote(note.id)}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </div>
          <div
            style={{
              width:'50%',
              display: "flex",
              justifyContent: "center",
              paddingBottom: "30px",
              backgroundColor: "#d3d333",
            }}
          >
            <NewNote />
          </div>
        </Grid>
      </Box>
    </Container>
  );
}

export default AllNotes;
