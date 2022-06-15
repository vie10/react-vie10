import React from "react";
import styles from "./Container.module.scss"

export class Container extends React.Component<{
  children: React.ReactNode
}, {}> {

  render() {
    return(
      <div className={styles.page}>
        {this.props.children}
      </div>
    );
  }
}