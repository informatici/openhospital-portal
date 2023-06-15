import * as React from 'react';
import { Button, Typography, Container, Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import PatientSmartNav from "../../components/navBars/PatientSmartNav";
import Save from "../../components/common/buttons/Save";


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
    "min_arterial_pressure": [
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
    ],
    "max_arterial_pressure": [
      {
        value: '',
        label: '',
      },
      {
        value: '90',
        label: '90',
      },
      {
        value: '95',
        label: '95',
      },
      {
        value: '100',
        label: '100',
      },
      {
        value: '105',
        label: '105',
      },
      {
        value: '110',
        label: '110',
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


function PatientInsertMeasurements() {

  console.log("--- props --- PatientInsertMeasurements");
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

      {/* {props.setType.type == 'weight' ? <Iweight dataDef={values[0].weight} dataSelected={props.setType.value} /> : null}
      {props.setType.type == 'height' ? <Iheight dataDef={values[0].height} dataSelected={props.setType.value} /> : null}
      {props.setType.type == 'temperature' ? <Itemperature dataDef={values[0].temperature} dataSelected={props.setType.value} /> : null}
      {props.setType.type == 'bowel' ? <Ibowel dataDef={values[0].bowel} dataSelected={props.setType.value} /> : null}
      {props.setType.type == 'heart_rate' ? <Iheart_rate dataDef={values[0].heart_rate} dataSelected={props.setType.value} /> : null}
      {props.setType.type == 'saturation' ? <Isaturation dataDef={values[0].saturation} dataSelected={props.setType.value} /> : null}
      {props.setType.type == 'hgt' ? <Ihgt dataDef={values[0].hgt} dataSelected={props.setType.value} /> : null}
      {props.setType.type == 'ascultation' ? <Iascultation dataDef={values[0].ascultation} dataSelected={props.setType.value} /> : null}
      {props.setType.type == 'respiration_rate' ? <Irespiration_rate dataDef={values[0].respiration_rate} dataSelected={props.setType.value} /> : null}
      {props.setType.type == 'diuresis_vol_24h' ? <Idiuresis_vol_24h dataDef={values[0].diuresis_vol_24h} dataSelected={props.setType.value} /> : null}
      {props.setType.type == 'diuresis' ? <Idiuresis dataDef={values[0].diuresis} dataSelected={props.setType.value} /> : null}
      {props.setType.type == 'pressure' ? <Iarterial_pressure dataDef={{ min: values[0].min_arterial_pressure, max: values[0].max_arterial_pressure }} dataSelected={{min:props.setType.value, max:props.setType.value}} /> : null}
<<<<<<< HEAD

      {props.setType.date && props.setType.hour ? <Idate_time dateSelected={props.setType.date + " " + props.setType.hour} /> : <Idate_time />} */}
      <Save />
    </Container>

  );

};

export default PatientInsertMeasurements;
