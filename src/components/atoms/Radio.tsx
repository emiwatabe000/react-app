import React from "react";
import { Radio, FormControlLabel } from "@mui/material";

type CustomRadioProps = {
  label: string;
  value: string;
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

export function NormalRadio({
  label,
  value,
  size,
  color,
  checked,
  onChange,
}: CustomRadioProps) {
  return (
    <FormControlLabel
      value={value}
      control={
        <Radio
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

export function DisabledRadio({
  label,
  value,
  size,
  color,
  checked,
  onChange,
}: CustomRadioProps) {
  return (
    <FormControlLabel
      value={value}
      disabled
      control={
        <Radio
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
