import React from "react";
import styles from "./Opensource.module.scss"
import { AnimationOnScroll } from 'react-animation-on-scroll';

export class Opensource extends React.Component<{}, {}> {

  render() {
    return (
      <AnimationOnScroll animateIn="animate__fadeIn">
        <div className={styles.opensource}>
          <h1>Opensource contributor</h1>
        </div>
      </AnimationOnScroll>
    );
  }
}