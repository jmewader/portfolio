import styled from "styled-components";
import { StyledContainer } from "./ui/Container";
import Navigation from "./Navigation";
import { uiKitBreakpoints, uiKitColors, uiKitFontSizes, uiKitModules } from "./constants";
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
  position: relative;

  @media ${uiKitBreakpoints.maxWidth.L} {
    padding: ${uiKitModules.x5}px 0;
  }
`;

const StyledFooterTop = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 ${uiKitModules.x8}px;

  @media ${uiKitBreakpoints.maxWidth.L} {
    padding: 0 0 ${uiKitModules.x4}px;
  }
`;

const StyledFooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top: 2px solid ${uiKitColors.strokesInvert};
  padding: ${uiKitModules.x8}px 0 0;

  @media ${uiKitBreakpoints.maxWidth.L} {
    padding: ${uiKitModules.x4}px 0 0;
  }
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${uiKitColors.textSecondary};
  font-size: ${uiKitFontSizes.XS}px;
  text-align: center;
`;

const StyledFooterLogo = styled.div`
  width: 90px;
  height: 70px;
  display: flex;
  position: relative;

  @media ${uiKitBreakpoints.maxWidth.L} {
    width: 70px;
    height: 50px;
  }
`;

const StyledDesktopVisible = styled.div`
  display: flex;

  @media ${uiKitBreakpoints.maxWidth.S} {
    display: none;
  }
`;

const ContactInfo = () => {
  return (
    <StyledContactInfo>
      <StyledContactLink href="tel:+79523635050">+7 (952) 3635050</StyledContactLink>
      <StyledContactLink href="mailto:anastasiabovanenko@gmail.com">anastasiabovanenko@gmail.com</StyledContactLink>
    </StyledContactInfo>
  );
};

export default function Footer() {
  return (
    <StyledContainer className={inter.className}>
      <StyledFooter>
        <StyledFooterTop>
          <Link href="/">
            <StyledFooterLogo>
              <Image src="/logoV2.svg" alt="logo" fill />
            </StyledFooterLogo>
          </Link>

          <StyledFooterContact>
            <StyledDesktopVisible>
              <ContactInfo />
            </StyledDesktopVisible>

            <Social />
          </StyledFooterContact>
        </StyledFooterTop>

        <StyledFooterBottom>
          {/* <nav>
            <Navigation />
          </nav> */}

          <StyledCopyright> &copy; {new Date().getFullYear()} Winnick. Создано с ❤️ и ☕</StyledCopyright>
        </StyledFooterBottom>
      </StyledFooter>
    </StyledContainer>
  );
}
