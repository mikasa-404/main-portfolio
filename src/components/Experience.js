import React from "react";
import {
  PaddingContainer,
  Heading,
  BlueText,
  FadeImage,
} from "../styles/Global.styled";
import { motion } from "framer-motion";
import { fadeInBottomVariant, fadeInTopVariant } from "../utils/Variants";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";
import left from "../assets/left.png";
import { experienceItems } from "../utils/Data";
import {
  AchievementItem,
  AchievementList,
  ExperienceBadge,
  ExperienceCard,
  ExperienceContent,
  ExperienceList,
  ExperienceMarker,
  ExperienceRail,
  ExperienceTrack,
  ImpactPill,
  ImpactPillRow,
  MetaGroup,
  MetaItem,
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
      <ExperienceTrack
        as={motion.div}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
      >
        <ExperienceList>
          {experienceItems.map((item, index) => (
            <ExperienceCard
              key={item.id}
              as={motion.article}
              whileHover={{ y: -4 }}
              $accent={item.accent}
            >
              <ExperienceRail>
                <ExperienceMarker $accent={item.accent}>
                  <FiBriefcase />
                </ExperienceMarker>
              </ExperienceRail>

              <ExperienceContent>
                <TimelineMeta>
                  <ExperienceBadge $accent={item.accent}>
                    {item.accent
                      ? "Current"
                      : index === experienceItems.length - 1
                        ? "Education"
                        : "Experience"}
                  </ExperienceBadge>
                  <MetaGroup>
                    <MetaItem>
                      <FiCalendar />
                      {item.date}
                    </MetaItem>
                    <MetaItem>
                      <FiMapPin />
                      {item.location}
                    </MetaItem>
                  </MetaGroup>
                </TimelineMeta>

                <TimelineTitle>{item.role}</TimelineTitle>
                <TimelineSubtitle>{item.company}</TimelineSubtitle>

                <AchievementList>
                  {item.highlights.map((highlight, highlightIndex) => (
                    <AchievementItem key={highlightIndex}>
                      {highlight}
                    </AchievementItem>
                  ))}
                </AchievementList>

                <ImpactPillRow>
                  {item.impact.map((metric, metricIndex) => (
                    <ImpactPill key={metricIndex}>{metric}</ImpactPill>
                  ))}
                </ImpactPillRow>
              </ExperienceContent>
            </ExperienceCard>
          ))}
        </ExperienceList>
      </ExperienceTrack>
    </PaddingContainer>
  );
};

export default Experience;
