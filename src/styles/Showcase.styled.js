import styled from "styled-components";
export const StyledLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: inherit;
`;

export const HeroTextBlock = styled.div`
  max-width: 780px;
  padding-top: 0.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: 100%;
    padding-top: 0;
  }
`;

export const HeroLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(330px, 410px);
  align-items: start;
  gap: clamp(3rem, 5vw, 5.25rem);

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const HeroKicker = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  margin-bottom: clamp(1rem, 1.8vh, 1.35rem);
`;

export const KickerDot = styled.span`
  width: 8px;
  height: 8px;
  flex: 0 0 8px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0 0 18px rgba(136, 171, 142, 0.7);
`;

export const HeroTypingLine = styled.h3`
  display: flex;
  align-items: baseline;
  gap: 0.65rem;
  min-height: 3.35rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.9rem;
  line-height: 1.25;
  white-space: nowrap;
  margin-top: 1.25rem;

  @media (max-width: 980px) {
    white-space: normal;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
    min-height: 4.4rem;
    font-size: 1.45rem;
  }
`;

export const TypingText = styled.span`
  display: inline-block;
  min-width: 350px;
  color: ${({ theme }) => theme.colors.secondary};
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-width: 0;
    margin-top: 0.25rem;
  }
`;

export const HeroLocation = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.35rem;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  margin-top: 0.2rem;
`;

export const HeroFlow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.85rem;
  max-width: 720px;
  margin: 1.8rem 0 2rem;
  padding: 1rem 0;
  border-top: 1px solid rgba(136, 171, 142, 0.32);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
`;

export const HeroFlowItem = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  line-height: 1.5;
`;

export const HeroFlowDivider = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary};
  opacity: 0.8;
`;

export const HeroVisual = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-left: 1rem;
  padding-top: clamp(1.5rem, 3vh, 2.4rem);

  @media (max-width: 980px) {
    justify-content: center;
    padding-left: 0;
    padding-top: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const ShowcaseParticleContainer = styled.div`
  position: relative;
  /* border: 5px solid red; */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;
export const ShowcaseImageCard = styled.div`
  position: relative;
  overflow: hidden;
  height: 420px;
  width: 100%;
  max-width: 390px;
  object-fit: cover;
  object-position: center;
  border-radius: 24px;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
`;
export const Image = styled.img`
  border-radius: 24px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Particle = styled.img`
  position: absolute;
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  transform: rotate(${({ rotate }) => rotate});
`;
export const ResumeButoon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 8px;
  gap: 8px;
  transition: all 0.3s ease;
  font-size: 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary_light};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 1rem;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary_light};
  }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
    }
`;
