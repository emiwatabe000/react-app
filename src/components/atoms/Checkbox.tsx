import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

type CustomCheckboxProps = {
  size?: 'medium'
        | 'small'
        | 'large';
  color?: 'default'
        | 'primary'
        | 'secondary'
        | 'error'
        | 'info'
        | 'success'
        | 'warning';
  label: string;
  checked?: boolean;
  onChange?: () => void;
}

export function NormalCheckBox({size, color, label, checked, onChange} : CustomCheckboxProps){
  return (
    <FormControlLabel 
      control={
        <Checkbox 
          size={size}
          color={color}
          checked={checked}
          onChange={onChange}
        />} 
      label={label}
    />
  );
}

export function RequiredCheckBox({size, color, label, checked, onChange} : CustomCheckboxProps){
  return (
    <FormControlLabel 
      required
      control={
        <Checkbox 
          size={size}
          color={color}
          checked={checked}
          onChange={onChange}
        />} 
      label={label}
    />
  );
}

export function DisabledCheckBox({size, color, label, checked, onChange} : CustomCheckboxProps){
  return (
    <FormControlLabel 
      disabled
      control={
        <Checkbox 
          size={size}
          color={color}
          checked={checked}
          onChange={onChange}
        />} 
      label={label}
    />
  );
}
