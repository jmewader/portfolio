import styled from "styled-components";
import { uiKitColors, uiKitFontSizes, uiKitFontWeights, uiKitModules } from "../constants";
import { StyledContainer } from "../ui/Container";
import Image from "next/image";
import { StyledDescriptions, StyledMainDescriptions, StyledSubtitle } from "../ui/mainFonts";
import EngSkillboxImage from "../../../public/projects/eng-skillbox.png";
import SkinExpertImage from "../../../public/projects/skin-expert.png";
import ProJapanImage from "../../../public/projects/pro-japan.png";
import IhelpImage from "../../../public/projects/ihelp.png";
import AmistImage from "../../../public/projects/amist.png";
import DonTelefonImage from "../../../public/projects/don-telefon.png";

const PROJECTS_DATA = [
  { title: "Skillbox", descriptions: "", techStack: "HTML, CSS, TypeScript, React, Next.js, Redux, Storybook, Strapi", previewLink: "/", codeLink: "/", image: EngSkillboxImage },
  { title: "Skin-Expert", descriptions: "", techStack: "HTML, CSS, JavaScript, React", previewLink: "/", codeLink: "/", image: SkinExpertImage },
  { title: "ProJapan", descriptions: "", techStack: "HTML, CSS, JavaScript, React", previewLink: "/", codeLink: "/", image: ProJapanImage },
  { title: "Amist", descriptions: "", techStack: "HTML, CSS, JavaScript, React", previewLink: "/", codeLink: "/", image: AmistImage },
  { title: "Don-Telefon", descriptions: "", techStack: "HTML, CSS, JavaScript, React", previewLink: "/", codeLink: "/", image: DonTelefonImage },
  { title: "Ihelp", descriptions: "", techStack: "HTML, CSS, JavaScript, WordPress, FTP", previewLink: "/", codeLink: "/", image: IhelpImage },
];

const StyledProjects = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${uiKitModules.x20}px 0 ${uiKitModules.x12}px;
  justify-content: space-between;
`;

const StyledProjectsList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${uiKitModules.x12}px;
  margin: ${uiKitModules.x25}px 0 0;
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
`;

const StyledProjectsListItemImage = styled.div`
  position: relative;
  display: flex;
  border-radius: ${uiKitModules.x5}px ${uiKitModules.x5}px 0 0;
  min-height: 190px;
  width: 100%;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  width: 100%;
  object-fit: contain;
  height: auto !important;
`;

const StyledProjectsListItemTitle = styled.h3`
  font-size: ${uiKitFontSizes.L}px;
  font-weight: ${uiKitFontWeights.medium};
  margin: 0 0 ${uiKitModules.x2}px;
`;

const StyledProjectsListItemTechStack = styled.div`
  font-size: ${uiKitFontSizes.XXS}px;
  color: ${uiKitColors.textSecondaryDark};
  font-weight: ${uiKitFontWeights.normal};
`;

const StyledProjectsListItemTechStackTitle = styled.span`
  font-weight: ${uiKitFontWeights.semibold};
`;

export default function Projects() {
  return (
    <StyledContainer>
      <StyledProjects>
        <StyledSubtitle>Проекты</StyledSubtitle>
        <StyledMainDescriptions>Коммерческие и пет-проекты</StyledMainDescriptions>

        <StyledProjectsList>
          {PROJECTS_DATA.map((item) => (
            <StyledProjectsListItem key={item.title}>
              <StyledProjectsListItemImage>
                <StyledImage src={item.image} alt={item.title} fill />
              </StyledProjectsListItemImage>

              <StyledProjectsListItemContent>
                <StyledProjectsListItemTitle>{item.title}</StyledProjectsListItemTitle>

                <StyledDescriptions>{item.descriptions}</StyledDescriptions>

                <StyledProjectsListItemTechStack>
                  <StyledProjectsListItemTechStackTitle>Стек: </StyledProjectsListItemTechStackTitle>
                  {item.techStack}
                </StyledProjectsListItemTechStack>
              </StyledProjectsListItemContent>
            </StyledProjectsListItem>
          ))}
        </StyledProjectsList>
      </StyledProjects>
    </StyledContainer>
  );
}
