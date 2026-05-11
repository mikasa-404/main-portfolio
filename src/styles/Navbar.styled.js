import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: fixed;
  width: 100%;
  top: ${({ $sticky }) => ($sticky ? "0.85rem" : "1.35rem")};
  left: 0;
  z-index: 999;
  transition: top 0.28s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: 0.75rem;
  }
`;

export const NavbarShell = styled.nav`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1.2rem;
  min-height: 68px;
  padding: 0.55rem 0.65rem 0.55rem 1rem;
  border: 1px solid
    ${({ $sticky }) =>
      $sticky ? "rgba(136, 171, 142, 0.34)" : "rgba(255, 255, 255, 0.12)"};
  border-radius: 999px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(136, 171, 142, 0.05)),
    rgba(0, 1, 17, 0.72);
  box-shadow: ${({ $sticky }) =>
    $sticky
      ? "0 18px 60px rgba(0, 0, 0, 0.34)"
      : "0 12px 36px rgba(0, 0, 0, 0.18)"};
  backdrop-filter: blur(16px);
  transition: border-color 0.28s ease, box-shadow 0.28s ease, background 0.28s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr auto;
    min-height: 58px;
    padding: 0.45rem 0.5rem 0.45rem 0.75rem;
  }
`;

export const Logo = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0;
  color: ${({ theme }) => theme.colors.white};
  background: transparent;
  border: 0;
  cursor: pointer;
  font: inherit;
  font-size: 1.35rem;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};

  strong {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.15rem;
  }
`;

export const NavLinksGroup = styled.div`
  justify-self: center;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.35rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.045);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const NavMenuButton = styled.a`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 38px;
  padding: 0 0.95rem;
  overflow: hidden;
  border-radius: 999px;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.para_text_color};
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.secondary : "transparent"};
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  transition: color 0.25s ease, background-color 0.25s ease, transform 0.25s ease;

  &:hover {
    color: ${({ $active, theme }) =>
      $active ? theme.colors.primary : theme.colors.white};
    background-color: ${({ $active, theme }) =>
      $active ? theme.colors.secondary : "rgba(255, 255, 255, 0.08)"};
  }
`;

export const ResumeNavButton = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.55rem;
  min-height: 44px;
  padding: 0 1.1rem;
  border: 1px solid rgba(136, 171, 142, 0.45);
  border-radius: 999px;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  box-shadow: 0 12px 30px rgba(136, 171, 142, 0.18);
  transition: transform 0.25s ease, background-color 0.25s ease, color 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors.primary_light};
    background-color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const MenuIcon = styled.button`
  display: none;
  place-items: center;
  width: 42px;
  height: 42px;
  border: 1px solid rgba(136, 171, 142, 0.34);
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: rgba(255, 255, 255, 0.06);
  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    font-size: 1.35rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: grid;
  }
`;

export const NavMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  width: 100%;
  height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(136, 171, 142, 0.2), transparent 32%),
    rgba(0, 1, 17, 0.96);
  backdrop-filter: blur(16px);
`;

export const MenuItem = styled.a`
  position: relative;
  color: #fff;
  font-size: 2rem;
  margin-top: 2.4rem;
  cursor: pointer;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -0.5rem;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateX(-50%);
    transition: width 0.25s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;
