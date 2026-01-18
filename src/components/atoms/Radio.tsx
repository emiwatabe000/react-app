import React from "react";
import { Radio, RadioProps, FormControlLabel } from "@mui/material";

export function FemaleRadio({color, size} : RadioProps){
  return (
    <FormControlLabel 
      value = "female"
      control={
        <Radio 
          color = {color}
          size = {size}
        />
      } 
      label="Female" 
    />
  );
}

export function MaleRadio({color, size} : RadioProps){
  return (
    <FormControlLabel 
      value = "male"
      control={
        <Radio 
          color = {color}
          size = {size}
        />
      } 
      label="Male" 
    />
  );
}

export function OtherRadio({size, color} : RadioProps){
  return (
    <FormControlLabel 
      value = "other"
      control={
        <Radio 
          color = {color}
          size = {size}
        />
      } 
      label="Other" 
    />
  );
}
export function DisabledRadio({size} : RadioProps){
  return (
    <FormControlLabel 
      value = "disabled"
      disabled
      control={
        <Radio 
          size = {size}
        />
      } 
      label="Disabled" 
    />
  );
}
