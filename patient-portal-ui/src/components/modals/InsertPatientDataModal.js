import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import Iarterial_pressure from "../utility/patient/analyses_data/input_data/Iarterial_pressure";
import Itemperature from "../utility/patient/analyses_data/input_data/Itemperature";
import Iheart_rate from "../utility/patient/analyses_data/input_data/Iheart_rate";
import Isaturation from "../utility/patient/analyses_data/input_data/Isaturation";
import Ihgt from "../utility/patient/analyses_data/input_data/Ihgt";
import Iascultation from "../utility/patient/analyses_data/input_data/Iascultation";
import Irespiration_rate from "../utility/patient/analyses_data/input_data/Irespiration_rate";
import Idiuresis_vol_24h from "../utility/patient/analyses_data/input_data/Idiuresis_vol_24h";



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
  minHeight: "90%",
  p: 4,
};

export default function InsertPatientDataModal(props) {
  const [modal2, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => setOpen(false);

  const closeButtonClickHandler = () => {
    props.callbackModal();
  }
  const clickHandler = event => {
    handleOpen();
  };
  const values = [
    {
      "temperature": [
        {
          value: '',
          label: '',
        },
        {
          value: '33',
          label: '33',
        },
        {
          value: '34',
          label: '34',
        },
        {
          value: '35',
          label: '35',
        },
        {
          value: '36',
          label: '36',
        },
        {
          value: '37',
          label: '37',
        },
      ],
      "hgt": [
        {
          value: '',
          label: '',
        },
        {
          value: '10',
          label: '10',
        },
        {
          value: '11',
          label: '11',
        },
        {
          value: '12',
          label: '12',
        },
        {
          value: '13',
          label: '13',
        },
        {
          value: '45',
          label: '45',
        },
      ],
      "heart_rate": [
        {
          value: '',
          label: '',
        },
        {
          value: '10',
          label: '10',
        },
        {
          value: '11',
          label: '11',
        },
        {
          value: '12',
          label: '12',
        },
        {
          value: '13',
          label: '13',
        },
        {
          value: '45',
          label: '45',
        },
      ],
      "saturation": [
        {
          value: '',
          label: '',
        },
        {
          value: '93',
          label: '93',
        },
        {
          value: '94',
          label: '94',
        },
        {
          value: '95',
          label: '95',
        },
        {
          value: '96',
          label: '96',
        },
        {
          value: '97',
          label: '97',
        },
      ],
      "weight": [
        {
          value: '',
          label: '',
        },
        {
          value: '93',
          label: '93',
        },
        {
          value: '94',
          label: '94',
        },
        {
          value: '95',
          label: '95',
        },
        {
          value: '96',
          label: '96',
        },
        {
          value: '97',
          label: '97',
        },
      ],
      "ascultation": [
        {
          value: '',
          label: '',
        },
        {
          value: '93',
          label: '93',
        },
        {
          value: '94',
          label: '94',
        },
        {
          value: '95',
          label: '95',
        },
        {
          value: '96',
          label: '96',
        },
        {
          value: '97',
          label: '97',
        },
      ],
      "diuresis_vol_24h": [
        {
          value: '',
          label: '',
        },
        {
          value: '93',
          label: '93',
        },
        {
          value: '94',
          label: '94',
        },
        {
          value: '95',
          label: '95',
        },
        {
          value: '96',
          label: '96',
        },
        {
          value: '97',
          label: '97',
        },
      ],
      "respiration_rate": [
        {
          value: '',
          label: '',
        },
        {
          value: '93',
          label: '93',
        },
        {
          value: '94',
          label: '94',
        },
        {
          value: '95',
          label: '95',
        },
        {
          value: '96',
          label: '96',
        },
        {
          value: '97',
          label: '97',
        },
      ],
    },
  ];
  return (
    <div>
      <Button
        onClick={clickHandler}
        variant="contained"
        sx={{ width: 1, mt: 1 }}
      >
        Go
      </Button>
      <Modal
        open={modal2}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box component="span"
            display="flex"
            alignItems="center" sx={{ width: 1 }}>
            <Typography variant="h6" component="h2" display="inline" sx={{ width: 0.8 }}>Insert Data: </Typography>
            <Typography variant="body1" align="right" display="inline" sx={{ width: 0.3 }}>
              <IconButton onClick={handleClose}
                color="primary" aria-label="insert" size="large"
                sx={{}}
              >
                <CloseIcon color="#fff" />
              </IconButton>
            </Typography>

          </Box>

          {props.chooseDef.includes('Itemperature') ? <Itemperature dataDef={values[0].temperature} /> : null}
          {props.chooseDef.includes('Iheart_rate') ? <Iheart_rate dataDef={values[0].heart_rate} /> : null}
          {props.chooseDef.includes('Isaturation') ? <Isaturation dataDef={values[0].saturation} /> : null}
          {props.chooseDef.includes('Ihgt') ? <Ihgt dataDef={values[0].hgt} /> : null}
          {props.chooseDef.includes('Iascultation') ? <Iascultation dataDef={values[0].ascultation} /> : null}
          {props.chooseDef.includes('Irespiration_rate') ? <Irespiration_rate dataDef={values[0].respiration_rate} /> : null}
          {props.chooseDef.includes('Idiuresis_vol_24h') ? <Idiuresis_vol_24h dataDef={values[0].diuresis_vol_24h} /> : null}
          {/* {props.chooseDef.includes('Iarterial_pressure') ? <Itemperature dataDef={values[0].temperature} /> : null} */}

          <Button
            variant="contained"
            sx={{ width: 1, mt: 1 }}
          >
            Salva
          </Button>
        </Box>
      </Modal>
    </div>
  );
}