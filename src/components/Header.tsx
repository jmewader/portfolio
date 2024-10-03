import styled from "styled-components";
import { StyledContainer } from "./ui/Container";
import { uiKitBreakpoints, uiKitModules } from "./constants";
import Social from "./Social";
import Link from "next/link";
import { Inter } from "next/font/google";
import Navigation from "./Navigation";
import Logo from "./Logo";

const inter = Inter({ subsets: ["latin"] });

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  padding: ${uiKitModules.x7}px 0;
  justify-content: space-between;
  position: relative;

  @media ${uiKitBreakpoints.maxWidth.L} {
    padding: ${uiKitModules.x5}px 0;
  }
`;

const StyledHeaderWrap = styled.nav`
  display: flex;
  align-items: center;
  gap: ${uiKitModules.x13}px;
`;

export default function Header() {
  return (
    <StyledContainer className={inter.className}>
      <StyledHeader>
        <Link href="/">
          <Logo />
        </Link>

        <StyledHeaderWrap>
          <Navigation />

          <Social />
        </StyledHeaderWrap>
      </StyledHeader>
    </StyledContainer>
  );
}
