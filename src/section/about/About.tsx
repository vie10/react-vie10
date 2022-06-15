import React from "react";
import styles from "./About.module.scss"

export class About extends React.Component<{}, {}> {


  render() {
    return (
      <div className={styles.about}>
        <h1>Developer who brings your ideas in life</h1>
      </div>
    );
  }
}