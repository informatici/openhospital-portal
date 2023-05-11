import * as React from 'react';
import { Button, Typography, Container, Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import PatientSmartNav from "./../../components/navBars/PatientSmartNav";
import Save from "./../../components/common/buttons/Save";


import Iweight from "../../components/utility/patient/analyses_data/input_data/Iweight";
import Iheight from "../../components/utility/patient/analyses_data/input_data/Iheight";
import Iarterial_pressure from "../../components/utility/patient/analyses_data/input_data/Iarterial_pressure";
import Itemperature from "../../components/utility/patient/analyses_data/input_data/Itemperature";
import Ibowel from "../../components/utility/patient/analyses_data/input_data/Ibowel";
import Iheart_rate from "../../components/utility/patient/analyses_data/input_data/Iheart_rate";
import Isaturation from "../../components/utility/patient/analyses_data/input_data/Isaturation";
import Ihgt from "../../components/utility/patient/analyses_data/input_data/Ihgt";
import Iascultation from "../../components/utility/patient/analyses_data/input_data/Iascultation";
import Irespiration_rate from "../../components/utility/patient/analyses_data/input_data/Irespiration_rate";
import Idiuresis_vol_24h from "../../components/utility/patient/analyses_data/input_data/Idiuresis_vol_24h";
import Idiuresis from "../../components/utility/patient/analyses_data/input_data/Idiuresis";
import Idate_time from "../../components/utility/common/input_data/Idate_time";
const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));
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
    "height": [
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
    "bowel": [
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
    "diuresis": [
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

function PatientInsertMeasurements(props) {


  console.log(props.setType);
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",

      }}
    >
      <PatientSmartNav page={'PatientInsertMeasurements'} />
      {props.setType == 'weight' ? <Iweight dataDef={values[0].weight} /> : null}
      {props.setType == 'height' ? <Iheight dataDef={values[0].height} /> : null}
      {props.setType == 'temperature' ? <Itemperature dataDef={values[0].temperature} /> : null}
      {props.setType == 'bowel' ? <Ibowel dataDef={values[0].bowel} /> : null}
      {props.setType == 'heart_rate' ? <Iheart_rate dataDef={values[0].heart_rate} /> : null}
      {props.setType == 'saturation' ? <Isaturation dataDef={values[0].saturation} /> : null}
      {props.setType == 'hgt' ? <Ihgt dataDef={values[0].hgt} /> : null}
      {props.setType == 'ascultation' ? <Iascultation dataDef={values[0].ascultation} /> : null}
      {props.setType == 'respiration_rate' ? <Irespiration_rate dataDef={values[0].respiration_rate} /> : null}
      {props.setType == 'diuresis_vol_24h' ? <Idiuresis_vol_24h dataDef={values[0].diuresis_vol_24h} /> : null}
      {props.setType == 'diuresis' ? <Idiuresis dataDef={values[0].diuresis} /> : null}
      {props.setType == 'pressure' ? <Iarterial_pressure dataDef={values[0].arterial_pressure} /> : null}
      <Idate_time />
      <Save />
    </Container>

  );

};

export default PatientInsertMeasurements;
