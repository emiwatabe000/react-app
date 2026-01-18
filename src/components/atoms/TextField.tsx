import React from "react";
import { TextField, TextFieldProps } from "@mui/material";

export function OutlinedTextField({color, size} : TextFieldProps){
  return (
    <TextField 
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
      color = {color}
      size = {size}
    />
  );
}

export function FilledTextField({color, size} : TextFieldProps){
  return (
    <TextField
      id="filled-basic"
      label="Filled"
      variant="filled"
      color = {color}
      size = {size}
    />
  );
}

export function StandardTextField({color, size} : TextFieldProps){
  return (
    <TextField 
      id="standard-basic"
      label="Standard"
      variant="standard"
      size = {size}
      color = {color}
    />
  );
}
