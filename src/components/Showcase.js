import React from "react";
import {motion} from "framer-motion"
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
import showcaseImage from "../assets/profile.png";
import BackgroundImage from "../assets/particle.png";
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";

const Showcase = () => {
  return (
    <PaddingContainer id="Home" left="3%" right="10%" top="18%" bottom="10%"
      responsiveTop="8rem" responsiveLeft="1rem" responsiveRight="1rem"
    >
      <FlexContainer align="center" fullWidthChild >
        {/*left content */}
        <motion.div style={{textAlign:"left"}}
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
          <FlexContainer gap="20px" responsiveFlex>
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
        </motion.div>

        {/* right content */}
        <FlexContainer as={motion.div} 
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
                x:[0, 100, 0],
                rotate: 360,
                scale:[1, 0.5, 1]
              }}
              transition={{
                duration:20,
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
                y:[0, 100, 0],
                rotate: -360,
                scale:[1, 0.5, 1]
              }}
              transition={{
                duration:20,
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
                y:[0, -100, 0],
                rotate: -360,
                scale:[1, 0.6, 1]
              }}
              transition={{
                duration:15,
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
