import React, { Component } from "react";
import Typography from '@mui/material/Typography';

class o_arterial_pressure extends Component {
    render() {
        return (
            <div>
                <Typography variant="subtitle2" gutterBottom>
                   Min
                </Typography>
                <Typography variant="body2" gutterBottom>
                   70 Kg
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                   Max
                </Typography>
                <Typography variant="body2" gutterBottom>
                   156 Kg
                </Typography>
            </div>);
    }
}
export default o_arterial_pressure;