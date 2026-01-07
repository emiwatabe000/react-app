import React, {useState} from "react";
import '../../styles/Dialog.scss';

type CustomDialogProps = {
  title: string;
  text: string;
  buttonLabel: string;
}

export function CustomDialog({ title, text, buttonLabel }: CustomDialogProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="dialog-wrapper">
      <button onClick={handleOpen}>{buttonLabel}</button>
      {open && (
        <div className="dialog" onClick={handleClose}>
          <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="button-wrapper">
              <button onClick={handleClose}>DISAGREE</button>
              <button onClick={handleClose}>AGREE</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
