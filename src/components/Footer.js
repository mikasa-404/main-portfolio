import React, { useState } from "react";
import {
  PaddingContainer,
  Heading,
  BlueText,
  FlexContainer,
  ParaText,
} from "../styles/Global.styled";
import {
  ContactForm,
  ContactGrid,
  ContactIntro,
  ContactLink,
  ContactLinkGrid,
  ContactShell,
  FormInput,
  FormLabel,
  SubmitButton,
} from "../styles/Footer.styled";
import { motion } from "framer-motion";
import { fadeInBottomVariant } from "../utils/Variants";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { contactInfo } from "../utils/Data";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const service_id = "service_v7jnuuu";
    const template_id = "template_y32cui8";
    const public_key = "o76N55bSnpRGOs1LK";
    const template_params = {
      from_name: name,
      from_email: email,
      to_name: "Priya",
      message: message,
    };
    emailjs
      .send(service_id, template_id, template_params, public_key)
      .then((res) => {
        toast.success("Email sent successfully");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        toast.error("Error sending email");
      });
  };

  return (
    <PaddingContainer
      id="Contact"
      top="8%"
      bottom="9%"
      responsiveRight="1rem"
      responsiveLeft="1rem"
      responsiveTop="12%"
      responsiveBottom="12%"
      style={{
        overflow: "hidden",
      }}
    >
      <Heading
        as={motion.h4}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h4"
        align="center"
      >
        MY CONTACT
      </Heading>
      <Heading
        as={motion.h2}
        variants={fadeInBottomVariant}
        initial="hidden"
        whileInView="visible"
        size="h2"
        align="center"
        top="0.5rem"
      >
        Contact <BlueText>Me Here</BlueText>
      </Heading>

      <ContactShell>
        <ContactGrid>
          <ContactIntro
            as={motion.div}
            variants={fadeInBottomVariant}
            initial="hidden"
            whileInView="visible"
          >
            <ParaText>
              I am open to backend, full-stack, and product engineering
              conversations where reliability, performance, and crisp user
              experience matter.
            </ParaText>
            <ContactLinkGrid>
              <ContactLink href={`mailto:${contactInfo.email}`}>
                <span>Email</span>
                <span>{contactInfo.email}</span>
              </ContactLink>
              <ContactLink href={contactInfo.linkedin} target="_blank" rel="noreferrer">
                <span>LinkedIn</span>
                <span>priyajha414</span>
              </ContactLink>
              <ContactLink href={contactInfo.github} target="_blank" rel="noreferrer">
                <span>GitHub</span>
                <span>mikasa-404</span>
              </ContactLink>
            </ContactLinkGrid>
          </ContactIntro>
          <ContactForm
            as={motion.form}
            variants={fadeInBottomVariant}
            initial="hidden"
            whileInView="visible"
            onSubmit={handleSubmit}
          >
            <PaddingContainer bottom="2rem">
              <FormLabel>Name:</FormLabel>
              <FormInput
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></FormInput>
            </PaddingContainer>
            <PaddingContainer bottom="2rem">
              <FormLabel>Email:</FormLabel>
              <FormInput
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></FormInput>
            </PaddingContainer>
            <PaddingContainer bottom="2rem">
              <FormLabel>Message:</FormLabel>
              <FormInput
                as="textarea"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></FormInput>
            </PaddingContainer>

            <FlexContainer justify="center" responsiveFlex>
              <SubmitButton type="submit">Send Message</SubmitButton>
            </FlexContainer>
          </ContactForm>
        </ContactGrid>
      </ContactShell>
    </PaddingContainer>
  );
};

export default Footer;
