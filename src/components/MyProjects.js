import React from "react";
import {
  PaddingContainer,
  Heading,
  BlueText,
  FadeImage,
} from "../styles/Global.styled";
import Project from "./Project";
import { projects } from "../utils/Data";
import { motion } from "framer-motion";
import { fadeInTopVariant } from "../utils/Variants";
import right from "../assets/right.png";
import {
  ProjectList,
  ProjectSectionHeader,
} from "../styles/MyProjects.styled";

const MyProjects = () => {
  return (
    <PaddingContainer
      id="Projects"
      top="8%"
      bottom="7%"
      responsiveTop="12%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <FadeImage src={right} right="0" width="inherit" />
      <ProjectSectionHeader>
        <Heading
          as={motion.h4}
          size="h4"
          variants={fadeInTopVariant}
          initial="hidden"
          whileInView="visible"
        >
          MY PROJECTS
        </Heading>
        <Heading
          as={motion.h2}
          variants={fadeInTopVariant}
          initial="hidden"
          whileInView="visible"
          size="h2"
        >
          What <BlueText>I have built</BlueText>
        </Heading>
      </ProjectSectionHeader>
      <ProjectList>
        {projects.map((item, index) => (
          <Project data={item} index={index} key={item.id} />
        ))}
      </ProjectList>
    </PaddingContainer>
  );
};

export default MyProjects;
