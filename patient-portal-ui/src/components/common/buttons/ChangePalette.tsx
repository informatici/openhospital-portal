import React from 'react';
import { useContext } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import { Context } from "../../../Context";

import { theme_1, theme_2, theme_3, theme_4 } from "../../../styles/themes";
const label = { inputProps: { 'aria-label': 'Change Color' } };


export default function ChangePalette() {
  const styles = {

    theme_1_a: {
      width: "1em",
      height: "1em",
      backgroundColor: "#1526b7"
    },
    theme_1_b: {
      width: "1em",
      height: "1em",
      backgroundColor: "#40cc92"
    },
    theme_2_a: {
      width: "1em",
      height: "1em",
      backgroundColor: "#3b8dfd"
    },
    theme_2_b: {
      width: "1em",
      height: "1em",
      backgroundColor: "#0d7347"
    },
    theme_3_a: {
      width: "1em",
      height: "1em",
      backgroundColor: "#0d7347"
    },
    theme_3_b: {
      width: "1em",
      height: "1em",
      backgroundColor: "#ab5236"
    },
    theme_4_a: {
      width: "1em",
      height: "1em",
      backgroundColor: "#ab5236"
    },
    theme_4_b: {
      width: "1em",
      height: "1em",
      backgroundColor: "#0d7347"
    },
  };
  const { theme, setTheme } = React.useContext(Context);
  const buttons = [
    <Button onClick={function () {
      return setTheme(theme_1)
    }} key="1"><div style={styles.theme_1_a}></div><div style={styles.theme_1_b}></div>
    </Button>,
    <Button onClick={function () {
      return setTheme(theme_2)
    }} key="2"><div style={styles.theme_2_a}></div><div style={styles.theme_2_b}></div>
    </Button>,
    <Button onClick={function () {
      return setTheme(theme_3)
    }} key="3"><div style={styles.theme_3_a}></div><div style={styles.theme_3_b}></div>
    </Button>,
    <Button onClick={function () {
      return setTheme(theme_4)
    }} key="4" ><div style={styles.theme_4_a}></div><div style={styles.theme_4_b}></div>
    </Button >,
  ];


  // const handleChange = (event: { target: { checked: boolean; }; }) => {
  //   if (event.target.checked == true) {
  //     setTheme(theme_1)

  //   } else {
  //     setTheme(theme_4)
  //   }
  // };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup size="small" aria-label="small button group">
        {buttons}
      </ButtonGroup>
    </Box>
    // <Switch onChange={handleChange} {...label} defaultChecked />
  );
};