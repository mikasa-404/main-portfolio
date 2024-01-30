import React from "react";
import { Container, MainBody } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/Theme";
import Showcase from "./components/Showcase";
import MySkills from "./components/MySkills";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainBody >
        <Container>
        <Showcase/>
        <MySkills/>
        </Container>

      </MainBody>
    </ThemeProvider>
  );
}

export default App;
