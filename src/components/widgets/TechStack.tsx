import styled from "styled-components";
import { uiKitBreakpoints, uiKitModules } from "../constants";
import { StyledContainer } from "../ui/Container";
import { StyledMainDescriptions, StyledSubtitle } from "../ui/mainFonts";
import HtmlIcon from "~src/images/tech/html.svg";
import CssIcon from "~src/images/tech/css.svg";
import TypeScriptIcon from "~src/images/tech/ts.svg";
import JavaScriptIcon from "~src/images/tech/js.svg";
import ReactIcon from "~src/images/tech/react.svg";
import ReduxIcon from "~src/images/tech/redux.svg";
import NextJsIcon from "~src/images/tech/next-js.svg";
import GitHubIcon from "~src/images/tech/github-fill.svg";
import GitIcon from "~src/images/tech/git-icon.svg";
import VsCodeIcon from "~src/images/tech/vscode.svg";
import FigmaIcon from "~src/images/tech/figma.svg";
import SassIcon from "~src/images/tech/sass.svg";
import Image from "next/image";

const ICONS = [
  { title: "html", icon: HtmlIcon },
  { title: "css", icon: CssIcon },
  { title: "typeScript", icon: TypeScriptIcon },
  { title: "javaScript", icon: JavaScriptIcon },
  { title: "react", icon: ReactIcon },
  { title: "redux", icon: ReduxIcon },
  { title: "sass", icon: SassIcon },
  { title: "nextJs", icon: NextJsIcon },
  { title: "git", icon: GitIcon },
  { title: "figma", icon: FigmaIcon },
  { title: "vsCode", icon: VsCodeIcon },
  { title: "gitHub", icon: GitHubIcon },
];

const StyledTechStack = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: ${uiKitModules.x23}px;
  padding: ${uiKitModules.x30}px 0 ${uiKitModules.x30}px;
  position: relative;

  @media ${uiKitBreakpoints.maxWidth.L} {
    padding: ${uiKitModules.x15}px 0 ${uiKitModules.x15}px;
    gap: ${uiKitModules.x20}px;
  }

  @media ${uiKitBreakpoints.maxWidth.S} {
    padding: ${uiKitModules.x12}px 0 ${uiKitModules.x12}px;
    gap: ${uiKitModules.x14}px;
  }
`;

const StyledTechStackTextBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTechStackTitle = styled(StyledSubtitle)`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const StyledIconList = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  gap: ${uiKitModules.x15}px ${uiKitModules.x20}px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));

  @media ${uiKitBreakpoints.maxWidth.L} {
    gap: ${uiKitModules.x12}px ${uiKitModules.x17}px;
  }

  @media ${uiKitBreakpoints.maxWidth.S} {
    gap: ${uiKitModules.x8}px ${uiKitModules.x13}px;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  }

  @media ${uiKitBreakpoints.maxWidth.XS} {
    grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  }
`;

const StyledIconListImage = styled.div`
  position: relative;
  width: 80px;
  height: 80px;

  @media ${uiKitBreakpoints.maxWidth.L} {
    width: 65px;
    height: 65px;
  }

  @media ${uiKitBreakpoints.maxWidth.S} {
    width: 50px;
    height: 50px;
  }
`;

export default function TechStack() {
  return (
    <StyledContainer>
      <StyledTechStack>
        <StyledTechStackTextBlock>
          <StyledTechStackTitle>Мой стек технологий</StyledTechStackTitle>
          <StyledMainDescriptions>Технологии, которые я&nbsp;использую в&nbsp;своих проектах</StyledMainDescriptions>
        </StyledTechStackTextBlock>

        <StyledIconList>
          {ICONS.map((item, index) => (
            <li key={index}>
              <StyledIconListImage>
                <Image src={item.icon} alt={item.title} fill />
              </StyledIconListImage>
            </li>
          ))}
        </StyledIconList>
      </StyledTechStack>
    </StyledContainer>
  );
}
