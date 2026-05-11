import React from "react";
import {
  PaddingContainer,
  Heading,
  BlueText,
  FadeImage,
} from "../styles/Global.styled";
import { motion } from "framer-motion";
import { fadeInTopVariant } from "../utils/Variants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import left from "../assets/left.png";
import { experienceItems } from "../utils/Data";
import {
  AchievementItem,
  AchievementList,
  ImpactPill,
  ImpactPillRow,
  TimelineMeta,
  TimelineSubtitle,
  TimelineTitle,
} from "../styles/Experience.styled";

const Experience = () => {
  return (
    <PaddingContainer
      id="Experience"
      top="7%"
      bottom="7%"
      responsiveRight="1rem"
      responsiveLeft="1rem"
    >
      <FadeImage src={left} left="0" width="inherit" />

      <Heading
        as={motion.h4}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        size="h4"
        align="center"
      >
        My Experience
      </Heading>
      <Heading
        as={motion.h2}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        size="h2"
        align="center"
      >
        Where <BlueText>I have worked</BlueText>
      </Heading>
      <PaddingContainer top="3.5%">
        <VerticalTimeline>
          {experienceItems.map((item) => (
            <VerticalTimelineElement
              key={item.id}
              contentStyle={{
                background: item.accent
                  ? "linear-gradient(145deg, rgba(136, 171, 142, 0.16), #191919)"
                  : "#191919",
                color: "#fff",
                border: item.accent
                  ? "1px solid rgba(136, 171, 142, 0.45)"
                  : "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 18px 48px rgba(0, 0, 0, 0.28)",
              }}
              contentArrowStyle={{ borderRight: "7px solid #191919" }}
              date={item.date}
              iconStyle={{ background: "#88AB8E", color: "#fff" }}
            >
              <TimelineTitle>{item.role}</TimelineTitle>
              <TimelineSubtitle>{item.company}</TimelineSubtitle>
              <TimelineMeta>{item.location}</TimelineMeta>
              <AchievementList>
                {item.highlights.map((highlight, index) => (
                  <AchievementItem key={index}>{highlight}</AchievementItem>
                ))}
              </AchievementList>
              <ImpactPillRow>
                {item.impact.map((metric, index) => (
                  <ImpactPill key={index}>{metric}</ImpactPill>
                ))}
              </ImpactPillRow>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </PaddingContainer>
    </PaddingContainer>
  );
};

export default Experience;
