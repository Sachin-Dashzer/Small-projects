import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const ScrollInputRange = () => {
  const inputRangeRef = useRef(null);

  useEffect(() => {
    const inputRange = inputRangeRef.current;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    gsap.to(inputRange, {
      value: maxScroll,
      duration: 2,
      onUpdate: () => {
        // Update the input range value as the animation progresses
        inputRange.value = gsap.getProperty(inputRange, 'value');
      },
    });
  }, []);

  return (
    <div className="scroll-input-range">
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        defaultValue="0"
        ref={inputRangeRef}
      />
    </div>
  );
};

export default ScrollInputRange;
