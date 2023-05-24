import * as React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import TranslateIcon from '@mui/icons-material/Translate';

const SelectLanguage = ({ setAuth }) => {
  return (
    <Button startIcon={<TranslateIcon />} component={Link} to="/SelectLanguage"
      sx={{ width: 1, mt: 1 }}
      style={{ justifyContent: "center" }}
      variant="outlined"
      size="large"
      color="primary">
      Select Language
    </Button>
  );
};

export default SelectLanguage;