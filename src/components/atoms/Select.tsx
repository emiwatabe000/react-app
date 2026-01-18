import React from "react";
import { Select, SelectProps, MenuItem } from "@mui/material";

type Option = {
  label: string;
  value: string | number;
};

type CustomSelectProps = SelectProps & {
  options: Option[];
};

export function CustomSelect({ value, onChange, options }: CustomSelectProps) {
  return (
    <Select 
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      label="Age"
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
}
