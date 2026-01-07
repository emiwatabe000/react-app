import React from "react";
import { Switch, SwitchProps } from "@mui/material";

export function CustomSwitch({ ...props }: SwitchProps) {
  return <Switch {...props} />;
}
