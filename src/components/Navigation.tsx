import styled from "styled-components";
import { uiKitBreakpoints, uiKitColors, uiKitFontSizes, uiKitFontWeights, uiKitLineHeights, uiKitModules } from "./constants";
import Link from "next/link";

const StyledNavigation = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  gap: ${uiKitModules.x10}px;

  @media ${uiKitBreakpoints.maxWidth.S} {
    display: none;
  }
`;

const StyledNavigationItem = styled.li`
  display: flex;
  color: ${uiKitColors.textSecondary};
  cursor: pointer;
  font-size: ${uiKitFontSizes.XS}px;
  font-weight: ${uiKitFontWeights.medium};
  line-height: ${uiKitLineHeights.x13}px;
  transition: 0.25s;

  &:hover {
    color: ${uiKitColors.bgAccentRed};
  }
`;

const NavigationList = [
  {
    title: "Главная",
    url: "/",
  },
  {
    title: "Навыки",
    url: "#skills",
  },
  {
    title: "Проекты",
    url: "#projects",
  },
  //   {
  //     title: "Обо мне",
  //     url: "/info",
  //   },
  //   {
  //     title: "Обратная связь",
  //     url: "",
  //   },
];

export default function Navigation() {
  return (
    <StyledNavigation>
      {NavigationList.map((item) => (
        <StyledNavigationItem key={item.title}>
          <Link href={item.url}> {item.title}</Link>
        </StyledNavigationItem>
      ))}
    </StyledNavigation>
  );
}
