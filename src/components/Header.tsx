import styled from "styled-components";
import { StyledContainer } from "./ui/Container";
import Navigation from "./Navigation";
import { uiKitModules } from "./constants";
import Social from "./Social";
import Image from "next/image";
import Link from "next/link";
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({ subsets: ['latin'] })

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  padding: ${uiKitModules.x10}px 0;
  justify-content: space-between;
`;

const StyledHeaderWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${uiKitModules.x13}px;
`;

export default function Header() {
  return (
    <StyledContainer className={dmSans.className}>
      <StyledHeader>
        <Link href="/">
          <Image src="/logo.svg" alt="winnick" width={90} height={70} />
        </Link>

        <StyledHeaderWrap>
          <nav>
            <Navigation />
          </nav>
          <Social />
        </StyledHeaderWrap>
      </StyledHeader>
    </StyledContainer>
  );
}
