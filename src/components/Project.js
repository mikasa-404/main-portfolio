import React, { useState } from "react";
import {
  Heading,
  ParaText,
} from "../styles/Global.styled";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  FlipHint,
  ProjectBack,
  ProjectCard,
  ProjectFace,
  ProjectFlipInner,
  ProjectFront,
  ProjectImage,
  TechStackCard,
  TechStackMore,
  FeatureItem,
  FeatureList,
  ProjectAction,
  ProjectActions,
  ProjectImageDot,
  ProjectImageFrame,
  ProjectImageToolbar,
  ProjectImpact,
  ProjectNumber,
  ProjectOverline,
  ProjectTitleRow,
  ProjectDetailsTitle,
  TechStackList,
} from "../styles/MyProjects.styled";
import { motion } from "framer-motion";
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";

const Project = ({ data, index }) => {
  const [flipped, setFlipped] = useState(false);
  const visibleTechStack = data.tech_stack.slice(0, 4);
  const hiddenTechCount = data.tech_stack.length - visibleTechStack.length;
  const projectNumber = String(index + 1).padStart(2, "0");

  const toggleCard = () => setFlipped((current) => !current);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleCard();
    }
  };

  return (
    <ProjectCard
      as={motion.article}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`${data.project_name} project card`}
      onClick={toggleCard}
      onKeyDown={handleKeyDown}
      $flipped={flipped}
      variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant}
      initial="hidden"
      whileInView="visible"
    >
      <ProjectFlipInner>
        <ProjectFace as={ProjectFront}>
          <ProjectTitleRow>
            <ProjectOverline>{data.project_type}</ProjectOverline>
            <ProjectNumber>{projectNumber}</ProjectNumber>
          </ProjectTitleRow>
          <Heading as="h3" size="h4" bottom="0.7rem">
            {data.project_name}
          </Heading>
          <ProjectImageFrame $compact>
            <ProjectImageToolbar aria-hidden="true">
              <ProjectImageDot />
              <ProjectImageDot $muted />
              <ProjectImageDot $muted />
            </ProjectImageToolbar>
            <ProjectImage
              src={data.project_img}
              alt={`${data.project_name} preview`}
            />
          </ProjectImageFrame>
          <ProjectImpact>{data.impact}</ProjectImpact>
          <TechStackList>
            {visibleTechStack.map((stack, stackIndex) => (
              <TechStackCard key={stackIndex}>{stack}</TechStackCard>
            ))}
            {hiddenTechCount > 0 && <TechStackMore>+{hiddenTechCount}</TechStackMore>}
          </TechStackList>
          <FlipHint>Hover or tap to flip</FlipHint>
        </ProjectFace>

        <ProjectFace as={ProjectBack}>
          <ProjectTitleRow>
            <ProjectOverline>{data.project_type}</ProjectOverline>
            <ProjectNumber>{projectNumber}</ProjectNumber>
          </ProjectTitleRow>
          <Heading as="h3" size="h4" bottom="0.7rem">
            {data.project_name}
          </Heading>
          <div>
            <ParaText>{data.project_desc}</ParaText>
            <ProjectDetailsTitle>Build details</ProjectDetailsTitle>
            <FeatureList>
              {data.features.map((feature, featureIndex) => (
                <FeatureItem key={featureIndex}>{feature}</FeatureItem>
              ))}
            </FeatureList>
          </div>
          <ProjectActions>
            <ProjectAction
              href={data.project_url}
              target="_blank"
              rel="noreferrer"
              $variant="primary"
              onClick={(event) => event.stopPropagation()}
            >
              <FaExternalLinkAlt />
              Live
            </ProjectAction>
            <ProjectAction
              href={data.github_link}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
            >
              <FaGithub />
              Code
            </ProjectAction>
          </ProjectActions>
        </ProjectFace>
      </ProjectFlipInner>
    </ProjectCard>
  );
};

export default Project;
