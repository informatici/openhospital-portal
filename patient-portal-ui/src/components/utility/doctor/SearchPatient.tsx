import React, { Component } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { ButtonBase } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from '@mui/material/MenuItem';
import { Button, Typography, Container, TextField, Box } from "@mui/material";

export default function Iweight(props: {
    sendDataToParent?: any
}) {
    const handleChange = (event: { target: { value: any; }; }) => {
        props.sendDataToParent(event.target.value);
    };
    return (
        // --- TODO search by surname or name or id?
        <TextField
            id="search"
            type="search"
            // label="Search Patient by Name/Id"
            label="Search Patient by Name"
            onChange={handleChange}
            sx={{ width: 1 }}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
        />

    )
}