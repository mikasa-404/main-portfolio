import styled from "styled-components";

export const ExperienceTrack = styled.div`
  position: relative;
  max-width: 1080px;
  margin: 2.6rem auto 0;
`;

export const ExperienceList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.1rem;

  & > article:first-child {
    grid-column: 1 / -1;
  }

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const ExperienceCard = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  gap: 1rem;
  border: 1px solid
    ${({ $accent }) =>
      $accent ? "rgba(136, 171, 142, 0.42)" : "rgba(255, 255, 255, 0.08)"};
  border-radius: 8px;
  background:
    ${({ $accent }) =>
      $accent
        ? "linear-gradient(145deg, rgba(136, 171, 142, 0.14), rgba(25, 25, 25, 0.86))"
        : "linear-gradient(145deg, rgba(255, 255, 255, 0.045), rgba(25, 25, 25, 0.72))"},
    rgba(25, 25, 25, 0.76);
  box-shadow: ${({ $accent }) =>
    $accent
      ? "0 22px 70px rgba(136, 171, 142, 0.1)"
      : "0 18px 48px rgba(0, 0, 0, 0.22)"};
  overflow: hidden;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0 auto 0 0;
    width: 3px;
    background-color: ${({ theme, $accent }) =>
      $accent ? theme.colors.secondary : "rgba(136, 171, 142, 0.22)"};
  }

  &:hover {
    border-color: rgba(136, 171, 142, 0.46);
    box-shadow: 0 24px 72px rgba(0, 0, 0, 0.32);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export const ExperienceRail = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: 1.35rem 0;

  &::after {
    content: "";
    position: absolute;
    top: 4.35rem;
    bottom: 0;
    width: 1px;
    background: linear-gradient(
      to bottom,
      rgba(136, 171, 142, 0.38),
      rgba(136, 171, 142, 0)
    );
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const ExperienceMarker = styled.span`
  position: relative;
  z-index: 1;
  display: inline-grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid rgba(136, 171, 142, 0.45);
  border-radius: 50%;
  color: ${({ theme, $accent }) =>
    $accent ? theme.colors.primary : theme.colors.secondary};
  background-color: ${({ theme, $accent }) =>
    $accent ? theme.colors.secondary : "rgba(136, 171, 142, 0.1)"};
  box-shadow: ${({ $accent }) =>
    $accent ? "0 0 26px rgba(136, 171, 142, 0.35)" : "none"};

  svg {
    width: 17px;
    height: 17px;
  }
`;

export const ExperienceContent = styled.div`
  padding: 1.25rem 1.35rem 1.25rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.15rem;
  }
`;

export const TimelineTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(1.18rem, 1.8vw, 1.45rem);
  line-height: 1.35;
  margin-top: 0.85rem;
`;

export const TimelineSubtitle = styled.h4`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  margin-top: 0.25rem;
`;

export const TimelineMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const ExperienceBadge = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 0.72rem;
  border: 1px solid
    ${({ $accent }) =>
      $accent ? "rgba(136, 171, 142, 0.42)" : "rgba(255, 255, 255, 0.1)"};
  border-radius: 999px;
  color: ${({ theme, $accent }) =>
    $accent ? theme.colors.primary : theme.colors.secondary};
  background-color: ${({ theme, $accent }) =>
    $accent ? theme.colors.secondary : "rgba(136, 171, 142, 0.08)"};
  font-size: 0.75rem;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

export const MetaGroup = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.65rem;
`;

export const MetaItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: ${({ theme }) => theme.colors.para_text_color};
  font-size: 0.88rem;

  svg {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const AchievementList = styled.ul`
  display: grid;
  gap: 0.58rem;
  padding-left: 1.1rem;
  margin-top: 1rem;
`;

export const AchievementItem = styled.li`
  color: ${({ theme }) => theme.colors.para_text_color};
  line-height: 1.52;
  font-size: 0.95rem;

  &::marker {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ImpactPillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const ImpactPill = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 0 0.68rem;
  border: 1px solid rgba(136, 171, 142, 0.35);
  border-radius: 999px;
  color: ${({ theme }) => theme.colors.white};
  background-color: rgba(136, 171, 142, 0.12);
  font-size: 0.82rem;
`;
