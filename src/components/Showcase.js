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
        >
          <HeroKicker>
            <KickerDot />
            Priya Jha | Software Development Engineer I at Spyne AI
          </HeroKicker>
          <Heading as="h2" size="h2" top="0.5rem" bottom="1rem">
            I build <BlueText>backend systems</BlueText> that hold up at scale.
          </Heading>
          <HeroTypingLine>
            <span>I ship</span>
            <TypingText>
              <TypeAnimation
                sequence={[
                  "high-throughput APIs",
                  1000,
                  "event-driven pipelines",
                  1000,
                  "zero-downtime migrations",
                  1000,
                  "search read models",
                  1000,
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
            I am a Software Development Engineer at Spyne AI, building
            NestJS and Node.js microservices, event-driven pipelines on AWS,
            and Elasticsearch read models — most recently a zero-downtime
            migration of ~3M documents with no data loss. What pulls me in is
            how systems behave at scale and under concurrency.
          </ParaText>

          <HeroFlow aria-label="Engineering focus areas">
            <HeroFlowItem>Distributed systems</HeroFlowItem>
            <HeroFlowDivider />
            <HeroFlowItem>Event-driven pipelines</HeroFlowItem>
            <HeroFlowDivider />
            <HeroFlowItem>Data migrations</HeroFlowItem>
            <HeroFlowDivider />
            <HeroFlowItem>AI workflows</HeroFlowItem>
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
        </HeroVisual>
      </HeroLayout>
    </PaddingContainer>
  );
};

export default Showcase;
