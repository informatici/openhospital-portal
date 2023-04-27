import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Oname from "../patient/registry_data/output_data/Oname";
import Oadress from "../patient/registry_data/output_data/Oadress";
import Otemperature from "../patient/analyses_data/output_data/Otemperature";
import Oheart_rate from "../patient/analyses_data/output_data/Oheart_rate";
import Osaturation from "../patient/analyses_data/output_data/Osaturation";
import Otelephone from "../patient/registry_data/output_data/Otelephone";
import Ohgt from "../patient/analyses_data/output_data/Ohgt";
import Oascultation from "../patient/analyses_data/output_data/Oascultation";
import Orespiration_rate from "../patient/analyses_data/output_data/Orespiration_rate";
import Odiuresis_vol_24h from "../patient/analyses_data/output_data/Odiuresis_vol_24h";

import Obowel from "../patient/analyses_data/output_data/Obowel";



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
export default function VisualPatientDataModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  return (
    <div>
      <Button onClick={handleOpen}
        color="inherit"
        sx={{ width: 1 }}
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
          <Oadress  />
          <Otelephone />
          <Oheart_rate />
          <Otemperature />
          <Osaturation />
          <Odiuresis_vol_24h />
          <Orespiration_rate />
          <Ohgt />
        </Box>
      </Modal>
    </div>
  );
}