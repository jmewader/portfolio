import styled from "styled-components";
import { uiKitColors, uiKitModules } from "../constants";
import { StyledContainer } from "../ui/Container";
import Image from "next/image";
import { StyledTitle } from "../ui/mainFonts";

const StyledHero = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  padding: ${uiKitModules.x20}px 0 ${uiKitModules.x12}px;
  justify-content: space-between;
`;

const StyledHeroTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  max-width: 600px;
`;

const StyledHeroMarkText = styled.span`
  background-image: linear-gradient(to right, ${uiKitColors.bgAccentRed}, ${uiKitColors.bgAccentYellow});
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const StyledHeroImageBlock = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 100%;
`;

const StyledHeroImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
        <StyledHeroImageBlock>
          <StyledHeroImage>
            <Image src="/winnickV2.png" alt="winnick" width={260} height={260} />
          </StyledHeroImage>
        </StyledHeroImageBlock>
      </StyledHero>
    </StyledContainer>
  );
}