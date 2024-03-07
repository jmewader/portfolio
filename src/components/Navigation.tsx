import styled from "styled-components";
import { uiKitColors, uiKitFontSizes, uiKitFontWeights, uiKitLineHeights, uiKitModules } from "./constants";

const StyledNavigation = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  gap: ${uiKitModules.x10}px;
`;

const StyledNavigationItem = styled.li`
  color: ${uiKitColors.textSecondary};
  cursor: pointer;
  font-size: ${uiKitFontSizes.XS}px;
  font-weight: ${uiKitFontWeights.medium};
  line-height: ${uiKitLineHeights.x13}px;
`;

const NavigationList = [
  {
    title: "Главная",
    url: "/",
  },
  {
    title: "Навыки",
    url: "",
  },
  {
    title: "Проекты",
    url: "",
  },
  {
    title: "Обо мне",
    url: "",
  },
  {
    title: "Обратная связь",
    url: "",
  },
];

export default function Navigation() {
  return (
    <StyledNavigation>
      {NavigationList.map((item) => (
        <StyledNavigationItem key={item.title}>{item.title}</StyledNavigationItem>
      ))}
    </StyledNavigation>
  );
}
