import styled from "styled-components";

export const ContactShell=styled.div`
    position: relative;
    max-width: 1080px;
    margin: 3rem auto 0;
    padding: 2.25rem;
    overflow: hidden;
    border: 1px solid rgba(136, 171, 142, 0.22);
    border-radius: 8px;
    background:
        radial-gradient(circle at top left, rgba(136, 171, 142, 0.18), transparent 32%),
        linear-gradient(145deg, rgba(255, 255, 255, 0.035), rgba(136, 171, 142, 0.06)),
        rgba(25, 25, 25, 0.58);
    box-shadow: 0 28px 90px rgba(0, 0, 0, 0.28);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &::before {
        content: "";
        position: absolute;
        left: 2.4rem;
        right: 2.4rem;
        top: 0;
        height: 2px;
        background: linear-gradient(
            90deg,
            transparent,
            ${({ theme }) => theme.colors.secondary},
            transparent
        );
    }

    &:hover {
        border-color: rgba(136, 171, 142, 0.34);
        box-shadow: 0 34px 100px rgba(0, 0, 0, 0.34);
    }

    @media (max-width: ${({theme})=>theme.breakpoints.mobile}) {
        margin-top: 2.25rem;
        padding: 1.1rem;
    }
`

export const ContactGrid=styled.div`
    display: grid;
    grid-template-columns: minmax(0, 0.78fr) minmax(360px, 1fr);
    gap: 3rem;
    align-items: start;

    @media (max-width: 980px) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`

export const ContactForm=styled.form`
    width: 100%;
    padding: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    background-color: rgba(0, 1, 17, 0.3);

    @media (max-width: ${({theme})=>theme.breakpoints.mobile}) {
        padding: 1rem;
    }
`

export const ContactIntro=styled.div`
    width: 100%;
    padding-top: 0.5rem;

    @media (max-width: ${({theme})=>theme.breakpoints.mobile}) {
        padding-top: 0;
    }
`

export const ContactLinkGrid=styled.div`
    display: grid;
    gap: 1rem;
    margin-top: 2rem;
`

export const ContactLink=styled.a`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    min-height: 52px;
    padding: 0 1rem;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    border: 1px solid rgba(136, 171, 142, 0.35);
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.primary_light};
    transition: all 0.3s ease;
    word-break: break-word;

    span:first-child {
        color: ${({ theme }) => theme.colors.secondary};
        font-weight: ${({ theme }) => theme.fonts.weight.medium};
    }

    span:last-child {
        text-align: right;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.secondary};
        border-color: ${({ theme }) => theme.colors.secondary};

        span:first-child {
            color: ${({ theme }) => theme.colors.primary};
        }
    }

    @media (max-width: ${({theme})=>theme.breakpoints.mobile}) {
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;
        padding: 0.85rem 1rem;

        span:last-child {
            text-align: left;
        }
    }
`

export const FormLabel=styled.p`
    color:  ${({ theme }) => theme.colors.para_text_color};
    padding-bottom: 10px;
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
`

export const FormInput=styled.input`
    width: 100%;
    background-color:  ${({ theme }) => theme.colors.primary_light};
    border: 1px solid  ${({ theme }) => theme.colors.para_text_color};
    color:  ${({ theme }) => theme.colors.para_text_color};
    border-radius: 5px;
    padding: 15px;
    min-height: ${({ as }) => (as === "textarea" ? "145px" : "52px")};
    resize: vertical;
    transition: border-color 0.25s ease, box-shadow 0.25s ease;

    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.secondary};
        box-shadow: 0 0 0 3px rgba(136, 171, 142, 0.12);
    }

    &::placeholder{
        color:  ${({ theme }) => theme.colors.para_text_color};
    }
`

export const SubmitButton=styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    min-height: 52px;
    padding: 0 2rem;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    font: inherit;

    &:hover {
        color: ${({ theme }) => theme.colors.primary_light};
        background-color: ${({ theme }) => theme.colors.white};
        border-color: ${({ theme }) => theme.colors.white};
    }
`
