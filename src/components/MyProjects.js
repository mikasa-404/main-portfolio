import React from 'react';
import {PaddingContainer,Heading, BlueText} from "../styles/Global.styled"
import Project from './Project';
import {projects} from "../utils/Data"

const MyProjects = () => {
  return (
    <PaddingContainer
      id="Projects"
      top="5%"
      bottom="5%"
      responsiveTop="20%"
      responsiveLeft="1rem" responsiveRight="1rem"
    >
      <Heading as="h4" size="h4">MY PROJECTS</Heading>
      <Heading as="h2" size="h2">What <BlueText>I have built</BlueText></Heading>
      {projects.map((item)=>(
        <PaddingContainer
         top="5rem"
         bottom="5rem" 
         key={item.id}
        >
          <Project data={item}/>
        </PaddingContainer>
      ))}
    </PaddingContainer>
  )
}

export default MyProjects