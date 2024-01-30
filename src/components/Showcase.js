import React from "react";
import {
  PaddingContainer,
  Heading,
  ParaText,
  FlexContainer,
  BlueText,
  IconContainer,
} from "../styles/Global.styled";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import {
  ShowcaseParticleContainer,
  ShowcaseImageCard,
  Image,
  Particle,
} from "../styles/Showcase.styles";
import showcaseImage from "../assets/1000089190-01-removebg-preview (4).png";
import BackgroundImage from "../assets/particle.png";

const Showcase = () => {
  return (
    <PaddingContainer id="Home" left="3%" right="10%" top="15%" bottom="10%">
      <FlexContainer align="left" fullWidthChild>
        {/*left content */}
        <div>
          <Heading as="h4" size="h4">
            Hello!
          </Heading>
          <Heading as="h2" size="h2" top="0.5rem" bottom="1rem">
            I'm <BlueText>Priya Jha</BlueText>
          </Heading>
          <Heading as="h3" size="h3">
            I'm a <BlueText>Web Developer</BlueText>
          </Heading>
          <ParaText as="p" top="2rem" bottom="4rem">
            Hello, I'm Priya Jha, a web developer currently pursuing my Masters
            in Mathematics and Computing at IIT(ISM) Dhanbad, with an expected
            graduation in 2024. With a strong interest in problem-solving, I
            specialize in both frontend and backend development, focusing on
            crafting effective and elegant solutions.
          </ParaText>

          {/* social icons */}
          <FlexContainer gap="20px">
            <IconContainer color="white" size="1.5rem">
              <BsLinkedin />
            </IconContainer>
            <IconContainer color="white" size="1.5rem">
              <BsGithub />
            </IconContainer>
            <IconContainer color="white" size="1.5rem">
              <SiLeetcode />
            </IconContainer>
          </FlexContainer>
        </div>

        {/* right content */}
        <FlexContainer justify="flex-end">
          <ShowcaseParticleContainer>
            <ShowcaseImageCard>
              <img src={showcaseImage} alt="profile" />
            </ShowcaseImageCard>
            <Particle
              src={BackgroundImage}
              alt="particle"
              top="-80px"
              left="30px"
              rotate="60deg"
            />
            <Particle
              src={BackgroundImage}
              alt="particle"
              top="50px"
              right="-70px"
              rotate="0deg"
            />
            <Particle
              src={BackgroundImage}
              alt="particle"
              bottom="10px"
              left="-70px"
              rotate="50deg"
            />
          </ShowcaseParticleContainer>
        </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default Showcase;
