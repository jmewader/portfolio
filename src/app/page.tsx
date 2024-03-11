"use client";

import Image from "next/image";
import Footer from "~src/components/Footer";
import Header from "~src/components/Header";
import Hero from "~src/components/widgets/Hero";
import Projects from "~src/components/widgets/Projects";
import TechStack from "~src/components/widgets/TechStack";
import BgImage from "~src/images/bg.png";
import styled from "styled-components";
import { uiKitBreakpoints } from "~src/components/constants";

const StyledBg = styled(Image)`
  position: absolute;
  width: 100%;
  height: 1966px;
  overflow: hidden;

  @media ${uiKitBreakpoints.maxWidth.L} {
    object-fit: cover;
    object-position: top;
    height: 1500px;
  }
`;

const StyledWrap = styled.div`
  overflow: hidden;
  width: 100%;
`;

export default function Home() {
  return (
    <StyledWrap>
      <StyledBg src={BgImage} alt="bg" />

      <Header />
      <main>
        <Hero />
        <TechStack />
        <Projects />
      </main>
      <Footer />
    </StyledWrap>
  );
}
