import React from "react";
import styles from "./Ready.module.scss"
import { AnimationOnScroll } from 'react-animation-on-scroll';

export class Ready extends React.Component<{}, {}> {

  render() {
    return (
      <AnimationOnScroll animateIn="animate__fadeIn">
        <div className={styles.ready}>
          <h1>Ready to make choice?</h1>
        </div>
      </AnimationOnScroll>
    );
  }
}