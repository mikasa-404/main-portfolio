import React, { useEffect, useState } from "react";
import { Container } from "../styles/Global.styled";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Logo,
  MenuIcon,
  NavbarContainer,
  NavbarShell,
  NavLinksGroup,
  NavMenuButton,
  ResumeNavButton,
} from "../styles/Navbar.styled";
import NavMenu from "./NavMenu";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, resumeLink } from "../utils/Data";
import { FaDownload } from "react-icons/fa6";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const onScroll = () => {
      setSticky(window.scrollY > 35);

      const currentSection = navLinks.reduce((current, link) => {
        const section = document.getElementById(link.href);

        if (!section) {
          return current;
        }

        const sectionTop = section.getBoundingClientRect().top;
        return sectionTop <= 160 ? link.href : current;
      }, "Home");

      setActiveSection(currentSection);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <NavbarContainer $sticky={sticky}>
      <Container>
        <NavbarShell $sticky={sticky}>
          <Logo onClick={scrollToTop} aria-label="Scroll to top">
            <span>
              PriyaJha<strong>.dev</strong>
            </span>
          </Logo>

          <NavLinksGroup>
            {navLinks.map((link) => (
              <NavMenuButton
                key={link.id}
                as={motion.a}
                whileHover={{ y: -2 }}
                href={`#${link.href}`}
                onClick={() => setOpenMenu(false)}
                $active={activeSection === link.href}
              >
                {link.name}
              </NavMenuButton>
            ))}
          </NavLinksGroup>

          <ResumeNavButton href={resumeLink} target="_blank" rel="noreferrer">
            Resume
            <FaDownload size={15} />
          </ResumeNavButton>

          <MenuIcon
            as={motion.button}
            whileHover={{ scale: 1.08 }}
            type="button"
            aria-label="Open navigation menu"
            onClick={() => {
              setOpenMenu(true);
            }}
          >
            <GiHamburgerMenu />
          </MenuIcon>
        </NavbarShell>
      </Container>

      <AnimatePresence>
        {openMenu && <NavMenu setOpenMenu={setOpenMenu} />}
      </AnimatePresence>
    </NavbarContainer>
  );
};

export default Navbar;
