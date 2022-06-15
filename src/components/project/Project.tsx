import React from "react";
import styles from "./Project.module.scss"

export class Project extends React.Component<{
  name: string
  description: string
  image: string
  link: string
}, {}> {


  render() {
    return(
      <a href={this.props.link} className={styles.project} aria-label="text">
        <img src={this.props.image}/>
      </a>
    );
  }
}