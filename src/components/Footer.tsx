import styled from "styled-components";
import { StyledContainer } from "./ui/Container";
import Navigation from "./Navigation";
import { uiKitColors, uiKitFontSizes, uiKitModules } from "./constants";
import Social from "./Social";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: ${uiKitModules.x10}px 0;
  justify-content: space-between;
  flex-direction: column;
`;

const StyledFooterTop = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 ${uiKitModules.x8}px;
`;

const StyledFooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top: 2px solid ${uiKitColors.strokesInvert};
  padding: ${uiKitModules.x8}px 0 0;
`;

const StyledFooterContact = styled.div`
  display: flex;
  align-items: center;
  gap: ${uiKitModules.x13}px;
`;

const StyledContactInfo = styled.div`
  display: flex;
  gap: ${uiKitModules.x10}px;
  font-size: ${uiKitFontSizes.XS}px;
`;

const StyledContactLink = styled(Link)`
  color: ${uiKitColors.textSecondary};
  text-decoration: none;
`;

const StyledCopyright = styled.p`
  color: ${uiKitColors.textSecondary};
  font-size: ${uiKitFontSizes.XS}px;
  text-align: center;
`;

export default function Footer() {
  return (
    <StyledContainer className={inter.className}>
      <StyledFooter>
        <StyledFooterTop>
          <Link href="/">
            <Image src="/logoV2.svg" alt="logo" width={90} height={70} />
          </Link>

          <StyledFooterContact>
            <StyledContactInfo>
              <StyledContactLink href="tel:+79523635050">+7 (952) 3635050</StyledContactLink>
              <StyledContactLink href="mailto:anastasiabovanenko@gmail.com">anastasiabovanenko@gmail.com</StyledContactLink>
            </StyledContactInfo>

            <Social />
          </StyledFooterContact>
        </StyledFooterTop>

        <StyledFooterBottom>
          <nav>
            <Navigation />
          </nav>

          <StyledCopyright> &copy; {new Date().getFullYear()} Winnick. Создано с ❤️ и ☕</StyledCopyright>
        </StyledFooterBottom>
      </StyledFooter>
    </StyledContainer>
  );
}
