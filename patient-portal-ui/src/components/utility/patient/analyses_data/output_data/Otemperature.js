import React, { Component } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import AddIcon from '@mui/icons-material/Add';

function createData(date, value) {
    return { date, value };
}

const rows = [
    createData('2023/03/31', 159,),
    createData('2023/03/25', 237),
    createData('2023/03/24', 262),
    createData('2023/03/15', 305),
    createData('2023/02/27', 133),
];

class Otemperature extends Component {
    render() {
        return (
            <div>
                <Accordion sx={{ width: 1, mt: 1 }} >
                    <AccordionSummary sx={{ width: 1, p: 0.1, m: 0.1 }}
                        aria-controls="panel_annsca-content"
                        id="panel_annsca-header"
                    >
                        <Typography variant="body1" align="right" display="inline" sx={{ padding: 0 }}><AddIcon sx={{ mr: 2 }} /></Typography>
                        <Typography variant="body1" display="inline" sx={{ padding: 0 }}>Last Temperature: 2023/03/25</Typography>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', ml: 1, padding: 0 }} display="inline">37°</Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                        <TableContainer component={Paper}>
                            <Table sx={{ maxWidth: 1 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Value</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                        >
                                            <TableCell>{row.date}</TableCell>
                                            <TableCell>{row.value}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </AccordionDetails>
                </Accordion>
            </div>);
    }
}
export default Otemperature;