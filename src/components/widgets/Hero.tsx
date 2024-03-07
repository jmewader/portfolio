import styled from "styled-components";
import { uiKitFontSizes, uiKitFontWeights, uiKitModules } from "../constants";
import { StyledContainer } from "../ui/Container";
import Image from "next/image";

const StyledHero = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  padding: ${uiKitModules.x15}px 0;
  justify-content: space-between;
`;

const StyledHeroTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  max-width: 600px;
`;

const StyledHeroTitle = styled.h1`
  font-weight: ${uiKitFontWeights.bold};
  font-size: ${uiKitFontSizes["5XL"]}px;
`;

const StyledHeroMarkText = styled.span`
  background-image: linear-gradient(to right, #ff4e50, #f9d423);
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
          <StyledHeroTitle>
            Приветствую!
            <br />
            Меня зовут Настя.
            <br />
            Я&nbsp;<StyledHeroMarkText>фронтенд-разработчик.</StyledHeroMarkText>
            <br />
            Создаю креативные и&nbsp;удобные интерфейсы.
          </StyledHeroTitle>
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
