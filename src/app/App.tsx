import React from "react";
import "./App.scss"
import {Header} from "../components/header/Header";
import {Footer} from "../components/footer/Footer";
import {About} from "../section/about/About";
import {Skills} from "../section/skills/Skills";
import {Experience} from "../section/experience/Experience";
import {Technologies} from "../section/technologies/Technologies";
import {Opensource} from "../section/opensource/Opensource";
import {Contact} from "../section/contact/Contact";
import {Projects} from "../section/projects/Projects";
import {Ready} from "../section/ready/Ready";

export class App extends React.Component<{}, {}> {


  render() {
    return (
      <div id={"app"}>
        <Header/>
        <div id={"content-body"}>
          <About/>
          <Skills/>
          <Experience/>
          <Technologies/>
          <Opensource/>
          <Projects/>
          <Ready/>
          <Contact/>
          <Footer/>
        </div>
      </div>
    );
  }
}