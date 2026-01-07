import React, {useState} from "react";
import '../../styles/Modal.scss';

type CustomModalProps = {
  title: string;
  text: string;
  buttonLabel: string;
}

export function CustomModal({ title, text, buttonLabel }: CustomModalProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="modal-wrapper">
      <button onClick={handleOpen}>{buttonLabel}</button>
      {open && (
        <div className="modal" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        </div>
      )}
    </div>
  );
}
