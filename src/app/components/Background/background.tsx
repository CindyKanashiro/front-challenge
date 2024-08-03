import React from "react";
import styles from "./background.module.css";
import Circle from "../CircleBackground/circles";

const Background: React.FC = () => {
  return (
    <div className={styles.background}>
      <div className={styles.blur}></div>
        <Circle
          size="850px"
          top="25%"
          left="60%"
          backgroundColor="rgba(21,44,47,255)"
        />
        <Circle
          size="650px"
          top="40%"
          left="67%"
          backgroundColor="rgba(22,54,46,255)"
        />
        <Circle
          size="450px"
          top="55%"
          left="75%"
          backgroundColor="rgba(29,73,57,255)"
        />
        <Circle
          size="230px"
          top="70%"
          left="83%"
          backgroundColor="rgba(55,160,95,255)"
        />
    </div>
  );
};

export default Background;
