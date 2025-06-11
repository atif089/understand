import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  // Prevent scrolling on the body when the modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup function to reset overflow when component unmounts or isOpen changes
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 transition-opacity duration-300 ease-in-out"
      onClick={(e) => {
        // Close modal if overlay is clicked
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg bg-white shadow-xl">
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
