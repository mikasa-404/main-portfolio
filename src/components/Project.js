import React from 'react'
import {PaddingContainer,Heading, FlexContainer, ParaText, IconContainer,Button} from "../styles/Global.styled"
import { FaGithub } from 'react-icons/fa'
import {ProjectImage, ProjectImageContainer, TechStackCard, GithubButton} from "../styles/MyProjects.styled"
import {motion} from "framer-motion"
import { fadeInLeftVariant,fadeInRightVariant } from '../utils/Variants'

const Project = ({data}) => {
  return (
    <FlexContainer 
        fullWidthChild
        direction={data.reverse ? 'row-reverse': false}
    >
        {/* left-section */}
        <motion.div
            variants={data.reverse? fadeInRightVariant: fadeInLeftVariant}
            initial="hidden"
            whileInView="visible"
        >
            <FlexContainer gap="1rem">
                <Heading as="h3" size="h3" bottom="1rem">
                    {data.project_name}
                </Heading>
                <IconContainer color='blue' size="2rem">
                    <GithubButton href={data.github_link} target="blank"><FaGithub/></GithubButton>
                </IconContainer>
            </FlexContainer>

            <PaddingContainer top="1rem">
                <FlexContainer gap="1.5rem">
                    {
                        data.tech_stack.map((stack, index)=>(
                            <TechStackCard key={index}>{stack}</TechStackCard>
                        ))
                    }
                </FlexContainer>
            </PaddingContainer> 

            <ParaText top="1.5rem" bottom="2rem">{data.project_desc}</ParaText>
            <Button href={data.project_url} target="blank">
                Visit website   
            </Button>
        </motion.div>
        <ProjectImageContainer
            as={motion.div}
            variants={data.reverse? fadeInLeftVariant: fadeInRightVariant}
            initial="hidden"
            whileInView="visible"   
            justify={data.reverse ? 'flex-start': 'flex-end'}>
            <ProjectImage src={data.project_img}></ProjectImage>
        </ProjectImageContainer>
    </FlexContainer>
  )
}

export default Project