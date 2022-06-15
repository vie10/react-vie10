import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import {App} from "../app/App";
import {Header} from "../components/header/Header";
import {Footer} from "../components/footer/Footer";
import {Box} from "../components/box/Box";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/App">
        <App/>
      </ComponentPreview>
      <ComponentPreview path="/Header">
        <Header/>
      </ComponentPreview>
      <ComponentPreview path="/Footer">
        <Footer/>
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;