import styled from "styled-components";
export const StyledLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: inherit;
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
  height: 400px;
  width: max-content;
  object-fit: cover;
`;
export const Image = styled.img`
  border-radius: 5%;
  height: 100%;
  margin-right: 20px;
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
  display: block;
  width: max-content;
  border: 1px solid ;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary_light};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  font-weight:  ${({ theme }) => theme.fonts.weight.medium};
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary_light};
  }
`;
