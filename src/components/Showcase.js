import React from "react";
import { motion } from "framer-motion";
import { contactInfo } from "../utils/Data";
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
  HeroFlow,
  HeroFlowDivider,
  HeroFlowItem,
  HeroKicker,
  HeroLayout,
  HeroLocation,
  HeroTextBlock,
  HeroTypingLine,
  HeroVisual,
  KickerDot,
  ShowcaseParticleContainer,
  ShowcaseImageCard,
  Image,
  Particle,
  StyledLink,
  TypingText,
} from "../styles/Showcase.styled";
import showcaseImage from "../assets/profile3.png";
import BackgroundImage from "../assets/particle.png";
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";
import { TypeAnimation } from "react-type-animation";

const Showcase = () => {
  return (
    <PaddingContainer
      id="Home"
      left="3%"
      right="8%"
      top="clamp(9.25rem, 14vh, 11rem)"
      bottom="5%"
      responsiveTop="8.25rem"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <HeroLayout>
        <HeroTextBlock
          as={motion.div}
          style={{ textAlign: "left" }}
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <HeroKicker>
            <KickerDot />
            Priya Jha | Backend Engineer (SDE I) at Spyne AI
          </HeroKicker>
          <Heading as="h2" size="h2" top="0.5rem" bottom="1rem">
            I build <BlueText>backend systems</BlueText> that stay correct
            when things fail.
          </Heading>
          <HeroTypingLine>
            <span>I ship</span>
            <TypingText>
              <TypeAnimation
                sequence={[
                  "event-driven systems",
                  1000,
                  "reliable microservices",
                  1000,
                  "LLM-powered workflows",
                  1000,
                  "serverless workflows",
                  1000,
                  "fault-tolerant pipelines",
                  1000,
                  "real-time data pipelines",
                  1000
                ]}
                speed={50}
                repeat={Infinity}
              />
            </TypingText>
          </HeroTypingLine>
          <HeroLocation>Based in Gurgaon, India.</HeroLocation>
          <ParaText
            as="p"
            top="1rem"
            style={{
              maxWidth: "680px",
            }}
          >
            I’m a backend engineer working on event-driven distributed systems and microservices. I’m curious about architecture and how systems behave under load and failure, and I love breaking a hard problem down until it’s simple. If you have one worth solving, reach out.
          </ParaText>

          <HeroFlow aria-label="Engineering focus areas">
            <HeroFlowItem>Distributed systems</HeroFlowItem>
            <HeroFlowDivider />
            <HeroFlowItem>Fault tolerance</HeroFlowItem>
            <HeroFlowDivider />
            <HeroFlowItem>Event-driven architecture</HeroFlowItem>
            <HeroFlowDivider />
            <HeroFlowItem>System Design</HeroFlowItem>
                        <HeroFlowDivider />
            <HeroFlowItem>Microservices</HeroFlowItem>
          </HeroFlow>

          <FlexContainer gap="20px" responsiveFlex>
            <IconContainer color="white" size="2rem">
              <StyledLink
                target="_blank"
                rel="noreferrer"
                href={contactInfo.linkedin}
                aria-label="LinkedIn profile"
              >
                <BsLinkedin />
              </StyledLink>
            </IconContainer>
            <IconContainer color="white" size="2rem">
              <StyledLink
                target="_blank"
                rel="noreferrer"
                href={contactInfo.github}
                aria-label="GitHub profile"
              >
                <BsGithub />
              </StyledLink>
            </IconContainer>
            <IconContainer color="white" size="2rem">
              <StyledLink
                target="_blank"
                rel="noreferrer"
                href={contactInfo.leetcode}
                aria-label="LeetCode profile"
              >
                <SiLeetcode />
              </StyledLink>
            </IconContainer>
          </FlexContainer>
        </HeroTextBlock>

        <HeroVisual
          as={motion.div}
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ShowcaseParticleContainer>
            <ShowcaseImageCard>
              <Image src={showcaseImage} alt="Priya Jha" />
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
              alt=""
              aria-hidden="true"
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
              alt=""
              aria-hidden="true"
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
              alt=""
              aria-hidden="true"
              bottom="10px"
              left="-90px"
              rotate="50deg"
            />
          </ShowcaseParticleContainer>
        </HeroVisual>
      </HeroLayout>
    </PaddingContainer>
  );
};

export default Showcase;