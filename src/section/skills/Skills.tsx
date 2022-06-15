import React from "react";
import styles from "./Skills.module.scss"
import appBox from "../../assets/app_box.png"
import websiteBox from "../../assets/website_box.jpg"
import minecraftBox from "../../assets/minecraft_box.png"
import {Box} from "../../components/box/Box";

export class Skills extends React.Component<{}, {}> {

  render() {
    return (
      <div className={styles.skills}>
        <Box img={appBox} title={"Applications"}/>
        <Box img={websiteBox} title={"Websites"}/>
        <Box img={minecraftBox} title={"Minecraft Plugins"}/>
      </div>
    );
  }
}