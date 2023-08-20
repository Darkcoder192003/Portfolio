import React, { useEffect, useState } from 'react'
import { CircularProgressbar ,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { easeQuadInOut } from 'd3-ease';

const CircularProgressBar = (props) => {
    const percentage = `${props.percentage}`;
  const [value, setValue] = useState(0);

  useEffect(() => {
    const animationDuration = 1400; // in milliseconds

    let startValue = 0;
    const endValue = percentage;

    const startTime = Date.now();

    const updateProgress = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;

      if (elapsed > animationDuration) {
        setValue(endValue);
      } else {
        const progress = easeQuadInOut(elapsed / animationDuration);
        const currentValue = startValue + (progress * (endValue - startValue));
        setValue(currentValue);
        requestAnimationFrame(updateProgress);
      }
    };

    requestAnimationFrame(updateProgress);

    return () => {
      // Clean up if needed
    };
  }, [percentage]);
  return (
    <CircularProgressbar
    value={value}
    text={`${Math.round(value)}%`}
    styles={buildStyles({ pathTransition: 'none',// Custom stroke color
          textColor: '#808080', })}
  />
  )
}

export default CircularProgressBar