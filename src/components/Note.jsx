import { Button, Card, CardContent, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'


function Note({note, onDelete}) {


  return (
    <Card variant="outlined" sx={{ maxWidth: '250px', minHeight:'200px', minWidth:'200px' }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          {note.title}
        </Typography>
        <Typography variant="h6" component="div"></Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {note.content}
        </Typography>

        <Button
          variant="outlined"
          onClick={onDelete}
        > <DeleteIcon/></Button>
      </CardContent>
    </Card>
  );
}

export default Note