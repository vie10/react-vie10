import React from "react";
import styles from "./Box.module.scss"

export class Box extends React.Component<{
  title: string
  img: string | undefined
}, {}> {


  render() {
    return(
      <div className={styles.box}>
        <img className={styles.illustration} src={this.props.img} alt={"illustration"}/>
        <div className={styles.content}>
          <h2>{this.props.title}</h2>
        </div>
      </div>
    );
  }
}