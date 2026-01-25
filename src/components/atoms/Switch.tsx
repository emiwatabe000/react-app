import React from "react";
import { Switch, FormControlLabel } from "@mui/material";

type CustomSwitchProps = {
  label: string;
  size?: 'medium'
        | 'small';
  color?: 'default'
        | 'primary'
        | 'secondary'
        | 'error'
        | 'info'
        | 'success'
        | 'warning';
  checked?: boolean;
  onChange?: () => void;
}

export function NormalSwitch({size, color, label, checked, onChange} : CustomSwitchProps){
  return (
    <FormControlLabel 
      control={
        <Switch 
          size={size}
          color={color}
          checked={checked}
          onChange={onChange}
        />
      } 
      label={label}
    />
  );
}

export function RequiredSwitch({size, color, label, checked, onChange} : CustomSwitchProps){
  return (
    <FormControlLabel 
      required
      control={
        <Switch 
          size={size}
          color={color}
          checked={checked}
          onChange={onChange}
        />
      } 
      label={label}
    />
  );
}

export function DisabledSwitch({size, color, label, checked, onChange} : CustomSwitchProps){
  return (
    <FormControlLabel 
      disabled
      control={
        <Switch 
          size={size}
          color={color}
          checked={checked}
          onChange={onChange}
        />
      } 
      label={label}
    />
  );
}
