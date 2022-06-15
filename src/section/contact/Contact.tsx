import React, {MouseEvent} from "react";
import styles from "./Contact.module.scss"

export class Contact extends React.Component<{}, {}> {

  render() {
    return (
      <div className={styles.contact}>
        <div className={styles.content}>
          <i className="material-icons">hub</i>
          <a href={"https://github.com/vie10"}>GitHub</a>
        </div>
        <div className={styles.content}>
          <i className="material-icons">link</i>
          <a href={"https://www.linkedin.com/feed/"}>LinkedIn</a>
        </div>
        <div className={styles.content}>
          <i className="material-icons">telegram</i>
          <a href={"https://github.com/vie_10"}>Telegram</a>
        </div>
        <div className={styles.content}>
          <i className="material-icons">discord</i>
          <a href={"https://discordapp.com/users/831861680710352917"}>Discord</a>
        </div>
      </div>
    )
  }
}