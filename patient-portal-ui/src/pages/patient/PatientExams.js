import * as React from 'react';
import { Button, Typography, Container, Box } from "@mui/material";
import PatientSmartNav from "./../../components/navBars/PatientSmartNav";
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from "react-router-dom";
import ButtonGroup from '@mui/material/ButtonGroup';
let rows = [];
const values = [
  {
    "xy1457fff": {
      exams: [
        {
          id_measure: "132",
          date: "2023-08-12T18:45:00",
          value: '93',
          note: 'note note note',
          type: 'tipo 1',
        },
        {
          id_measure: "132",
          date: "2023-08-15T18:45:00",
          value: '93,5',
          note: 'note note note',
          type: 'tipo 2',
        },
        {
          id_measure: "132",
          date: "2023-08-21T18:45:00",
          value: '93',
          note: 'note note note',
          type: 'tipo 3',
        },
        {
          id_measure: "132",
          date: "2023-08-26T18:45:00",
          value: '94',
          note: 'note note note',
          type: 'tipo 4',
        },
      ],
    },
    "xy1457uuu": {
      exams: [
        {
          id_measure: "132",
          date: "2023-04-12T18:45:00",
          value: '11',
          note: 'note note note',
          type: 'tipo a',
        },
        {
          id_measure: "132",
          date: "2023-03-15T18:45:00",
          value: '15',
          note: 'note note note',
          type: 'tipo b',
        },
        {
          id_measure: "132",
          date: "2023-02-15T18:45:00",
          value: '22',
          note: 'note note note',
          type: 'tipo c',
        },
        {
          id_measure: "132",
          date: "2021-08-15T18:45:00",
          value: '12',
          note: 'note note note',
          type: 'tipo b',
        },
        {
          id_measure: "132",
          date: "2020-06-20T18:48:02",
          value: '13',
          note: 'note note note',
          type: 'tipo e',
        },
        {
          id_measure: "132",
          date: "2020-06-20T18:48:01",
          value: '14',
          note: 'note note note',
          type: 'tipo d',
        },
      ],
    },
  },
];
const columns = [
  { field: 'id', headerName: 'ID', width: 0, hide: true },
  { field: 'id_measure', headerName: 'Id_measure', width: 0, hide: true },
  { field: 'date', headerName: 'Data', width: 110 },
  { field: 'hour', headerName: 'Hour', width: 70 },
  { field: 'value', headerName: 'Value', width: 70 },
  { field: 'misure', headerName: 'Misure', width: 180 },
  { field: 'type', headerName: 'Type', width: 180 },
];

const getTimeLab = (date_to_c) => {
  let res = new Date(date_to_c);
  res = res.getHours() + ':' + res.getMinutes();
  return res;
};
const getDateLab = (date_to_c) => {
  const t = new Date(date_to_c);
  let y = t.getFullYear();
  let m = t.getMonth() + 1; // Months start at 0!
  let d = t.getDate();
  if (d < 10) d = '0' + d;
  if (m < 10) m = '0' + m;
  let res = d + '/' + m + '/' + y;

  return res;
};

let btFilters = [];
let data_values = values[0]["xy1457uuu"];
Object.keys(data_values).forEach(function (key) {
  data_values[key].forEach(function (k) {
    if (!btFilters.includes(k.type)) {
      btFilters.push(k.type);
    }
  });
  rows.push([data_values[key].map((e, i) => ({ id: "", id_measure: e.id_measure, date_complete: e.date, date: getDateLab(e.date), hour: getTimeLab(e.date), value: e.value, misure: (key), type: e.type }))])
});
rows = rows.flat(2);
Object.keys(rows).forEach(function (key, value) {
  rows[key].id = key;
});
let rows_def = rows.sort(compare);
function compare(a, b) {
  if (a.date_complete < b.date_complete) {
    return -1;
  }
  if (a.date_complete > b.date_complete) {
    return 1;
  }
  return 0;
}
const PatientExams = ({ setAuth }) => {
  const [type, setType] = React.useState(null);
  console.log(type);
  if (type != null) {
    rows = rows_def.filter(function (el) {
      return el.type == type
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
      <PatientSmartNav page={'PatientExams'} />
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
            {btFilters.map((button) => (
              <Button key={button} color="primary" onClick={() => setType(button)}>{button}</Button>
            ))}
          </ButtonGroup>
        </Box>
        <DataGrid
          onCellClick={(params, event) => {
            if (!event.ctrlKey) {
              navigate("/PatientExamDetails", {
                state: params.row,
              })
            }
          }}
          initialState={{
            columns: {
              fontSize: 17,
              sx: { fontSize: 17 },
              columnVisibilityModel: {
                id: false,
                date_complete: false,
                id_measure: false,
                value: false,
                misure: false,
              },
            },
          }}
          size="medium"
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </Container>
  );

};

export default PatientExams;
