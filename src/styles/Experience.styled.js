import styled from "styled-components";

export const TimelineHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const TimelineDate = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 0 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.05);
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.85rem;
  white-space: nowrap;
  flex-shrink: 0;
`;

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

export const ToggleButton = styled.button`
  margin-top: 1rem;
  padding: 0.45rem 0.9rem;
  border: 1px solid rgba(136, 171, 142, 0.45);
  border-radius: 999px;
  background: transparent;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: inherit;
  font-size: 0.88rem;
  cursor: pointer;
  transition: background-color 0.25s ease;

  &:hover {
    background-color: rgba(136, 171, 142, 0.14);
  }
`;
