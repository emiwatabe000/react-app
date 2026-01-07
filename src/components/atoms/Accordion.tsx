import React, { ReactNode, useState } from "react";

type CustomAccordionProps = {
  title: string;
  openButton: string;
  closeButton: string;
  children: ReactNode;
}

export function CustomAccordion({ title, openButton, closeButton, children }: CustomAccordionProps) {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prev) => !prev);

  }
  return (
    <div id="accordion">
      <button onClick={handleToggle}>
        <span>{title}</span>
        <span>{open ? openButton : closeButton}</span>
      </button>
      {open && (
        <div id="accordion-content">
          {children}
      </div>
      )}
    </div>
  );
}
