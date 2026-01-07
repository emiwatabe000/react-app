import React, { ReactNode } from "react";
import '../../styles/Card.scss'

type CustomCardProps = {
  buttonLabel: string;
  children: ReactNode;
}

export function CustomCard({buttonLabel, children}: CustomCardProps) {
  return (
    <div id="card">
      <div id="card-content">
        {children}
      </div>
      <button>{buttonLabel}</button>
    </div>
  );
}
