import React, { useState, useEffect } from 'react';
import { Button, Typography, Container } from "@mui/material";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';

import { Link } from "react-router-dom";

import PatientSmartNav from "./../../components/navBars/PatientSmartNav";

import Agenda from '../../datajs/Agenda'
import { getTimeLab, getDateLab, compare, getDayName } from '../../utils/ManageDate';
import { DeafutlAllData } from '../../datajs/DeafutlAllData'

var date_obj = [];
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const PatientAgenda = ({ setAuth }) => {
  const [dataa, setData] = useState([]);
  const [loadComponent, setLoadComponent] = useState(0);
  useEffect(() => {
    let id_patient = localStorage.getItem("IdPatient");
    DeafutlAllData.getHospitalEventsByPatientId(id_patient).then((res) => {
      res = res.sort((a, b) => (a.date > b.date ? 1 : -1)); // --- sort by date
      // --- get all Date Time from Object
      let arrDateTimeAll = [];
      res.forEach(element => {
        let dateToInsert = element.date.split(" ");;
        arrDateTimeAll.push(dateToInsert[0])

      });
      arrDateTimeAll = [...new Set(arrDateTimeAll)];
      date_obj = arrDateTimeAll.reduce((acc, elem) => {
        const [year, month, day, hour] = [new Date(elem).getFullYear(), new Date(elem).getMonth() + 1, new Date(elem).getDate(), new Date(elem).getHours()];
        acc[year] = acc[year] || {};
        acc[year][month] = [...(acc[year][month] || []), day];
        return acc;
      }, {});
      setData(res);
      setLoadComponent(1);
    });
  }, []);
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
      <PatientSmartNav page={'PatientAgenda'} />
      {loadComponent ? <>
        <div style={{ width: '100%' }}>
          {Object.keys(date_obj).map((ky, iy) => (
            <div key={iy}>
              <Divider textAlign="left" sx={{
                fontWeight: 'bold',
                fontSize: "1.4em"
              }}>{ky}</Divider>
              {Object.keys(date_obj[ky]).map((km, im) => (
                <div km={im}>
                  <Divider textAlign="left" sx={{
                  }}><Typography variant="h5" component="h2" display="inline" sx={{ width: 0.6 }}>{monthNames[km - 1]}</Typography></Divider>
                  {date_obj[ky][km].map((kd, id) => (
                    <Card sx={{ mt: 1, width: 1 }}>
                      <CardContent>
                        <div kd={id}>
                          {getDayName(ky + "/" + km + "/" + kd, "en-EN")}<br></br>
                          <Typography variant="h4" component="h2" display="inline" sx={{ width: 0.2 }}>{kd}</Typography>
                          {kd != 0 ? (
                            <>
                              {dataa.map((data, idx) => (

                                getDateLab(data.date) == getDateLab(ky + "/" + km + "/" + kd) ? (

                                  data.eventType.code == "E" ? (
                                    <Button key={data.id} component={Link} state={data} to="/PatientExamDetails" sx={{ width: 1, mt: 1, color: "red" }} variant="outlined" color="primary">
                                      <Typography variant="subtitle1" display="inline" sx={{ width: 0.3 }} >{getTimeLab(data.date)}</Typography>
                                      <Typography variant="button " display="inline" sx={{ width: 0.7 }}>{data.eventType.name} </Typography>
                                    </Button>
                                  ) : data.eventType.code == "O" ? (
                                    <Button key={data.id} component={Link} state={data} to="/PatientVisitDetails" sx={{ width: 1, mt: 1, color: "blue" }} variant="outlined" color="primary">
                                      <Typography variant="subtitle1" display="inline" sx={{ width: 0.3 }} >{getTimeLab(data.date)}</Typography>
                                      <Typography variant="button " display="inline" sx={{ width: 0.7 }}>{data.eventType.name} </Typography>
                                    </Button>
                                  ) : data.eventType.code == "A" ? (
                                    <Button key={data.id} component={Link} state={data} to="/PatientHospitalizationDetails" sx={{ width: 1, mt: 1, color: "green" }} variant="outlined" color="primary">
                                      <Typography variant="subtitle1" display="inline" sx={{ width: 0.3 }} >{getTimeLab(data.date)}</Typography>
                                      <Typography variant="button " display="inline" sx={{ width: 0.7 }}>{data.eventType.name} </Typography>
                                    </Button>
                                  ) : data.eventType.code == "T" ? (
                                    <Button key={data.id} component={Link} state={data} to="/PatientTherapieDetails" sx={{ width: 1, mt: 1, color: "green" }} variant="outlined" color="primary">
                                      <Typography variant="subtitle1" display="inline" sx={{ width: 0.3 }} >{getTimeLab(data.date)}</Typography>
                                      <Typography variant="button " display="inline" sx={{ width: 0.7 }}>{data.eventType.name} </Typography>
                                    </Button>
                                  ) : data.eventType.code == "V" ? (
                                    <Button key={data.id} component={Link} state={data} to="/PatientVaccinationDetails" sx={{ width: 1, mt: 1, color: "green" }} variant="outlined" color="primary">
                                      <Typography variant="subtitle1" display="inline" sx={{ width: 0.3 }} >{getTimeLab(data.date)}</Typography>
                                      <Typography variant="button " display="inline" sx={{ width: 0.7 }}>{data.eventType.name} </Typography>
                                    </Button>
                                  ) : null
                                ) : (
                                  null
                                )
                              ))}

                            </>
                          ) : (
                            null
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </> : null}
    </Container>
  );
};
export default PatientAgenda;