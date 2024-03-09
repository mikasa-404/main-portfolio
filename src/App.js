import React from "react";
import { Container, MainBody, FadeImage } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/Theme";
import Showcase from "./components/Showcase";
import MySkills from "./components/MySkills";
import MyProjects from "./components/MyProjects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TopFadeImage from "../src/assets/top.png";
import AnimatedCursor from "react-animated-cursor";
import Experience from "./components/Experience";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainBody>
        <Navbar />

        <Container>
          <Showcase />
          <MySkills />

          <Experience />
          <MyProjects />

          <Footer />
        </Container>
        {/* <FadeImage src={TopFadeImage} top="0" width="inherit"/> */}
      </MainBody>
      <AnimatedCursor
        innerSize={16}
        outerSize={28}
        color="136, 171, 142"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
    </ThemeProvider>
  );
}

export default App;
