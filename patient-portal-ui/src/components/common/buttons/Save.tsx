import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import SaveIcon from '@mui/icons-material/Save';

const Save = (props: {
  edit?: boolean,
  type?: any
}) => {
  const Alert: any = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6}
      // ref={ref}
      variant="filled" {...props} />;
  });
  const [dataDisabled, setDataDisabled] = useState(false);
  useEffect(() => {
    // --- manage edit
    if (props.type == "edit/delete") {
      if (props.edit == true) {
        setDataDisabled(false);
      }
      if (props.edit == false) {
        setDataDisabled(true);
      }
    } else {
      setDataDisabled(false);
    }
  }, [props.edit]);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleClose = (_event: any, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const clickSave = (event: any) => {
   

  };
  return (

    <><Button type="submit" form='my-form' disabled={dataDisabled} startIcon={<SaveIcon />} sx={{ mt: 1 }} style={{ justifyContent: "flex-start" }} variant="outlined" size="large" color="primary">
      Save
    </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          <p>This is a success message!</p>
        </Alert>
      </Snackbar>
    </>
  );
};

export default Save;