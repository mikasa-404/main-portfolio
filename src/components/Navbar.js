import React, { useEffect, useState } from "react";
import {
  FlexContainer,
  PaddingContainer,
  Container,
  BlueText,
} from "../styles/Global.styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavbarContainer, Logo, MenuIcon } from "../styles/Navbar.styled";
import { theme } from "../utils/Theme";
import NavMenu from "./NavMenu";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
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
    <NavbarContainer bgColor={sticky ? theme.colors.primary : "transparent"}>
      <PaddingContainer
        top="1.2rem"
        bottom="1.2rem"
        responsiveLeft="1rem"
        responsiveRight="1rem"
        responsiveTop="1rem"
        responsiveBottom="1rem"
      >
        <Container>
          <FlexContainer justify="space-between" responsiveFlex>
            {/* letf-logo */}
            <div onClick={scrollToTop}>
              <Logo>
                PriyaJha<BlueText>.dev</BlueText>
              </Logo>
            </div>

            {/* right-icon */}
            <MenuIcon
              as={motion.a}
              whileHover={{ scale: 1.2 }}
              onClick={() => {
                setOpenMenu(true);
              }}
            >
              {" "}
              <GiHamburgerMenu />
            </MenuIcon>
          </FlexContainer>
        </Container>

        <AnimatePresence>
          {openMenu && <NavMenu setOpenMenu={setOpenMenu} />}
        </AnimatePresence>
      </PaddingContainer>
    </NavbarContainer>
  );
};

export default Navbar;
