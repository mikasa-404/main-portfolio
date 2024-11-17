import React from "react";
import { motion } from "framer-motion";
import {resumeLink} from "../utils/Data"
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
  StyledLink,
} from "../styles/Showcase.styled";
import showcaseImage from "../assets/profile3.png"
import BackgroundImage from "../assets/particle.png";
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";
import { TypeAnimation } from "react-type-animation";
import ScrollMouse from "./ScrollMouse";

const Showcase = () => {
  return (
    <PaddingContainer
      id="Home"
      left="3%"
      right="8%"
      top="12%"
      bottom="10%"
      responsiveTop="8rem"
      responsiveLeft="1rem"
      responsiveRight="1rem"
      style={{
      }}
    >
      <FlexContainer align="center" justify="space-between">
        {/*left content */}
        <motion.div
          style={{ textAlign: "left" }}
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
          <Heading as="h2" size="h2" top="0.5rem" bottom="1rem">
            <span style={{
              'font-size': '2rem',
            }}>Hello, I'm </span><BlueText>Priya Jha!</BlueText>
          </Heading>
          <Heading as="h3" size="h3">
            A{" "}
            <BlueText>
              <TypeAnimation
                sequence={[
                  "FullStack developer",
                  1000,
                  "Problem solver",
                  1000,
                  "Tech enthusiast",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </BlueText>
          </Heading>
          <Heading as="h3" size="h3" top="0.5rem" bottom="1rem">Based in India.</Heading>
          <ParaText as="p" top="1rem" bottom="3rem" style={{
            maxWidth: "80%",
          }}>
            {/* I'm a passionate web developer currently pursuing my Master's in
            Mathematics and Computing at IIT(ISM) Dhanbad (expected graduation
            May 2024). While honing my theoretical knowledge, I'm also gaining
            practical experience as a Software Development Engineer Intern at
            The Internet Folks.<br/>
            Problem-solving is at the core of my approach to web development. I
            thrive on the challenge of translating complex ideas into
            user-friendly and impactful web applications.<br/>
            Let's connect and turn your ideas into reality! */}
            I'm a Software developer currently working at Spyne with a  Master's in Mathematics & Computing from IIT Dhanbad. 
            Always curious to learn more when it comes to  new technologies and creative coding. 
          </ParaText>
         

          {/* social icons */}
          <FlexContainer gap="20px" responsiveFlex>
            <IconContainer color="white" size="2rem">
              <StyledLink
                target="blank"
                href="https://www.linkedin.com/in/priyajha414"
              >
                <BsLinkedin />
              </StyledLink>
            </IconContainer>
            <IconContainer color="white" size="2rem">
              <StyledLink target="blank" href="https://github.com/mikasa-404">
                <BsGithub />
              </StyledLink>
            </IconContainer>
            <IconContainer color="white" size="2rem">
              <StyledLink target="blank" href="https://leetcode.com/mikasa404/">
                <SiLeetcode />
              </StyledLink>
            </IconContainer>
          </FlexContainer>
         
        </motion.div>

        {/* right content */}
        <FlexContainer
          as={motion.div}
          align="flex-end"
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
      <ScrollMouse/>
    </PaddingContainer>
  );
};

export default Showcase;
