import styled from "styled-components";

export const ProgressWrap = styled.div`
  position: fixed;
  right: 1.25rem;
  top: 7.5rem;
  bottom: 7.5rem;
  z-index: 998;
  display: flex;
  align-items: stretch;
  justify-content: center;
  width: 18px;
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    left: 0;
    right: 0;
    top: auto;
    bottom: 0;
    width: auto;
    height: 4px;
  }
`;

export const ProgressRail = styled.div`
  position: relative;
  width: 3px;
  height: 100%;
  border-radius: 999px;
  background:
    linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.04)),
    rgba(255, 255, 255, 0.06);

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: rgba(136, 171, 142, 0.55);
    transform: translateX(-50%);
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    height: 100%;
    border-radius: 0;

    &::before,
    &::after {
      display: none;
    }
  }
`;

export const ProgressFill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ $progress }) => $progress}%;
  border-radius: inherit;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.secondary},
    rgba(255, 255, 255, 0.85)
  );
  box-shadow: 0 0 18px rgba(136, 171, 142, 0.55);
  transition: height 0.16s ease-out, width 0.16s ease-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: ${({ $progress }) => $progress}%;
    height: 100%;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.secondary},
      rgba(255, 255, 255, 0.85)
    );
  }
`;

export const ProgressDot = styled.div`
  position: absolute;
  left: 50%;
  top: ${({ $progress }) => $progress}%;
  width: 14px;
  height: 14px;
  border: 2px solid rgba(255, 255, 255, 0.86);
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow:
    0 0 0 6px rgba(136, 171, 142, 0.14),
    0 0 24px rgba(136, 171, 142, 0.68);
  transform: translate(-50%, -50%);
  transition: top 0.16s ease-out, left 0.16s ease-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: 50%;
    left: ${({ $progress }) => $progress}%;
    width: 10px;
    height: 10px;
  }
`;
