import React from "react";
import { TextField, TextFieldProps } from "@mui/material";

export function CustomTextField({ ...props }: TextFieldProps) {
  return <TextField {...props} />;
}
