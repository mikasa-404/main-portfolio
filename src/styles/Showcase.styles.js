import styled from "styled-components";

export const ShowcaseParticleContainer=styled.div`
    position: relative;
    /* border: 5px solid red; */
    @media (max-width: ${({theme})=>theme.breakpoints.mobile}) {
        display: none;
    }

`
export const ShowcaseImageCard=styled.div`
    position: relative;
    overflow: hidden;
    height: 100%;
    width: max-content;
`
export const Image=styled.img`
    border-radius: 5%;
    height: 100%;
    margin-right: 20px;
`

export const Particle=styled.img`
    position: absolute;
    top: ${({ top }) => top};
    bottom: ${({ bottom }) => bottom};
    left: ${({ left }) => left};
    right: ${({ right }) => right};
    transform: rotate(${({rotate})=>rotate});
`