import React from "react";
import { Checkbox, CheckboxProps, FormControlLabel } from "@mui/material";

export function NormalCheckBox({checked, color, size} : CheckboxProps){
  return (
    <FormControlLabel 
      control={
        <Checkbox 
          checked = {checked}
          color = {color}
          size = {size}
        />
      } 
      label="Label" 
    />
  );
}

export function RequiredCheckBox({checked, color, size} : CheckboxProps){
  return (
    <FormControlLabel 
      required
      control={
        <Checkbox 
          checked = {checked}
          color = {color}
          size = {size}
        />
      } 
      label="Required" 
    />
  );
}

export function DisabledCheckBox({checked, size} : CheckboxProps){
  return (
    <FormControlLabel 
      disabled
      control={
        <Checkbox 
          checked = {checked}
          size = {size}
        />
      } 
      label="Disabled" 
    />
  );
}
