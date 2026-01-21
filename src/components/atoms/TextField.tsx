import React from "react";
import { TextField } from "@mui/material";

type CustomTextFieldProps = {
  size?: 'medium'
        | 'small';
  color?: 'primary'
        | 'secondary'
        | 'error'
        | 'info'
        | 'success'
        | 'warning';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function OutlinedTextField({color, size, value, onChange} : CustomTextFieldProps){
  return (
    <TextField 
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
      color = {color}
      size = {size}
      value = {value}
      onChange = {onChange}
    />
  );
}

export function FilledTextField({color, size, value, onChange} : CustomTextFieldProps){
  return (
    <TextField
      id="filled-basic"
      label="Filled"
      variant="filled"
      color = {color}
      size = {size}
      value = {value}
      onChange = {onChange}
    />
  );
}

export function StandardTextField({color, size, value, onChange} : CustomTextFieldProps){
  return (
    <TextField 
      id="standard-basic"
      label="Standard"
      variant="standard"
      size = {size}
      color = {color}
      value = {value}
      onChange = {onChange}
    />
  );
}
