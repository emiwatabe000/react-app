import React from "react";
import { Select, SelectProps, MenuItem } from "@mui/material";

type Option = {
  label: string;
  value: string | number;
};

type CustomSelectProps = SelectProps & {
  options: Option[];
};

export function CustomSelect({ options, ...props }: CustomSelectProps) {
  return (
    <Select {...props}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
}
