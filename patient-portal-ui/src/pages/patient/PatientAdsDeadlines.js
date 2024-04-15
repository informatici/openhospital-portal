import * as React from 'react';
import { Button, Typography, Container } from "@mui/material";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Padsd from '../../datajs/Padsd'


import { Link } from "react-router-dom";

import PatientSmartNav from "./../../components/navBars/PatientSmartNav";
const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));
let data_json=Padsd;
let arrDateTime = [];
let arrDate = [];
let arrDateYear = [];
let arrDateMonth = [];
let arrDateDay = [];
let data_values = data_json[0]["xy1457fff"];
const arrKeys = Object.keys(data_values);
// --- get all Date Time from Object
arrKeys.forEach(element => {
  data_values[element].map((d, i) => (
    arrDateTime.push(d.date_time),
    arrDate.push(d.date_time.substring(0, 10)),
    arrDateYear.push(d.date_time.substring(0, 4)),
    arrDateMonth.push(d.date_time.substring(5, 7)),
    arrDateDay.push(d.date_time.substring(8, 10))
  ));
});
// --- remove duplicate
arrDateTime = arrDateTime.filter((x, i) => arrDateTime.indexOf(x) === i);
arrDate = arrDate.filter((x, i) => arrDate.indexOf(x) === i);
arrDateYear = arrDateYear.filter((x, i) => arrDateYear.indexOf(x) === i);
arrDateMonth = arrDateMonth.filter((x, i) => arrDateMonth.indexOf(x) === i);
arrDateDay = arrDateDay.filter((x, i) => arrDateDay.indexOf(x) === i);
// --- sorting
let arrDateTimeSorted = arrDateTime.sort();
let arrDateSorted = arrDate.sort();
let arrDateYearSorted = arrDateYear.sort();
let arrDateMonthSorted = arrDateMonth.sort();
let arrDateDaySorted = arrDateDay.sort();
// arrDateSorted= arrDateSorted.reverse();
// console.log(arrDateTimeSorted);
// console.log(arrDateYearSorted);-----
// const myObject = sortedAsc(values[0]["xy1457uuu"].filter(e => e.hasOwnProperty(date_time)));
var date_obj = arrDateTime.reduce((acc, elem) => {
  const [year, month, day, hour] = [new Date(elem).getFullYear(), new Date(elem).getMonth() + 1, new Date(elem).getDate(), new Date(elem).getHours()];
  acc[year] = acc[year] || {};
  acc[year][month] = [...(acc[year][month] || []), day];
  return acc;
}, {});
// console.log(date_obj);
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const d = new Date();
const getDateLab = (date_to_c) => {
  const t = new Date(date_to_c);
  let y = t.getFullYear();
  let m = t.getMonth() + 1; // Months start at 0!
  let d = t.getDate();
  if (d < 10) d = '0' + d;
  if (m < 10) m = '0' + m;
  let res = d + m + y;
  return res;
};
const getTimeLab = (date_to_c) => {
  let res = new Date(date_to_c);
  res = res.getHours() + ':' + res.getMinutes();
  return res;
};
function getDayName(dateStr, locale) {
  var date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: 'long' });
}
const PatientAdsDeadlines = ({ setAuth }) => {
  // console.log(loopData);
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
      <PatientSmartNav page={'PatientAdsDeadlines'} />
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
                            {data_values.payment.map((data, idx) => (
                              getDateLab(data.date_time) == getDateLab(ky + "/" + km + "/" + kd) ? (
                                <Button component={Link} to="/PatientExams" sx={{ width: 1, mt: 1, color: "red" }} variant="outlined" color="primary">
                                  <Typography variant="subtitle1" display="inline" sx={{ width: 0.3 }} >{getTimeLab(data.date_time)}</Typography>
                                  <Typography variant="button " display="inline" sx={{ width: 0.7 }}>{data.category} </Typography>
                                </Button>
                              ) : (
                                null
                              )
                            ))}
                            {data_values.visit.map((data, idx) => (
                              getDateLab(data.date_time) == getDateLab(ky + "/" + km + "/" + kd) ? (
                                // data.date_time == data.date_time ? (
                                <Button component={Link} to="/PatientExams" sx={{ width: 1, mt: 1, color: "blue" }} variant="outlined" color="primary">
                                  <Typography variant="subtitle1" display="inline" sx={{ width: 0.3 }} >{getTimeLab(data.date_time)}</Typography>
                                  <Typography variant="button " display="inline" sx={{ width: 0.7 }}>{data.category} </Typography>
                                </Button>
                              ) : (
                                null
                              )
                            ))}
                            {data_values.recovery.map((data, idx) => (
                              getDateLab(data.date_time) == getDateLab(ky + "/" + km + "/" + kd) ? (
                                // data.date_time == data.date_time ? (
                                <Button component={Link} to="/PatientExams" sx={{ width: 1, mt: 1, color: "green" }} variant="outlined" color="primary">
                                  <Typography variant="subtitle1" display="inline" sx={{ width: 0.3 }} >{getTimeLab(data.date_time)}</Typography>
                                  <Typography variant="button " display="inline" sx={{ width: 0.7 }}>{data.category} </Typography>
                                </Button>
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
    </Container>
  );
};
export default PatientAdsDeadlines;
function sortedAsc(obj) {
  let sortedAsc = obj.sort(function (a, b) {
    var c = new Date(a.date_time);
    var d = new Date(b.date_time);
    if (c > d) return -1;
    if (c < d) return 1;
  });
  return sortedAsc;
}