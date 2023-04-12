import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

import Itemperature from "../patient/analyses_data/input_data/Itemperature";
import Iheart_rate from "../patient/analyses_data/input_data/Iheart_rate";
import Isaturation from "../patient/analyses_data/input_data/Isaturation";
import Ihgt from "../patient/analyses_data/input_data/Ihgt";
import Iascultation from "../patient/analyses_data/input_data/Iascultation";
import Irespiration_rate from "../patient/analyses_data/input_data/Irespiration_rate";
import Idiuresis_vol_24h from "../patient/analyses_data/input_data/Idiuresis_vol_24h";



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  overflowY: "scroll",
  boxShadow: 24,
  maxHeight: "90%",
  p: 4,
};

export default function InsertPatientDataModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>

      <IconButton onClick={handleOpen}
        variant="outlined"
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ ml: 10 }}
      >
        <AddIcon color="#fff" />
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Insert Data
          </Typography>
          <Itemperature />
          <Iheart_rate />
          <Isaturation />
          <Ihgt />
          <Iascultation />
          <Irespiration_rate />
          <Idiuresis_vol_24h />
          <Button
            variant="contained"
            
            sx={{ width: 1, mt:1 }}
          >
            Salva
          </Button>
        </Box>
      </Modal>
    </div>
  );
}