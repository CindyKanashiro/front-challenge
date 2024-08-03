import React from 'react';
import styles from './circles.module.css';

interface CircleProps {
  size: string;
  top: string;
  left: string;
  backgroundColor: string;
}

const Circle: React.FC<CircleProps> = ({ size, top, left, backgroundColor }) => {
  return (
    <div
      className={styles.circle}
      style={{
        width: size,
        height: size,
        top: top,
        left: left,
        backgroundColor: backgroundColor,
      }}
    ></div>
  );
};

export default Circle;
