import React, { useEffect , useState } from "react";

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
      <i className="fa-solid fa-angle-left" id="prev" onClick={prevdev}></i>
      <i className="fa-solid fa-angle-right" id="next" onClick={nextdev}></i>
    </div>
  );
};

export default Slider;
