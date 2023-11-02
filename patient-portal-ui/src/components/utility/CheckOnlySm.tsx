import React, { Component } from "react";
import { Button, Typography, Container } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
function CheckOnlySm() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <>            {
            matches ? <>  aaa  </> : <>  bbb  </>
        }
        </>
    );
}

export default CheckOnlySm;