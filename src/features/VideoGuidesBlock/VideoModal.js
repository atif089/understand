import React from "react";
import Modal from "../../components/Modal"; // Adjusted path to the new Modal component

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen || !videoUrl) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="aspect-video w-[90vw] max-w-[960px] lg:h-[540px]">
        <iframe
          src={videoUrl}
          title="Video Player"
          className="h-full w-full rounded-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </Modal>
  );
};

export default VideoModal;
