import React from "react";
import styles from "./Footer.module.scss"

export class Footer extends React.Component<{}, {}> {


  render() {
    return (
      <footer className={styles.footer}>
        <div>
          <a href={"mailto:hrekhviktor@gmail.com/"}>hrekhviktor@gmail.com</a>
        </div>
        <p className={"copyright"}>Copyright © 2022 Viktor Hrekh. All rights reserved.</p>
      </footer>
    );
  }
}