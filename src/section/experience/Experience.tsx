import React from "react";
import styles from "./Experience.module.scss"
import { AnimationOnScroll } from 'react-animation-on-scroll';

export class Experience extends React.Component<{}, {}> {

  render() {
    return (
      <AnimationOnScroll animateIn="animate__fadeIn">
        <div className={styles.experience + " " + styles.animate}>
          <h1>Over 2 years experience in development</h1>
        </div>
      </AnimationOnScroll>
    );
  }
}