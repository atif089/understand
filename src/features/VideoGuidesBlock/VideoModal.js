import React from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root") || document.createElement("div");
if (!document.getElementById("modal-root")) {
  modalRoot.setAttribute("id", "modal-root");
  document.body.appendChild(modalRoot);
}

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="bg-opacity-70 fixed inset-0 flex items-center justify-center bg-black/85"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="max-h-screen w-[960px] max-w-full overflow-hidden rounded-lg bg-white p-4">
        <iframe
          src={videoUrl}
          title="Video Player"
          className="h-full w-full"
          style={{ aspectRatio: "16/9" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>,
    modalRoot
  );
};

export default VideoModal;
