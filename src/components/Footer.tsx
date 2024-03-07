import styled from "styled-components";
import { StyledContainer } from "./ui/Container";
import Navigation from "./Navigation";
import { uiKitModules } from "./constants";
import Social from "./Social";

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  padding: ${uiKitModules.x10}px 0;
  justify-content: space-between;
`;

export default function Footer() {
  return (
    <StyledContainer>
      <StyledFooter>
        <div>Logo</div>

        <nav>
          <Navigation />
        </nav>

        <Social />
      </StyledFooter>
    </StyledContainer>
  );
}
