import * as React from 'react';

import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';

const Bdelete = ({ deleteBtClk }: { deleteBtClk: any; }) => {
  let valBtClk = Math.random();
  return (
    <Fab
      color="primary"
      aria-label="add"
      size="small"
      onClick={() => deleteBtClk(valBtClk)}
    >
      <DeleteIcon color="inherit" />
    </Fab>
  );
};

export default Bdelete;