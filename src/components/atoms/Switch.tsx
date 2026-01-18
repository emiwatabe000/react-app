import React from "react";
import { Switch, SwitchProps, FormControlLabel } from "@mui/material";

export function NormalSwitch({color, size} : SwitchProps){
  return (
    <FormControlLabel 
      control={
        <Switch 
          color = {color}
          size = {size}
        />
      } 
      label="Label" 
    />
  );
}

export function RequiredSwitch({color, size} : SwitchProps){
  return (
    <FormControlLabel 
      required
      control={
        <Switch 
          color = {color}
          size = {size}
        />
      } 
      label="Required" 
    />
  );
}

export function DisabledSwitch({size} : SwitchProps){
  return (
    <FormControlLabel 
      disabled
      control={
        <Switch 
          size = {size}
        />
      } 
      label="Disabled" 
    />
  );
}
