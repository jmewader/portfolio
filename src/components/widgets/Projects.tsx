import styled from "styled-components";
import { uiKitBreakpoints, uiKitColors, uiKitFontSizes, uiKitFontWeights, uiKitModules } from "../constants";
import { StyledContainer } from "../ui/Container";
import Image, { StaticImageData } from "next/image";
import { StyledDescriptions, StyledMainDescriptions, StyledSubtitle } from "../ui/mainFonts";
import EngSkillboxImage from "~src/images/projects/eng-skillbox.png";
import SkinExpertImage from "~src/images/projects/skin-expert.png";
import ProJapanImage from "~src/images/projects/pro-japan.png";
import IhelpImage from "~src/images/projects/ihelp.png";
import AmistImage from "~src/images/projects/amist.png";
import DonTelefonImage from "~src/images/projects/don-telefon.png";
import HappyPiplImage from "~src/images/projects/happy-pipl.png";
import AdresatProImage from "~src/images/projects/adresat-pro.png";
import InterlirImage from "~src/images/projects/interlir.png";
import ShiStudioImage from "~src/images/projects/shi-studio.png";
import SessionArtistImage from "~src/images/pet-project/session-artist.png";
import BikeImage from "~src/images/pet-project/bike.png";
import DonutsImage from "~src/images/pet-project/donuts.png";
import ForestImage from "~src/images/pet-project/forest.png";
import ThemeSwitcherImage from "~src/images/pet-project/theme-switcher.png";
import TodoListImage from "~src/images/pet-project/todo-list.png";
import TicTacToeImage from "~src/images/pet-project/tic-tac-toe.png";
import PolarImage from "~src/images/pet-project/polar.png";
import WeatherForecastImage from "~src/images/pet-project/weather-forecast.png";
import PreviewIcon from "~src/images/link-chain.svg";
import PreviewCodeIcon from "~src/images/github.svg";
import Link from "next/link";
import { useCallback, useState } from "react";

type ProjectType = {
  title: string;
  descriptions: string;
  techStack: string;
  previewLink: string;
  codeLink?: string;
  image: StaticImageData;
};

type TabsType = {
  $isActive: boolean;
};

const PROJECTS_COMMERCIAL_DATA: ProjectType[] = [
  { title: "Skillbox Английский", descriptions: "Онлайн-школа английского языка, предоставляющая курсы по различным направлениям.", techStack: "HTML, CSS, TypeScript, React, Next.js, Vercel, Redux, Storybook, Strapi", previewLink: "https://eng.skillbox.ru", image: EngSkillboxImage },
  { title: "Skin-Expert", descriptions: "Портал о косметологии и пластической хирургии.", techStack: "HTML, CSS, JavaScript, React, Node.js, Storybook", previewLink: "https://ru.skin.expert", image: SkinExpertImage },
  { title: "ProJapan", descriptions: "Веб-сайт по покупке мотоциклов из Японии.", techStack: "HTML, CSS, JavaScript, React", previewLink: "https://projapan.ru", image: ProJapanImage },
  { title: "Amist", descriptions: "Веб-сайт по продаже туров в Южно-Сахалинске.", techStack: "HTML, CSS, JavaScript, React", previewLink: "https://amist.ru", image: AmistImage },
  { title: "Don-Telefon", descriptions: "Интернет-магазин по продаже бытовой и электронной техники.", techStack: "HTML, CSS, JavaScript, React", previewLink: "https://don-telefon.ru", image: DonTelefonImage },
  { title: "Ihelp", descriptions: "Сервисный центр по ремонту техники.", techStack: "HTML, CSS, JavaScript, PHP, WordPress, jQuery, Bootstrap, FTP", previewLink: "https://ihelp.moscow", image: IhelpImage },
  { title: "Interlir", descriptions: "Сайт по аренде и покупке IP-адресов.", techStack: "HTML, CSS, JavaScript, WordPress, jQuery, FTP", previewLink: "https://interlir.com", image: InterlirImage },
  { title: "ShiStudio", descriptions: "Сайт студии дизайна интерьера.", techStack: "HTML, CSS, JavaScript, Tilda", previewLink: "https://shistudio.ru", image: ShiStudioImage },
  { title: "AdresatPro", descriptions: "Сайт агентства недвижимости.", techStack: "HTML, CSS, JavaScript", previewLink: "https://adresat.pro", image: AdresatProImage },
  { title: "Happypipl", descriptions: "Интернет-магазин воздушных шаров.", techStack: "HTML, CSS, JavaScript, Tilda", previewLink: "https://happypipl.ru", image: HappyPiplImage },
];

const PROJECTS_PET_DATA: ProjectType[] = [
  { title: "Session Artist", descriptions: "Портал по поиску музыкантов.", techStack: "HTML, CSS, SCSS, JavaScript", previewLink: "https://jmewader.github.io/session-artist", codeLink: "https://github.com/jmewader/session-artist", image: SessionArtistImage },
  { title: "Donuts", descriptions: "Веб-сайт о пончиках.", techStack: "HTML, CSS, JavaScript, React, Next.js, Vercel", previewLink: "https://nextjs-donut-git-main-jmewader.vercel.app", codeLink: "https://github.com/jmewader/nextjs-donut", image: DonutsImage },
  { title: "Weather Forecast", descriptions: "Прогноз погоды.", techStack: "HTML, CSS, TypeScript, Vue", previewLink: "https://jmewader.github.io/weather-forecast", codeLink: "https://github.com/jmewader/weather-forecast", image: WeatherForecastImage },
  { title: "Bike", descriptions: "Модальное окно с переключаемыми вкладками и информацией.", techStack: "HTML, CSS, JavaScript", previewLink: "https://jmewader.github.io/bike", codeLink: "https://github.com/jmewader/bike", image: BikeImage },
  { title: "Polar", descriptions: "Интернет-магазин мороженого.", techStack: "HTML, CSS, JavaScript", previewLink: "https://github.com/jmewader/polar", codeLink: "https://jmewader.github.io/polar", image: PolarImage },
  { title: "Todo List", descriptions: "Интерактивный список дел.", techStack: "HTML, CSS, JavaScript, React, Next.js, Vercel, Grommet", previewLink: "https://nextjs-todo-git-main-jmewader.vercel.app", codeLink: "https://github.com/jmewader/nextjs-todo", image: TodoListImage },
  { title: "Fairy Forest", descriptions: "Лендинг с параллакс-эффектом.", techStack: "HTML, CSS, JavaScript, Photoshop", previewLink: "https://jmewader.github.io/forest-parallax", codeLink: "https://github.com/jmewader/forest-parallax", image: ForestImage },
  { title: "Tic Tac Toe", descriptions: "Игра 'крестики-нолики'.", techStack: "HTML, CSS, TypeScript, React, Next.js, Vercel", previewLink: "https://tic-tac-toe-ten-pied.vercel.app", codeLink: "https://github.com/jmewader/tic-tac-toe", image: TicTacToeImage },
  { title: "Theme Switcher", descriptions: "Форма с переключением темы и сохранением в LocalStorage.", techStack: "HTML, CSS, JavaScript", previewLink: "https://jmewader.github.io/theme-switcher", codeLink: "https://github.com/jmewader/theme-switcher", image: ThemeSwitcherImage },
];

const StyledProjects = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${uiKitModules.x20}px 0 ${uiKitModules.x12}px;
  justify-content: space-between;
  position: relative;

  @media ${uiKitBreakpoints.maxWidth.L} {
    padding: ${uiKitModules.x15}px 0 ${uiKitModules.x15}px;
  }
`;

const StyledProjectsList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${uiKitModules.x12}px;
  margin: ${uiKitModules.x25}px 0 0;

  @media ${uiKitBreakpoints.maxWidth.L} {
    grid-template-columns: 1fr 1fr;
    gap: ${uiKitModules.x6}px;
    margin: ${uiKitModules.x17}px 0 0;
  }

  @media ${uiKitBreakpoints.maxWidth.S} {
    grid-template-columns: 1fr;
    gap: ${uiKitModules.x4}px;
  }
`;

const StyledProjectsListItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  background-color: ${uiKitColors.bgSecondary};
  border-radius: ${uiKitModules.x5}px;
  overflow: hidden;
`;

const StyledProjectsListItemContent = styled.div`
  padding: ${uiKitModules.x5}px ${uiKitModules.x7}px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  gap: ${uiKitModules.x5}px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: -69px;
    left: 0;
    width: 100%;
    height: 69px;
    background: linear-gradient(0, #363636 10%, rgba(255, 255, 255, 0) 100%);
    z-index: 1;
  }

  @media ${uiKitBreakpoints.maxWidth.L} {
    padding: ${uiKitModules.x6}px ${uiKitModules.x8}px;

    &::after {
      top: -40px;
      height: 40px;
    }
  }

  @media ${uiKitBreakpoints.maxWidth.S} {
    padding: ${uiKitModules.x6}px;
    gap: ${uiKitModules.x2}px;
  }

  @media ${uiKitBreakpoints.maxWidth.XS} {
    padding: ${uiKitModules.x4}px;
  }
`;

const StyledProjectsListItemImage = styled(Image)`
  position: relative;
  display: flex;
  border-radius: ${uiKitModules.x5}px ${uiKitModules.x5}px 0 0;
  width: 100%;
  height: 100%;
  min-height: 205px;
  overflow: hidden;

  @media ${uiKitBreakpoints.maxWidth.L} {
    object-position: top;
    object-fit: cover;
    height: auto;
    height: 205px;
  }

  @media ${uiKitBreakpoints.maxWidth.S} {
    min-height: 290px;
  }

  @media ${uiKitBreakpoints.maxWidth.XS} {
    min-height: 180px;
  }
`;

const StyledProjectsListItemTitle = styled.h3`
  font-size: ${uiKitFontSizes.L}px;
  font-weight: ${uiKitFontWeights.medium};
  margin: 0 0 ${uiKitModules.x2}px;

  @media ${uiKitBreakpoints.maxWidth.L} {
    font-size: ${uiKitFontSizes.M}px;
  }
`;

const StyledProjectsListItemDescription = styled(StyledDescriptions)`
  font-weight: ${uiKitFontWeights.normal};
  font-size: ${uiKitFontSizes.XXS}px;
  margin: 0 0 ${uiKitModules.x3}px;
`;

const StyledProjectsListItemTechStack = styled.div`
  font-size: ${uiKitFontSizes["3XS"]}px;
  color: ${uiKitColors.textSecondaryDark};
  font-weight: ${uiKitFontWeights.normal};
`;

const StyledProjectsListItemTechStackTitle = styled.span`
  font-weight: ${uiKitFontWeights.semibold};
`;

const StyledProjectsListItemActions = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledProjectsListItemActionsItem = styled(Link)`
  display: flex;
  align-items: center;
  font-size: ${uiKitFontSizes.XS}px;
  font-weight: ${uiKitFontWeights.normal};
  text-decoration: underline;
  gap: ${uiKitModules.x2}px;
  width: fit-content;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    text-decoration: none;
  }

  @media ${uiKitBreakpoints.maxWidth.L} {
    font-size: ${uiKitFontSizes.XXS}px;
  }
`;

const StyledProjectsTabs = styled.ul`
  display: flex;
  list-style: none;
  margin: ${uiKitModules.x9}px 0 0;

  @media ${uiKitBreakpoints.maxWidth.L} {
    margin: ${uiKitModules.x5}px 0 0;
  }
`;

const StyledProjectsTab = styled.li<TabsType>`
  cursor: pointer;
  padding: ${uiKitModules.x2}px ${uiKitModules.x4}px;
  color: ${({ $isActive }) => ($isActive ? `${uiKitColors.bgAccentRed}` : `${uiKitColors.textMain}`)};
  border-bottom: ${({ $isActive }) => ($isActive ? `1px solid ${uiKitColors.bgAccentRed}` : "1px solid transparent")};
  transition: 0.25s;

  &:hover {
    color: ${uiKitColors.bgAccentRed};
  }

  @media ${uiKitBreakpoints.maxWidth.L} {
    font-size: ${uiKitFontSizes.XS}px;
    padding: ${uiKitModules.x1}px ${uiKitModules.x3}px;
  }
`;

export default function Projects() {
  const [selectedTab, setSelectedTab] = useState("commercial");
  const projectsData = selectedTab === "commercial" ? PROJECTS_COMMERCIAL_DATA : PROJECTS_PET_DATA;

  const handleTabChange = useCallback(
    (tab: string) => {
      setSelectedTab(tab);
    },
    [selectedTab]
  );

  return (
    <StyledContainer>
      <StyledProjects id="projects">
        <StyledSubtitle>Проекты</StyledSubtitle>
        <StyledMainDescriptions>Примеры моих коммерческих и пет-проектов</StyledMainDescriptions>

        <StyledProjectsTabs>
          <StyledProjectsTab onClick={() => handleTabChange("commercial")} $isActive={selectedTab === "commercial"}>
            Коммерческие
          </StyledProjectsTab>

          <StyledProjectsTab onClick={() => handleTabChange("pet")} $isActive={selectedTab === "pet"}>
            Пет-проекты
          </StyledProjectsTab>
        </StyledProjectsTabs>

        <StyledProjectsList>
          {projectsData.map((item) => (
            <StyledProjectsListItem key={item.title}>
              <StyledProjectsListItemImage src={item.image} alt={item.title} />

              <StyledProjectsListItemContent>
                <div>
                  <StyledProjectsListItemTitle>{item.title}</StyledProjectsListItemTitle>
                  <StyledProjectsListItemDescription>{item.descriptions}</StyledProjectsListItemDescription>
                  <StyledProjectsListItemTechStack>
                    <StyledProjectsListItemTechStackTitle>Стек: </StyledProjectsListItemTechStackTitle>
                    {item.techStack}
                  </StyledProjectsListItemTechStack>
                </div>

                <StyledProjectsListItemActions>
                  <StyledProjectsListItemActionsItem href={item.previewLink} target="_blank">
                    <PreviewIcon /> Live Preview
                  </StyledProjectsListItemActionsItem>

                  {item.codeLink && (
                    <StyledProjectsListItemActionsItem href={item.codeLink} target="_blank">
                      <PreviewCodeIcon /> View Code
                    </StyledProjectsListItemActionsItem>
                  )}
                </StyledProjectsListItemActions>
              </StyledProjectsListItemContent>
            </StyledProjectsListItem>
          ))}
        </StyledProjectsList>
      </StyledProjects>
    </StyledContainer>
  );
}
