import React from 'react';
import { useState, createContext, useContext } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { isFunction } from '@mui/x-data-grid/internals';
import Switch from '@mui/material/Switch';
import { Context } from "../../../Context";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { theme_1, theme_2, theme_3, theme_4, theme_5 } from "../../../styles/themes";
const label = { inputProps: { 'aria-label': 'Change Color' } };


export default function ChangePalette() {
  const buttons = [
    <Button key="y">y</Button>,
    <Button key="r">r</Button>,
    <Button key="b">b</Button>,
  ];

  const { theme, setTheme } = React.useContext(Context);
  const handleChange = (event: { target: { checked: boolean; }; }) => {
    if (event.target.checked == true) {
      setTheme(theme_1)

    } else {
      setTheme(theme_5)
    }
  };
  return (
    <Switch onChange={handleChange} {...label} defaultChecked />
  );
};