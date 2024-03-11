"use client";

import Image from "next/image";
import Footer from "~src/components/Footer";
import Header from "~src/components/Header";
import Hero from "~src/components/widgets/Hero";
import Projects from "~src/components/widgets/Projects";
import TechStack from "~src/components/widgets/TechStack";
import BgImage from "~src/images/bg.png";
import styled from "styled-components";

const StyledBg = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const StyledWrap = styled.div`
  overflow: hidden;
  width: 100%;
`;

export default function Home() {
  return (
    <StyledWrap>
      <StyledBg>
        <Image src={BgImage} alt="bg" width={1960} height={1960} />
      </StyledBg>
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
