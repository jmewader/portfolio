"use client";

import Image from "next/image";
import Hero from "~src/components/widgets/Hero";
import Projects from "~src/components/widgets/Projects";
import TechStack from "~src/components/widgets/TechStack";
import BgImage from "~src/images/bg.png";
import styled from "styled-components";
import { uiKitBreakpoints } from "~src/components/constants";
import Layout from "~src/components/Layout";

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

export default function Home() {
  return (
    <>
      <StyledBg src={BgImage} alt="bg" />
      <Layout>
        <Hero />
        <TechStack />
        <Projects />
      </Layout>
    </>
  );
}
