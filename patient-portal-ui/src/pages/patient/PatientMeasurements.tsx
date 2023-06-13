import * as React from 'react';
import { Button, Container, Box } from "@mui/material";
import PatientSmartNav from "../../components/navBars/PatientSmartNav";
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";
import ButtonGroup from '@mui/material/ButtonGroup';
import Misure from '../../datajs/Misure'
let rows: any[] = [];
const values = Misure;

const columns = [
  { field: 'id', headerName: 'ID', width: 0, hide: true },
  { field: 'id_measure', headerName: 'Id_measure', width: 0, hide: true },
  { field: 'date', headerName: 'Data', width: 110 },
  { field: 'hour', headerName: 'Hour', width: 70 },
  { field: 'value', headerName: 'Value', width: 70 },
  { field: 'misure', headerName: 'Misure', width: 180 },
  { field: 'type', headerName: 'Type', width: 180 },
];

const getTimeLab = (date_to_c: string | number | Date) => {
  let res: string | number | Date = new Date(date_to_c);
  res = res.getHours() + ':' + res.getMinutes();
  return res;
};
const getDateLab = (date_to_c: string | number | Date) => {
  const t = new Date(date_to_c);
  let y: string | number | Date = t.getFullYear();
  let m: string | number | Date = t.getMonth() + 1; // Months start at 0!
  let d: string | number | Date = t.getDate();
  if (d < 10) d = '0' + d;
  if (m < 10) m = '0' + m;
  let res = d + '/' + m + '/' + y;

  return res;
};

let btFilters: string[] = [];
Object.keys(values[0]["xy1457uuu"]).forEach(function (key) {
  btFilters.push(key);
  // rows.push([values[0]["xy1457uuu"][key].map((e: { id_measure: any; date: string | number | Date; value: any; }) => ({ id: "", id_measure: e.id_measure, date_complete: e.date, date: getDateLab(e.date), hour: getTimeLab(e.date), value: e.value, misure: (key), type: (key) }))])
});
rows = rows.flat(2);
Object.keys(rows).forEach(function (key, value) {
  // rows[key].id = key;
});
let rows_def = rows.sort(compare);
function compare(a: { date_complete: number; }, b: { date_complete: number; }) {
  if (a.date_complete < b.date_complete) {
    return -1;
  }
  if (a.date_complete > b.date_complete) {
    return 1;
  }
  return 0;
}
const PatientMeasurements = () => {
  const [type, setType] = React.useState(null);
  console.log(type);
  if (type != null) {
    rows = rows_def.filter(function (el: { type: any; }) {
      return el.type === type
    });
  } else {
    rows = rows_def;
  }
  console.log(rows);
  if (rows) {
    // rows.sort(compare);
  }
  let navigate = useNavigate();
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
      <PatientSmartNav page={'PatientMeasurements'} />
      <div style={{ width: '100%', height: '600px' }}>
        <Box
          sx={{
            overflowX: "scroll",
            width: 1,
            // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
          }}
        >
          <ButtonGroup sx={{ mt: 1, mb: 1, overflowX: "scroll", }} variant="outlined" aria-label="outlined button group">
            <Button key="all" color="primary" onClick={() => setType(null)}>All</Button>
            {btFilters.map((bt_el) => (
              //  <Button key={bt_el} color="primary" onClick={() => setType(bt_el)}>{bt_el}</Button>
              <Button key={bt_el} color="primary" >{bt_el}</Button>
            ))}
          </ButtonGroup>
        </Box>
        <DataGrid
          onCellClick={(params, event) => {
            if (!event.ctrlKey) {
              navigate("/PatientInsertMeasurements", {
                state: params.row,
              })
            }
          }}
          initialState={{
            columns: {
              columnVisibilityModel: {
                id: false,
                date_complete: false,
                id_measure: false,
                value: false,
                type: false,
              },
            },
          }}

          rows={rows}
          columns={columns}
        />
      </div>
    </Container>
  );

};

export default PatientMeasurements;
