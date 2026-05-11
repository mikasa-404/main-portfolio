import styled from "styled-components";

export const TimelineTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.35rem;
  line-height: 1.35;
`;

export const TimelineSubtitle = styled.h4`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  margin-top: 0.35rem;
`;

export const TimelineMeta = styled.p`
  color: ${({ theme }) => theme.colors.para_text_color};
  font-size: 0.95rem;
  margin-top: 0.25rem;
`;

export const AchievementList = styled.ul`
  display: grid;
  gap: 0.85rem;
  padding-left: 1.1rem;
  margin-top: 1.15rem;
`;

export const AchievementItem = styled.li`
  color: ${({ theme }) => theme.colors.para_text_color};
  line-height: 1.65;
`;

export const ImpactPillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 1.25rem;
`;

export const ImpactPill = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0 0.8rem;
  border: 1px solid rgba(136, 171, 142, 0.35);
  border-radius: 999px;
  color: ${({ theme }) => theme.colors.white};
  background-color: rgba(136, 171, 142, 0.12);
  font-size: 0.9rem;
`;
