import React from "react";
import styles from "./Technologies.module.scss"
import { AnimationOnScroll } from 'react-animation-on-scroll';

export class Technologies extends React.Component<{}, {}> {

  render() {
    return (
      <AnimationOnScroll animateIn="animate__fadeIn">
        <div className={styles.technologies}>
          <h1 className={styles.inAnim}>UI</h1>
          <h4>Inspire your users and catch the looks</h4>
          <h1>UX</h1>
          <h4>Make it the place they want to back</h4>
          <h1>Performance</h1>
          <h4>Save time, money, and users</h4>
        </div>
      </AnimationOnScroll>
    );
  }
}