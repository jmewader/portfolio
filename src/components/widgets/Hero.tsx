import styled from "styled-components";
import { uiKitBreakpoints, uiKitColors, uiKitModules } from "../constants";
import { StyledContainer } from "../ui/Container";
import Image from "next/image";
import { StyledTitle } from "../ui/mainFonts";
import ImageHero from "~src/images/winnickV2.png";

const StyledHero = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  padding: ${uiKitModules.x20}px 0 ${uiKitModules.x12}px;
  justify-content: space-between;
  position: relative;
  gap: ${uiKitModules.x10}px;

  @media ${uiKitBreakpoints.maxWidth.L} {
    padding: ${uiKitModules.x17}px 0 ${uiKitModules.x9}px;
  }

  @media ${uiKitBreakpoints.maxWidth.S} {
    flex-direction: column;
  }
`;

const StyledHeroTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  max-width: 600px;

  @media ${uiKitBreakpoints.maxWidth.S} {
    text-align: center;
    order: 1;
  }
`;

const StyledHeroMarkText = styled.span`
  background-image: linear-gradient(to right, ${uiKitColors.bgAccentRed}, ${uiKitColors.bgAccentYellow});
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const StyledHeroImage = styled(Image)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 260px;
  position: relative;
  background-color: ${uiKitColors.bgMain};
  border-radius: 100%;

  @media ${uiKitBreakpoints.maxWidth.L} {
    width: 200px;
    height: 200px;
  }

  @media ${uiKitBreakpoints.maxWidth.S} {
    width: 160px;
    height: 160px;
  }
`;

export default function Hero() {
  return (
    <StyledContainer>
      <StyledHero>
        <StyledHeroTextBlock>
          <StyledTitle>
            Приветствую!
            <br />
            Я&nbsp;<StyledHeroMarkText>фронтенд-разработчик.</StyledHeroMarkText>
            <br />
            Создаю креативные и&nbsp;удобные интерфейсы.
          </StyledTitle>
        </StyledHeroTextBlock>

        <StyledHeroImage src={ImageHero} alt="winnick" width={260} height={260} loading="lazy" />
      </StyledHero>
    </StyledContainer>
  );
}
