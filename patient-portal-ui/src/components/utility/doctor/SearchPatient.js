import React, { Component } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { ButtonBase } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from '@mui/material/MenuItem';
import { Button, Typography, Container, TextField, Box } from "@mui/material";

class SearchPatient extends Component {
    render() {
        return (
            <Container >
                <TextField
                    id="search"
                    type="search"
                    label="Search Patient by Name/Id"
                    // value={searchTerm}
                    // onChange={handleChange}
                    sx={{ width: 1 }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Container>
        );
    }
}
export default SearchPatient;