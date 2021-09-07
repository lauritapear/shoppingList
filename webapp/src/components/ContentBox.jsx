import * as React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from "@material-ui/core/Paper";

export default function ComponentBox() {
  return (
     <Paper variant="outlined" square>
      <Box p={1}>
        <Button variant="contained" color="primary">Add yout first item</Button>
     </Box>
   </Paper>
  );
}