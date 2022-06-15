import React from "react";
import styles from "./Header.module.scss"

export class Header extends React.Component<{}, {
  title: string
}> {

  private scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    this.setState({
      title: "another"
    })
  }

  state = {
    title: "Viktor Hrekh"
  }

  render() {
    return (
      <header className={styles.header}>
        <p>{this.state.title}</p>
      </header>
    );
  }
}
