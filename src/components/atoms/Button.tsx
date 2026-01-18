import React from "react";
import { Button, ButtonProps } from "@mui/material";

export function TextButton({size, color, children} : ButtonProps){
  return (
    <Button variant="text" size={size} color={color}>
      {children}
    </Button>
  );
}

export function ContainedButton({size, color, children} : ButtonProps){
  return (
    <Button variant="contained" size={size} color={color} >
      {children}
    </Button>
  )
}

export function OutlinedButton({size, color, children} : ButtonProps){
  return (
    <Button variant="outlined" size={size} color={color}>
      {children}
    </Button>
  )
}
