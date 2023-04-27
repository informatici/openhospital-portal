import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

import Iarterial_pressure from "../patient/analyses_data/input_data/Iarterial_pressure";
import Itemperature from "../patient/analyses_data/input_data/Itemperature";
import Iheart_rate from "../patient/analyses_data/input_data/Iheart_rate";
import Isaturation from "../patient/analyses_data/input_data/Isaturation";
import Ihgt from "../patient/analyses_data/input_data/Ihgt";
import Iascultation from "../patient/analyses_data/input_data/Iascultation";
import Irespiration_rate from "../patient/analyses_data/input_data/Irespiration_rate";
import Idiuresis_vol_24h from "../patient/analyses_data/input_data/Idiuresis_vol_24h";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InsertPatientDataModal from "./InsertPatientDataModal";


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

export default function ChooseInsertPatientDataModal() {
  const [modal1, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let choosen = [];
  const handleChange = event => {
    if (event.target.checked) {
      choosen.push(event.target.value);
    } else {
      let index = choosen.indexOf(event.target.value);// --- get index by value - return value
      choosen.splice(index, 1);// --- remove from array by index - return array
    }
    console.log(choosen);
  };
  const callbackModal = () => {
    console.log("ee");

    // if (modal.target === "choose") {
    //   setOpen(false);
    // }

  }
  const values = [
    {
      "choose": [
        {
          value: 'Iarterial_pressure',
          label: 'Arterial Pressure',
          disabled: false,
          required: false,
          defaultChecked: false
        },
        {
          value: 'Iascultation',
          label: 'Ascultation',
          disabled: false,
          required: false,
          defaultChecked: false
        },
        {
          value: 'Ibowel',
          label: 'Bowel',
          disabled: false,
          required: false,
          defaultChecked: false
        },
        {
          value: 'Idiuresis_vol_24h',
          label: 'Diuresis vol 24h',
          disabled: false,
          required: false,
          defaultChecked: false
        },
        {
          value: 'Idiuresis',
          label: 'Diuresis',
          disabled: false,
          required: false,
          defaultChecked: false
        },
        {
          value: 'Iheart_rate',
          label: 'Heart Rate',
          disabled: false,
          required: false,
          defaultChecked: false
        },
        {
          value: 'Ihgt',
          label: 'Hgt',
          disabled: false,
          required: false,
          defaultChecked: false
        },
        {
          value: 'Irespiration_rate',
          label: 'Respiration Rate',
          disabled: false,
          required: false,
          defaultChecked: false
        },
        {
          value: 'Isaturation',
          label: 'Saturation',
          disabled: false,
          required: false,
          defaultChecked: false
        },
        {
          value: 'Itemperature',
          label: 'Temperature',
          disabled: false,
          required: false,
          defaultChecked: false
        },
        {
          value: 'Iweight',
          label: 'Weight',
          disabled: false,
          required: false,
          defaultChecked: false
        },
      ]
    },
  ];
  console.log(values[0].choose);
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
        open={modal1}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        target="choose"
      >
        <Box sx={style}>
          <Box component="span"
            display="flex"
            alignItems="center" sx={{ width: 1 }}>
            <Typography variant="h6" component="h2" display="inline" sx={{ width: 0.8 }}>Choose: </Typography>
            <Typography variant="body1" align="right" display="inline" sx={{ width: 0.3 }}>
              <IconButton onClick={handleClose}
                color="primary" aria-label="insert" size="large"
                sx={{}}
              >
                <CloseIcon color="#fff" />
              </IconButton>
            </Typography>

          </Box>
          <FormGroup>
            {values[0].choose.map((data) => {
              return <FormControlLabel control={<Checkbox defaultChecked={data.required} />} label={data.label} value={data.value} disabled={data.disabled} required={data.required} onChange={handleChange} />
            })}
          </FormGroup>
          <InsertPatientDataModal callbackModal={callbackModal} chooseDef={choosen} />
          {/* <Button
            variant="contained"

            sx={{ width: 1, mt: 1 }}
          >
            Go
          </Button> */}
        </Box>
      </Modal>
    </div >
  );
}