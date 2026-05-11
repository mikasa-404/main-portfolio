import styled from "styled-components";

export const ProjectSectionHeader = styled.div`
  margin-bottom: 2.5rem;

  @media (max-width: 980px) {
    margin-bottom: 2rem;
  }
`;

export const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-items: stretch;
  gap: 1.2rem;
  margin-top: 1rem;
  padding-bottom: 2rem;

  @media (max-width: 1180px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
    gap: 1rem;
    margin-left: -1rem;
    margin-right: -1rem;
    padding: 0 1rem 1.5rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      height: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(136, 171, 142, 0.55);
      border-radius: 999px;
    }
  }
`;

export const ProjectCard = styled.article`
  min-height: 500px;
  perspective: 1400px;
  cursor: pointer;
  outline: none;
  scroll-snap-align: start;

  @media (hover: hover) {
    &:hover > div,
    &:focus-visible > div,
    &:focus-within > div {
      transform: rotateY(180deg);
    }
  }

  ${({ $flipped }) =>
    $flipped &&
    `
      > div {
        transform: rotateY(180deg);
      }
    `}

  &:focus-visible > div {
    box-shadow: 0 0 0 2px rgba(136, 171, 142, 0.55);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex: 0 0 min(84vw, 360px);
    min-height: 520px;
  }
`;

export const ProjectFlipInner = styled.div`
  position: relative;
  width: 100%;
  min-height: 500px;
  transform-style: preserve-3d;
  transition: transform 0.65s cubic-bezier(0.2, 0.85, 0.25, 1);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 520px;
  }
`;

export const ProjectFace = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  overflow: hidden;
  backface-visibility: hidden;
  border: 1px solid rgba(255, 255, 255, 0.11);
  border-radius: 8px;
  background:
    radial-gradient(circle at top left, rgba(136, 171, 142, 0.2), transparent 34%),
    linear-gradient(145deg, rgba(136, 171, 142, 0.1), rgba(255, 255, 255, 0.025)),
    rgba(25, 25, 25, 0.82);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.25);

  &::before {
    content: "";
    position: absolute;
    inset: 0 auto 0 0;
    width: 4px;
    background: linear-gradient(
      180deg,
      transparent,
      ${({ theme }) => theme.colors.secondary},
      transparent
    );
    opacity: 0.75;
  }
`;

export const ProjectFront = styled.div``;

export const ProjectBack = styled.div`
  transform: rotateY(180deg);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(136, 171, 142, 0.55);
    border-radius: 999px;
  }
`;

export const ProjectOverline = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.85rem;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  line-height: 1.45;

  &::before {
    content: "";
    width: 7px;
    height: 7px;
    flex: 0 0 7px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 16px rgba(136, 171, 142, 0.65);
  }
`;

export const ProjectTitleRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
`;

export const ProjectNumber = styled.span`
  color: rgba(255, 255, 255, 0.14);
  font-size: 2.1rem;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  line-height: 1;
`;

export const ProjectImpact = styled.p`
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.5;
  margin-top: 1rem;
  padding: 0.8rem 0.9rem;
  border-left: 3px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 0 8px 8px 0;
  background-color: rgba(136, 171, 142, 0.08);
  font-size: 0.95rem;
`;

export const TechStackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 0.85rem;
`;

export const TechStackCard = styled.div`
  display: inline-block;
  background-color: rgba(136, 171, 142, 0.13);
  color: ${({ theme }) => theme.colors.white};
  padding: 0.3rem 0.6rem;
  border: 1px solid rgba(136, 171, 142, 0.34);
  border-radius: 5px;
  font-size: 0.82rem;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
`;

export const TechStackMore = styled(TechStackCard)`
  color: ${({ theme }) => theme.colors.secondary};
  background-color: rgba(255, 255, 255, 0.04);
`;

export const FlipHint = styled.p`
  display: inline-flex;
  align-items: center;
  width: max-content;
  margin-top: auto;
  padding: 0.35rem 0.65rem;
  border: 1px solid rgba(136, 171, 142, 0.26);
  border-radius: 999px;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: rgba(136, 171, 142, 0.08);
  font-size: 0.9rem;
`;

export const ProjectDetailsTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  margin-top: 1rem;
`;

export const FeatureList = styled.ul`
  display: grid;
  gap: 0.7rem;
  padding-left: 0;
  margin-top: 0.85rem;
  list-style: none;
`;

export const FeatureItem = styled.li`
  position: relative;
  color: ${({ theme }) => theme.colors.para_text_color};
  line-height: 1.55;
  padding-left: 1.15rem;
  font-size: 0.95rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.62rem;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ProjectActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: auto;
  padding-top: 1.2rem;
`;

export const ProjectAction = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  min-height: 42px;
  padding: 0 0.9rem;
  color: ${({ theme, $variant }) =>
    $variant === "primary" ? theme.colors.primary : theme.colors.white};
  background-color: ${({ theme, $variant }) =>
    $variant === "primary" ? theme.colors.secondary : "transparent"};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.white};
  }
`;

export const ProjectImageFrame = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 0.9rem;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 8px;
  background-color: rgba(0, 1, 17, 0.78);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.32);
  transition: border-color 0.35s ease, transform 0.35s ease;

  ${ProjectCard}:hover & {
    border-color: rgba(136, 171, 142, 0.38);
  }
`;

export const ProjectImageToolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  height: 28px;
  padding: 0 0.8rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.04);
`;

export const ProjectImageDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary};
  opacity: ${({ $muted }) => ($muted ? 0.36 : 0.95)};
`;

export const ProjectImage = styled.img`
  display: block;
  width: 100%;
  height: 155px;
  object-fit: cover;
  transition: transform 0.45s ease;

  ${ProjectImageFrame}:hover & {
    transform: scale(1.035);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 170px;
  }
`;
