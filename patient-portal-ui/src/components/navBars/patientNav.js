import React, { Component } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fab from "@mui/material/Fab";
// import Box from '@mui/material/Box';
// import AddIcon from "@mui/material";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import I_height from "./../patient/input_data/i_height";
import I_arterial_pressure from "./../patient/input_data/i_arterial_pressure";
import I_temperature from "./../patient/input_data/i_temperature";

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '0px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                p: 0,
                m: 1,
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}

Item.propTypes = {
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};
class patientNav extends Component {
    render() {
        return (

            <div style={{ width: '100%' }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                    <Item>
                        <Accordion  >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>I tuoi Dati</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <I_height />
                                <I_arterial_pressure />
                                <I_temperature />
                                <Typography>
                                    Nome
                                    Cognome
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Item>
                    <Item>
                        <Fab color="primary" aria-label="add">
                            {/* <AddIcon /> */}
                        </Fab>
                    </Item>
                    <Item>3</Item>
                </Box>
            </div>);
    }
}
export default patientNav;