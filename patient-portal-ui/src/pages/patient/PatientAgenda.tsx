import React, { useState, useEffect } from 'react';
import { Button, Typography, Container, Box } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";

import PatientSmartNav from "../../components/navBars/PatientSmartNav";
import PatientNav from "../../components/navBars/PatientNav";
import DoctorSmartNav from "../../components/navBars/DoctorSmartNav";
import { getTimeLab, getDateLab, getDayName } from '../../utils/ManageDate';
import { DefaultAllData } from '../../datajs/DefaultAllData'

var date_obj: never[] = [];
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
interface Items {
  firstName?: string;
  secondName?: string;
  birthDate?: string;
  sex?: string;
  address?: string;
  city?: string;
  telephone?: string;
}
interface dataAgenda {
  dataAgenda?: Items;
  dateDef?: any;
}
let data: dataAgenda = {};
const PatientAgenda = () => {
  const [dataAgenda, setDataAgenda] = useState([]);
  const [dataUser, setDataUser] = useState([]);
  const [typeVisualization, setTypeVisualization] = useState("");
  const [loadComponent, setLoadComponent] = useState(0);
  useEffect(() => {
    let id_patient = localStorage.getItem("IdPatient");
    DefaultAllData.getHospitalEventsByPatientId(id_patient).then((resDataAgenda) => {

      resDataAgenda = resDataAgenda.sort((a: { date: number; }, b: { date: number; }) => (a.date > b.date ? 1 : -1)); // --- sort by date
      // --- get all Date Time from Object
      let arrDateTimeAll: any | null | undefined = [];
      resDataAgenda.forEach((element: { date: string; }) => {
        let dateToInsert = element.date.split(" ");;
        arrDateTimeAll.push(dateToInsert[0])
      });
      arrDateTimeAll = [...new Set(arrDateTimeAll)];
      date_obj = arrDateTimeAll.reduce((acc: any[][], elem: string | number | Date) => {
        const [year, month, day, hour] = [new Date(elem).getFullYear(), new Date(elem).getMonth() + 1, new Date(elem).getDate(), new Date(elem).getHours()];
        acc[year] = acc[year] || {};
        acc[year][month] = [...(acc[year][month] || []), day];
        return acc;
      }, {});
      setDataAgenda(resDataAgenda);
      let id_patient = localStorage.getItem("IdPatient");
      let typeVisualization = localStorage.getItem("typeVisualization");
      DefaultAllData.getPatientsById(id_patient).then((resDataUser) => {
        setDataUser(resDataUser);
      });
      setLoadComponent(1);
      if (typeVisualization == "doctor") {
        setTypeVisualization("doctor");
      } else { setTypeVisualization("patient"); }
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
      {/* {loadComponent ? <><PatientNav {...dataUser} /></> : null} */}
      {loadComponent ? typeVisualization == "doctor" ? <> <DoctorSmartNav /> </> : <> <PatientNav {...dataUser} /></> : null}

      {typeVisualization == "patient" ? <>
        <Box sx={{ mt: 14, width: 1 }}>
          <PatientSmartNav page={'PatientAgenda'} />
        </Box>
      </> : null}
      {typeVisualization == "doctor" ? <>
        <Box sx={{ mt: 0, width: 1 }}>
          <PatientSmartNav page={'PatientAgenda'} />
        </Box>
      </> : null}
      {loadComponent ? <>
        {<div style={{ width: '100%' }}>
          {Object.keys(date_obj).map((ky: any, iy: any) => (
            <div key={iy}>
              <Divider
                textAlign="left"
                sx={{ fontWeight: 'bold', fontSize: "1.4em" }}>
                {ky}
              </Divider>
              {Object.keys(date_obj[ky]).map((km: any, im: any) => (
                <div key={im}>
                  <Divider
                    textAlign="left"
                    sx={{}}>
                    <Typography
                      variant="h5"
                      component="h2"
                      display="inline"
                      sx={{ width: 0.6 }}>{monthNames[km - 1]}</Typography>
                  </Divider>
                  {Object.keys(date_obj[ky][km]).map((kd: any, id: any) => (
                    <Card sx={{ mt: 1, width: 1 }}>
                      <CardContent>
                        <div key={id}>
                          {getDayName(ky + "/" + km + "/" + date_obj[ky][km][kd], "en-EN")}<br></br>
                          <Typography variant="h4" component="h2" display="inline" sx={{ width: 0.2 }}>{date_obj[ky][km][kd]}</Typography>
                          {date_obj[ky][km][kd] != 0 ? (
                            <>
                              {dataAgenda.map((data: any, idx) => (
                                getDateLab(data.date) == getDateLab(ky + "/" + km + "/" + date_obj[ky][km][kd]) ? (

                                  data.eventType.code == "E" ? (
                                    <Button key={data.id} component={Link} state={data} to="/PatientExamDetails" sx={{ width: 1, mt: 1, color: "red" }} variant="outlined" color="primary">
                                      <Typography variant="subtitle1" display="inline" sx={{ width: 0.3 }} >{getTimeLab(data.date)}</Typography>
                                      <Typography variant="button" display="inline" sx={{ width: 0.7 }}>{data.eventType.name} </Typography>
                                    </Button>
                                  ) : data.eventType.code == "O" ? (
                                    <Button key={data.id} component={Link} state={data} to="/PatientVisitDetails" sx={{ width: 1, mt: 1, color: "blue" }} variant="outlined" color="primary">
                                      <Typography variant="subtitle1" display="inline" sx={{ width: 0.3 }} >{getTimeLab(data.date)}</Typography>
                                      <Typography variant="button" display="inline" sx={{ width: 0.7 }}>{data.eventType.name} </Typography>
                                    </Button>
                                  ) : data.eventType.code == "A" ? (
                                    <Button key={data.id} component={Link} state={data} to="/PatientHospitalizationDetails" sx={{ width: 1, mt: 1, color: "green" }} variant="outlined" color="primary">
                                      <Typography variant="subtitle1" display="inline" sx={{ width: 0.3 }} >{getTimeLab(data.date)}</Typography>
                                      <Typography variant="button" display="inline" sx={{ width: 0.7 }}>{data.eventType.name} </Typography>
                                    </Button>
                                  ) : data.eventType.code == "T" ? (
                                    <Button key={data.id} component={Link} state={data} to="/PatientTherapieDetails" sx={{ width: 1, mt: 1, color: "green" }} variant="outlined" color="primary">
                                      <Typography variant="subtitle1" display="inline" sx={{ width: 0.3 }} >{getTimeLab(data.date)}</Typography>
                                      <Typography variant="button" display="inline" sx={{ width: 0.7 }}>{data.eventType.name} </Typography>
                                    </Button>
                                  ) : data.eventType.code == "V" ? (
                                    <Button key={data.id} component={Link} state={data} to="/PatientVaccinationDetails" sx={{ width: 1, mt: 1, color: "green" }} variant="outlined" color="primary">
                                      <Typography variant="subtitle1" display="inline" sx={{ width: 0.3 }} >{getTimeLab(data.date)}</Typography>
                                      <Typography variant="button" display="inline" sx={{ width: 0.7 }}>{data.eventType.name} </Typography>
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
        </div>}
      </> : null}
    </Container>
  );
};
export default PatientAgenda;