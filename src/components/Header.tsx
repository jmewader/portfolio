import styled from "styled-components";
import { StyledContainer } from "./ui/Container";
import { uiKitBreakpoints, uiKitModules } from "./constants";
import Social from "./Social";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import LogoImage from "~src/images/logo.svg";
import Navigation from "./Navigation";

const inter = Inter({ subsets: ["latin"] });

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  padding: ${uiKitModules.x10}px 0;
  justify-content: space-between;
  position: relative;

  @media ${uiKitBreakpoints.maxWidth.L} {
    padding: ${uiKitModules.x5}px 0;
  }
`;

const StyledHeaderWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${uiKitModules.x13}px;
`;

const StyledHeaderLogo = styled(Image)`
  display: flex;
  position: relative;

  @media ${uiKitBreakpoints.maxWidth.L} {
    width: 70px;
    height: 50px;
  }
`;

export default function Header() {
  return (
    <StyledContainer className={inter.className}>
      <StyledHeader>
        <Link href="/">
          <StyledHeaderLogo src={LogoImage} alt="logo" width={90} height={70} />
        </Link>

        <StyledHeaderWrap>
          <Navigation />

          <Social />
        </StyledHeaderWrap>
      </StyledHeader>
    </StyledContainer>
  );
}
