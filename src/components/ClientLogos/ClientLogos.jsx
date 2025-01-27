import React, { useRef } from "react";
import { CLIENTS_LOGO } from "../../constants";

const ClientLogos = () => {
  const marqueeRef = useRef(null);
  let isDragging = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDragging = true;
    startX = e.pageX - marqueeRef.current.offsetLeft;
    scrollLeft = marqueeRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging = false;
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - marqueeRef.current.offsetLeft;
    const walk = (x - startX) * 3; // scroll-fast
    marqueeRef.current.scrollLeft = scrollLeft - walk;
  };

  const preventImageDrag = (e) => {
    e.preventDefault();
  };

  return (
    <div className="overflow-hidden whitespace-nowrap box-border p-8 bg-gray-50 ">
      <div
        ref={marqueeRef}
        className="flex animate-marquee draggable"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {CLIENTS_LOGO.concat(CLIENTS_LOGO).map((client, index) => (
          <img
            key={index}
            className="inline-block mr-20"
            src={client.imageUrl}
            alt={client.name}
            width={150}
            onDragStart={preventImageDrag}
          />
        ))}
        {CLIENTS_LOGO.concat(CLIENTS_LOGO).map((client, index) => (
          <img
            key={index + CLIENTS_LOGO.length}
            className="inline-block mr-20"
            src={client.imageUrl}
            alt={client.name}
            width={150}
            onDragStart={preventImageDrag}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;
