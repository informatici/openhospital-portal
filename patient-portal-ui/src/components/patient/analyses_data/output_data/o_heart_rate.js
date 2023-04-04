import React, { Component } from "react";
import Typography from '@mui/material/Typography';

class o_heart_rate extends Component {
    render() {
        return (
            <div>
                <Typography variant="subtitle2" gutterBottom>
                   Heart Rate
                </Typography>
                <Typography variant="body2" gutterBottom>
                   57 bpm
                </Typography>
            </div>);
    }
}
export default o_heart_rate;