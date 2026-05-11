import styled from "styled-components";

export const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.85rem;
  margin-top: 2rem;

  @media (max-width: 1180px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillGroup = styled.div`
  position: relative;
  min-height: 100%;
  padding: 0.85rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  background:
    linear-gradient(145deg, rgba(136, 171, 142, 0.08), rgba(255, 255, 255, 0.02)),
    rgba(25, 25, 25, 0.68);
  box-shadow: 0 16px 44px rgba(0, 0, 0, 0.18);
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.85rem;
    bottom: 0.85rem;
    width: 3px;
    border-radius: 999px;
    background-color: ${({ theme }) => theme.colors.secondary};
    opacity: 0.7;
  }

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(136, 171, 142, 0.35);
    box-shadow: 0 22px 58px rgba(0, 0, 0, 0.26);
  }
`;

export const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.7rem;
  padding-left: 0.45rem;
`;

export const SkillSectionHeading = styled.h4`
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.95rem;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

export const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  padding-left: 0.45rem;
`;

export const SkillButton = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  min-height: 31px;
  padding: 0.3rem 0.55rem;
  border: 1px solid rgba(136, 171, 142, 0.26);
  border-radius: 999px;
  color: ${({ theme }) => theme.colors.para_text_color};
  background-color: rgba(0, 1, 17, 0.34);
  font-size: 0.8rem;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  white-space: nowrap;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.02);
  transition: all 0.25s ease;

  & > div {
    transition: color 0.25s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
  }

  &:hover > div {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 920px) {
    font-size: 0.84rem;
  }
`;
