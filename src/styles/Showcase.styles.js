import styled from "styled-components";

export const ShowcaseParticleContainer=styled.div`
    position: relative;
`

export const ShowcaseImageCard=styled.div`
    border: 1px solid white;
    position: relative;
    width:max-content;
    padding-top: 2rem;
    border-radius:1rem;
    overflow: hidden;
`


export const Particle=styled.img`
    position: absolute;
    top: ${({ top }) => top};
    bottom: ${({ bottom }) => bottom};
    left: ${({ left }) => left};
    right: ${({ right }) => right};
    transform: rotate(${({rotate})=>rotate});
`