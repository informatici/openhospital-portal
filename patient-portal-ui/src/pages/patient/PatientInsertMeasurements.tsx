import React, { useState, useEffect } from 'react';
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

import { filterRecordTypesByValue, filterRecordTypesByValueDef, filterRecordTypesByValueRet } from '../../utils/ManageDate';
import { DefaultAllData } from '../../datajs/DefaultAllData';

interface Items {
  id?: string;
  id_measure?: string;
  date_complete?: string;
  date?: string;
  hour?: string;
  value?: string;
  misure?: string;
  type?: string;
  code?: string;
  defaultOptionValue?: string | null;
  defaultValue1?: number;
  defaultValue2?: number;
  maxValue?: number | string;
  measurementType?: string;
  measurementValueType?: string;
  minValue?: number | string;
  uom?: string;
}
function PatientInsertMeasurements(props: {
  setType: Items
}) {

  const [data, setData] = React.useState<Items | null | [] | Items[]>(null);
  const [type, setType] = React.useState<string>("");
  const [loadComponent, setLoadComponent] = useState(0);
  const [loadComponent_a, setLoadComponent_a] = useState(0);
  const [loadComponent_b, setLoadComponent_b] = useState(0);
  const [loadComponent_d, setLoadComponent_d] = useState(0);

  useEffect(() => {
    DefaultAllData.getRecordTypes().then((res) => {
      if (props.setType.id == null) {
        setData(res);
        setType("");
      } else {
        let arr: Items[] = [props.setType];
        setData(arr);

        setType("edit/delete");
      }
      setLoadComponent(1);
    });
  }, []);
  useEffect(() => {
    DefaultAllData.getAuscultationoptions().then((res) => {
      let json_res = [{
      }];
      for (let i in res) {
        json_res.push({
          "label": res[i],
          "value": i,
        });
      }
      setOptionAu(json_res);
      setLoadComponent_a(1);
    });
    DefaultAllData.getBoweloptions().then((res) => {
      let json_res = [{
      }];
      for (let i in res) {

        json_res.push({
          "label": res[i],
          "value": i,
        });
      }
      setOptionBo(json_res);
      setLoadComponent_b(1);
    });
    DefaultAllData.getDiuresisoptions().then((res) => {
      let json_res = [{
      }];
      for (let i in res) {

        json_res.push({
          "label": res[i],
          "value": i,
        });
      }

      setOptionDi(json_res);
      setLoadComponent_d(1);
    });
  }, []);
  const [message, setMessage] = React.useState("");
  const [editTF, setEditTF] = React.useState(false);
  const [deleteTF, setDeleteTF] = React.useState(false);
  const [optionAu, setOptionAu] = React.useState({});
  const [optionBo, setOptionBo] = React.useState({});
  const [optionDi, setOptionDi] = React.useState({});
  const editBtClk = (editTF: boolean | ((prevState: boolean) => boolean)) => {
    setEditTF(editTF);
  };
  const deleteBtClk = (deleteTF: boolean | ((prevState: boolean) => boolean)) => {
    setDeleteTF(deleteTF);
  };

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

      {loadComponent && loadComponent_a && loadComponent_b && loadComponent_d ? <>
        <PatientSmartNav page={'PatientInsertMeasurements'} type={type} editBtClk={editBtClk} deleteBtClk={deleteBtClk} /><h1>{message}</h1>
        {props.setType.type == 'weight' ? <Iweight dataDef={filterRecordTypesByValueRet(data, "W")} edit={editTF} delete={deleteTF} /> : null}
        {props.setType.type == 'height' ? <Iheight dataDef={filterRecordTypesByValueRet(data, "H")} edit={editTF} delete={deleteTF} /> : null}
        {props.setType.type == 'temperature' ? <Itemperature dataDef={filterRecordTypesByValueRet(data, "TEMP")} edit={editTF} delete={deleteTF} /> : null}
        {props.setType.type == 'heart_rate' || props.setType.type == 'hr' ? <Iheart_rate dataDef={filterRecordTypesByValueRet(data, "HR")} edit={editTF} delete={deleteTF} /> : null}
        {props.setType.type == 'saturation' ? <Isaturation dataDef={filterRecordTypesByValueRet(data, "SAT")} /> : null}
        {props.setType.type == 'hgt' ? <Ihgt dataDef={filterRecordTypesByValueRet(data, "HGT")} edit={editTF} delete={deleteTF} /> : null}

        {props.setType.type == 'respiration_rate' ? <Irespiration_rate dataDef={filterRecordTypesByValueRet(data, "RR")} edit={editTF} delete={deleteTF} /> : null}
        {props.setType.type == 'diuresis_vol_24h' ? <Idiuresis_vol_24h dataDef={filterRecordTypesByValueRet(data, "DIUR_V")} edit={editTF} delete={deleteTF} /> : null}

        {props.setType.type == 'bowel' ? <Ibowel dataDef={filterRecordTypesByValueRet(data, "BWL")} edit={editTF} delete={deleteTF} option={optionBo} /> : null}
        {props.setType.type == 'diuresis' ? <Idiuresis dataDef={filterRecordTypesByValueRet(data, "DIUR")} edit={editTF} delete={deleteTF} option={optionDi} /> : null}
        {props.setType.type == 'ascultation' || props.setType.type == "auscultation" ? <Iascultation dataDef={filterRecordTypesByValueRet(data, "AUSC")} edit={editTF} delete={deleteTF} option={optionAu} /> : null}

        {props.setType.type == 'pressure' || props.setType.type == 'bp' || props.setType.type == 'blood_pressure' ? <Iarterial_pressure dataDef={filterRecordTypesByValueRet(data, "BP")} edit={editTF} delete={deleteTF} /> : null}

        {/* {props.setType.type == 'pressure' ? <Iarterial_pressure dataDef={{ min: values[0].min_arterial_pressure, max: values[0].max_arterial_pressure }} dataSelected={{ min: props.setType.value, max: props.setType.value }} /> : null}*/}
        <Save edit={editTF} type={type} />
      </> : null}





    </Container>

  );

};

export default PatientInsertMeasurements;
