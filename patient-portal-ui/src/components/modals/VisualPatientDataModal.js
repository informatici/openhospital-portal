import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Oname from "../patient/registry_data/output_data/o_name";
import Oadress from "../patient/registry_data/output_data/o_adress";
import Otelephone from "../patient/registry_data/output_data/o_telephone";

import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function VisualPatientDataModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}
        color="inherit"
      >
        I tuoi Dati
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Oname />
          <Oadress />
          <Otelephone />
        </Box>
      </Modal>
    </div>
  );
}