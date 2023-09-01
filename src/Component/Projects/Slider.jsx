import React from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { useState } from "react";

const Slider = ({ content }) => {
  const [currentindex, setCurrentIndex] = useState(0);

  const prevdev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? content.length - 1 : prevIndex - 1
    );
  };

  const nextdev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === content.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="project-box">
      <div className="project-box-container">{content[currentindex]};</div>

      <GrPrevious id="prev" onClick={prevdev} />
      <GrNext id="next" onClick={nextdev} />
    </div>
  );
};

export default Slider;
