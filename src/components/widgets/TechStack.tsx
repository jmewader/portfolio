import styled from "styled-components";
import { uiKitModules } from "../constants";
import { StyledContainer } from "../ui/Container";
import { StyledMainDescriptions, StyledSubtitle } from "../ui/mainFonts";
import HtmlIcon from "../../../public/tech/html.svg";
import CssIcon from "../../../public/tech/css.svg";
import TypeScriptIcon from "../../../public/tech/ts.svg";
import JavaScriptIcon from "../../../public/tech/js.svg";
import ReactIcon from "../../../public/tech/react.svg";
import ReduxIcon from "../../../public/tech/redux.svg";
import NextJsIcon from "../../../public/tech/next-js.svg";
import GitHubIcon from "../../../public/tech/github-fill.svg";
import GitIcon from "../../../public/tech/git-icon.svg";
import VsCodeIcon from "../../../public/tech/vscode.svg";
import FigmaIcon from "../../../public/tech/figma.svg";
import SassIcon from "../../../public/tech/sass.svg";
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
              <Image src={item.icon} alt={item.title} width={80} height={80} />
            </li>
          ))}
        </StyledIconList>
      </StyledTechStack>
    </StyledContainer>
  );
}
