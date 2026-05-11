import React from "react";
import {
  PaddingContainer,
  Heading,
  IconContainer,
  BlueText,
  FadeImage,
} from "../styles/Global.styled";
import { skillGroups } from "../utils/Data";
import {
  SkillGroup,
  SkillGrid,
  SkillButton,
  SkillHeader,
  SkillSectionHeading,
  SkillList,
} from "../styles/MySkills.styled";
import { motion } from "framer-motion";
import { fadeInLeftVariant, fadeInTopVariant } from "../utils/Variants";
import fadeimage from "../assets/right.png";

const MySkills = () => {
  return (
    <PaddingContainer
      id="Skills"
      top="6%"
      bottom="6%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <FadeImage src={fadeimage} right="0" width="inherit" />
      <Heading
        size="h4"
        as={motion.h4}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
      >
        MY SKILLS
      </Heading>
      <Heading
        size="h2"
        as={motion.h2}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
      >
        What <BlueText>I build with</BlueText>
      </Heading>

      <SkillGrid
        as={motion.div}
        variants={fadeInLeftVariant}
        initial="hidden"
        whileInView="visible"
      >
        {skillGroups.map((group) => (
          <SkillGroup key={group.title}>
            <SkillHeader>
              <SkillSectionHeading>{group.title}</SkillSectionHeading>
            </SkillHeader>
            <SkillList>
              {group.items.map((skill) => (
                <SkillButton key={skill.id}>
                  <IconContainer color="blue" size="1.1rem">
                    {skill.icon}
                  </IconContainer>{" "}
                  {skill.tech}
                </SkillButton>
              ))}
            </SkillList>
          </SkillGroup>
        ))}
      </SkillGrid>
    </PaddingContainer>
  );
};

export default MySkills;
