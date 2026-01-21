import React from "react";
import { Button, ButtonProps } from "@mui/material";

type CustomButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
} & ButtonProps

export function TextButton({size, color, children, onClick} : CustomButtonProps){
  return (
    <Button variant="text" size={size} color={color} onClick={onClick}>
      {children}
    </Button>
  );
}

export function ContainedButton({size, color, children, onClick} : CustomButtonProps){
  return (
    <Button variant="contained" size={size} color={color} onClick={onClick}>
      {children}
    </Button>
  )
}

export function OutlinedButton({size, color, children, onClick} : CustomButtonProps){
  return (
    <Button variant="outlined" size={size} color={color} onClick={onClick}>
      {children}
    </Button>
  )
}
