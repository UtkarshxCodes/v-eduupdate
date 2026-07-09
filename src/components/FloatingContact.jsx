import { useState, useEffect } from "react";
import "./FloatingContact.css";

const PHONE = "13072164424";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  // Auto close after 3 seconds
  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => {
      setOpen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [open]);

  const handleWhatsapp = () => {
    if (!open) {
      // First click: open the menu
      setOpen(true);
    } else {
      // Second click: open WhatsApp
      window.open(`https://wa.me/${PHONE}`, "_blank");
      setOpen(false);
    }
  };

  return (
    <div className="fab">
      {open && (
        <a
          href={`sms:+${PHONE}`}
          className="fab-item"
          title="Text Message"
          onClick={() => setOpen(false)}
        >
          💬
        </a>
      )}

      <button
        className="fab-main"
        onClick={handleWhatsapp}
        title="WhatsApp"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </button>
    </div>
  );
}