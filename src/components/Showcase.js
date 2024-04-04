import React from "react";
import { motion } from "framer-motion";

import {
  PaddingContainer,
  Heading,
  ParaText,
  FlexContainer,
  BlueText,
  IconContainer,
  Button,
} from "../styles/Global.styled";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import {
  ShowcaseParticleContainer,
  ShowcaseImageCard,
  Image,
  Particle,
  StyledLink,
  ResumeButoon,
} from "../styles/Showcase.styled";
import showcaseImage from "../assets/profile.png";
import BackgroundImage from "../assets/particle.png";
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";
import { TypeAnimation } from "react-type-animation";

const Showcase = () => {
  return (
    <PaddingContainer
      id="Home"
      left="3%"
      right="10%"
      top="10%"
      bottom="10%"
      responsiveTop="8rem"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <FlexContainer align="center" fullWidthChild>
        {/*left content */}
        <motion.div
          style={{ textAlign: "left" }}
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
          <Heading as="h4" size="h4">
            Hello!
          </Heading>
          <Heading as="h2" size="h2" top="0.5rem" bottom="1rem">
            I'm <BlueText>Priya Jha</BlueText>
          </Heading>
          <Heading as="h3" size="h3">
            I'm a{" "}
            <BlueText>
              <TypeAnimation
                sequence={[
                  "web developer",
                  1000,
                  "problem solver",
                  1000,
                  "tech enthusiast",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </BlueText>
          </Heading>
          <ParaText as="p" top="2rem" bottom="1rem">
            I'm a passionate web developer currently pursuing my Master's in
            Mathematics and Computing at IIT(ISM) Dhanbad (expected graduation
            May 2024). While honing my theoretical knowledge, I'm also gaining
            practical experience as a Software Development Engineer Intern at
            The Internet Folks.<br/>
            Problem-solving is at the core of my approach to web development. I
            thrive on the challenge of translating complex ideas into
            user-friendly and impactful web applications.<br/>
            Let's connect and turn your ideas into reality!
          </ParaText>
         

          {/* social icons */}
          <FlexContainer gap="20px" responsiveFlex>
            <IconContainer color="white" size="1.5rem">
              <StyledLink
                target="blank"
                href="https://www.linkedin.com/in/priyajha414"
              >
                <BsLinkedin />
              </StyledLink>
            </IconContainer>
            <IconContainer color="white" size="1.5rem">
              <StyledLink target="blank" href="https://github.com/mikasa-404">
                <BsGithub />
              </StyledLink>
            </IconContainer>
            <IconContainer color="white" size="1.5rem">
              <StyledLink target="blank" href="https://leetcode.com/mikasa404/">
                <SiLeetcode />
              </StyledLink>
            </IconContainer>
          </FlexContainer>
          <ResumeButoon
            href="https://drive.google.com/file/d/134_0mUwO9ciZFaqwNlzPRez1wy5vz4iH/view?usp=sharing"
            target="blank"
          >
            Resume
          </ResumeButoon>
        </motion.div>

        {/* right content */}
        <FlexContainer
          as={motion.div}
          justify="flex-end"
          align="center"
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
        >
          <ShowcaseParticleContainer>
            <ShowcaseImageCard>
              <Image src={showcaseImage} alt="profile" />
            </ShowcaseImageCard>
            <Particle
              as={motion.img}
              animate={{
                x: [0, 100, 0],
                rotate: 360,
                scale: [0.7, 0.5, 0.7],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
              }}
              src={BackgroundImage}
              alt="particle"
              top="-100px"
              left="30px"
              rotate="40deg"
            />
            <Particle
              as={motion.img}
              animate={{
                y: [0, 100, 0],
                rotate: -360,
                scale: [0.7, 0.5, 0.7],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
              }}
              src={BackgroundImage}
              alt="particle"
              top="100px"
              right="-80px"
              rotate="10deg"
            />
            <Particle
              as={motion.img}
              animate={{
                y: [0, -100, 0],
                rotate: -360,
                scale: [0.7, 0.5, 0.7],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
              }}
              src={BackgroundImage}
              alt="particle"
              bottom="10px"
              left="-90px"
              rotate="50deg"
            />
          </ShowcaseParticleContainer>
        </FlexContainer>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default Showcase;
