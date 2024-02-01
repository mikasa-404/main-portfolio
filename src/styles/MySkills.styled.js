import styled from "styled-components";


export const SkillsCardContainer=styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 2rem;
    padding: 0 5%;

    @media (max-width: ${({theme})=>theme.breakpoints.mobile}) {
        grid-template-columns: auto auto ;
        padding: 0;
    }
`
export const SkillsCard=styled.div`
    width: 170px;
    border: 1px solid #fff;
    padding: 2rem 0;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    background-color: ${({theme})=>theme.colors.primary_light};

    @media (max-width: ${({theme})=>theme.breakpoints.mobile}) {
        width: 100%;
        margin-top: 2rem ;
    }
    
`