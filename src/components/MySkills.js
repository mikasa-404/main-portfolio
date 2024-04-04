import React from "react";
import {
  FlexContainer,
  PaddingContainer,
  Heading,
  IconContainer,
  ParaText,
  BlueText,
} from "../styles/Global.styled";
import { skills } from "../utils/Data";
import { SkillsCard, SkillsCardContainer } from "../styles/MySkills.styled";
import { motion } from "framer-motion";
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";

const MySkills = () => {
  return (
    <PaddingContainer
      id="Skills"
      top="10%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <FlexContainer
        fullWidthChild
        responsiveFlex
        responsiveDirection="column-reverse"
      >
        {/* left-section */}
        <SkillsCardContainer
          as={motion.div}
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
        >
          {skills.map((skill) => (
            <SkillsCard key={skill.id}>
              <IconContainer size="5rem" color="blue">
                {skill.icon}
              </IconContainer>
              <Heading as="h4" size="h4">
                {skill.tech}
              </Heading>
            </SkillsCard>
          ))}
        </SkillsCardContainer>
        {/* right section */}
        <motion.div
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
        >
          <Heading as="h4" size="h4">
            MY SKILLS
          </Heading>
          <Heading as="h2" size="h2" top="0.5rem">
            What <BlueText>I can do</BlueText>
          </Heading>
          <ParaText top="2rem" bottom="1.5rem">
            As a developer, I have a wide-range of experience in web
            technologies. I am proficient in HTML, CSS, JavaScript, TypeScript,
            React Query and frameworks like React.js, Next.js. I'm also adept at
            utilizing styling libraries such as Tailwind CSS, Chakra UI,
            Material UI, and styled-components to create visually appealing and
            responsive user interfaces. Experience with Node.js, Express.js and
            relational (SQL) as well as NoSQL (MongoDB) databases.
          </ParaText>
          <ParaText>
            Aside from web development, I hold deep interest in problem-solving.
            My proficiency in data structures and algorithms, coupled with a
            strong command of the C++ language, equips me to tackle complex
            challenges with precision and efficiency.
          </ParaText>
        </motion.div>
      </FlexContainer>
    </PaddingContainer>
  );
};

export default MySkills;
