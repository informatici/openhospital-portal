import * as React from 'react';

import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

const Bedit = ({ editBtClk }: { editBtClk: any; }) => {
  let valBtClk = true;
  return (
    <Fab
      color="primary"
      aria-label="add"
      size="small"
      onClick={() => editBtClk(valBtClk)}
    >
      <EditIcon color="inherit" />
    </Fab>
  );
};

export default Bedit;