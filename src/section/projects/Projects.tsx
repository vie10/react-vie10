import React from "react";
import styles from "./Projects.module.scss"
import {Project} from "../../components/project/Project";
import paperKit from "../../assets/paper_kit_project.png"
import muiShowcase from "../../assets/mui_showcase.jpg"
import { AnimationOnScroll } from 'react-animation-on-scroll';

export class Projects extends React.Component<{}, {}> {


  render() {
    return(
      <AnimationOnScroll animateIn="animate__fadeIn">
        <div className={styles.projects}>
          <Project name="PaperKit" description="Some description" image={paperKit} link="https://github.com/paper-kit" />
          <Project name="PaperKit" description="Some description" image={muiShowcase} link="https://github.com/karakum-team/kotlin-mui-showcase"/>
        </div>
      </AnimationOnScroll>
    );
  }
}