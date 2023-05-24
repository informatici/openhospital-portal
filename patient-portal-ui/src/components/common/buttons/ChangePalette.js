import * as React from 'react';
import { useState } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { isFunction } from '@mui/x-data-grid/internals';
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Change Color' } };



function ChangePalette(props) {
  const buttons = [
    <Button key="y">y</Button>,
    <Button key="r">r</Button>,
    <Button key="b">b</Button>,
  ];
  const [themeUser, setThemeUser] = React.useState(true);

  const handleChange = (event) => {
    if (event.target.checked == true) {
      setThemeUser("theme_1");
    } else {
      setThemeUser("theme_2");
    }

  };
  console.log("themeUser in palette");
  console.log(themeUser);
  // function changeColor(e) {
  //   console.log("e");
  //   console.log(e);
  //   props.setThemeUser = "ggg";
  // }
  return (
    <Switch onChange={handleChange} {...label} defaultChecked label="Theme" />
  );
};

export default ChangePalette;