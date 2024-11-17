import React from "react";
import {
  FlexContainer,
  PaddingContainer,
  Heading,
  IconContainer,
  ParaText,
  BlueText,
  FadeImage,
} from "../styles/Global.styled";
import { skills } from "../utils/Data";
import {
  SkillButton,
  SkillsCard,
  SkillsCardContainer,
  SkillSectionHeading,
} from "../styles/MySkills.styled";
import { motion } from "framer-motion";
import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";
import fadeimage from "../assets/right.png";
import {
  FaCss3,
  FaReact,
  FaHtml5,
  FaNode,
  FaDocker,
  FaLinux,
  FaCss3Alt,
  FaGit,
  FaGithub,
  FaProjectDiagram,
  FaBrain,
} from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiAmazonaws,
  SiCplusplus,
  SiGraphql,
  SiMongodb,
  SiPostman,
  SiPython,
  SiServerless,
} from "react-icons/si";
import {
  SiChakraui,
  SiMysql,
  SiNextdotjs,
  SiExpress,
  SiFramer,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { AiOutlineApi, AiOutlinePartition } from "react-icons/ai";
const Languages = [
  {
    id: 0,
    tech: "C++",
    icon: <SiCplusplus />,
  },
  {
    id: 2,
    tech: "Python",
    icon: <SiPython />,
  },
  {
    id: 3,
    tech: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    id: 4,
    tech: "TypeScript",
    icon: <SiTypescript />,
  },
];

const frontendSkills = [
  { id: 0, tech: "React.js", icon: <FaReact /> },
  { id: 1, tech: "Next.js", icon: <SiNextdotjs /> },
  { id: 2, tech: "JavaScript (ES6+)", icon: <SiJavascript /> },
  { id: 3, tech: "TypeScript", icon: <SiTypescript /> },
  { id: 4, tech: "HTML5", icon: <FaHtml5 /> },
  { id: 5, tech: "CSS3", icon: <FaCss3Alt /> },
  { id: 6, tech: "Tailwind CSS", icon: <SiTailwindcss /> },
  { id: 7, tech: "Chakra UI", icon: <SiChakraui /> },
  { id: 8, tech: "Framer Motion", icon: <SiFramer /> },
];
const backendSkills = [
  { id: 0, tech: "Node.js", icon: <FaNode /> },
  { id: 1, tech: "Express.js", icon: <SiExpress /> },
  { id: 2, tech: "MongoDB", icon: <SiMongodb /> },
  { id: 3, tech: "PostgreSQL", icon: <BiLogoPostgresql /> },
  { id: 4, tech: "MySQL", icon: <SiMysql /> },
  { id: 5, tech: "GraphQL", icon: <SiGraphql /> },
  { id: 6, tech: "REST APIs", icon: <AiOutlineApi /> },
  // { id: 7, tech: "WebSockets", icon: <BiWebsocket /> },
  // { id: 8, tech: "Prisma", icon: <SiPrisma /> },
  // { id: 9, tech: "JWT Authentication", icon: <RiKey2Fill /> },
];
const devOpsSkills = [
  { id: 0, tech: "Git", icon: <FaGit /> },
  { id: 1, tech: "GitHub", icon: <FaGithub /> },
  { id: 2, tech: "Docker", icon: <FaDocker /> },
  { id: 3, tech: "AWS (S3, EC2)", icon: <SiAmazonaws /> },
  // { id: 4, tech: "CI/CD (GitHub Actions)", icon: <SiGithubactions /> },
  // { id: 5, tech: "Firebase", icon: <SiFirebase /> },
  // { id: 6, tech: "Postman", icon: <SiPostman/> },
  // { id: 7, tech: "Swagger", icon: <SiSwagger /> },
  // { id: 8, tech: "Nginx", icon: <SiNginx /> },
  { id: 9, tech: "Data Structures & Algorithms", icon: <FaProjectDiagram /> },
  { id: 10, tech: "OOPS", icon: <SiCplusplus /> },
  { id: 12, tech: "Problem Solving", icon: <FaBrain /> },
  { id: 13, tech: "System Design", icon: <AiOutlinePartition /> },
  // { id: 4, tech: "Debugging & Troubleshooting", icon: <MdBugReport /> },
  // { id: 5, tech: "Agile Methodologies", icon: <SiJira /> },
];


const MySkills = () => {
  return (
    <PaddingContainer
      id="Skills"
      top="6%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <FadeImage src={fadeimage} right="0" width="inherit" />
      <Heading as="h4" size="h4">
        MY SKILLS
      </Heading>
      <Heading as="h2" size="h2">
        What <BlueText>I can do</BlueText>
      </Heading>
      {/* <ParaText style={{ marginTop: "4rem" }}>
      With experiences spanning frontend and backend development and modern web technologies, I build scalable, efficient, and visually engaging applications. 
      I bring strong problem-solving skills, a passion for clean code, and a deep understanding of system design, ensuring seamless user experiences and robust performance
      </ParaText> */}
    
      <FlexContainer
        gap="20px"
        responsiveFlex
        direction="column"
        style={{ marginTop: "4rem" }}
      >
         <FlexContainer gap="20px" responsiveFlex>
          <SkillSectionHeading>Languages</SkillSectionHeading>
          {Languages.map((skill) => (
            <SkillButton key={skill.id}>
              <IconContainer color="blue" size="1.5rem">
                {skill.icon}
              </IconContainer>{" "}
              {skill.tech}
            </SkillButton>
          ))}
        </FlexContainer> 
       {/*} <FlexContainer gap="20px" responsiveFlex>
          <SkillSectionHeading>Web technologies</SkillSectionHeading>
          {webTechnologies.map((skill) => (
            <SkillButton key={skill.id}>
              <IconContainer color="blue" size="1.5rem">
                {skill.icon}
              </IconContainer>{" "}
              {skill.tech}
            </SkillButton>
          ))}
        </FlexContainer> */}
        
        <FlexContainer gap="20px" responsiveFlex> 
          <SkillSectionHeading>Frontend</SkillSectionHeading>
          {frontendSkills.map((skill) => (
            <SkillButton key={skill.id}>
              <IconContainer color="blue" size="1.5rem">
                {skill.icon}
              </IconContainer>{" "}
              {skill.tech}
            </SkillButton>
          ))}
        </FlexContainer>
         <FlexContainer gap="20px" responsiveFlex> 
          <SkillSectionHeading>Backend</SkillSectionHeading>
          {backendSkills.map((skill) => (
            <SkillButton key={skill.id}>
              <IconContainer color="blue" size="1.5rem">
                {skill.icon}
              </IconContainer>{" "}
              {skill.tech}
            </SkillButton>
          ))}
          </FlexContainer>
          <FlexContainer gap="20px" responsiveFlex> 
            <SkillSectionHeading>Others</SkillSectionHeading>
            {devOpsSkills.map((skill) => (
              <SkillButton key={skill.id}>
                <IconContainer color="blue" size="1.5rem">
                  {skill.icon}
                </IconContainer>{" "}
                {skill.tech}
              </SkillButton>
            ))}
            </FlexContainer>
      </FlexContainer>
      
     
    </PaddingContainer>
  );
};

export default MySkills;
