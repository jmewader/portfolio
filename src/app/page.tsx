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
  width: 1718px;
  height: 1966px;
  overflow: hidden;

  @media ${uiKitBreakpoints.maxWidth.L} {
    object-fit: cover;
    object-position: top;
    width: 1200px;
    height: 1500px;
  }

  @media ${uiKitBreakpoints.maxWidth.S} {
    width: 700px;
    height: 1000px;
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
