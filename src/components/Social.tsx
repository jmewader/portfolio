import styled from "styled-components";
import { uiKitColors, uiKitModules } from "./constants";
import Link from "next/link";
import IconTelegram from "~src/images/telegram.svg";
import IconGitHub from "~src/images/github.svg";
import IconLinkedin from "~src/images/linkedin.svg";

type IconType = "github" | "telegram" | "linkedin";

type SocialType = {
  title: IconType;
  url: string;
};

const ICONS: Record<IconType, JSX.Element> = {
  github: <IconGitHub />,
  telegram: <IconTelegram />,
  linkedin: <IconLinkedin />,
};

const StyledSocial = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: ${uiKitModules.x5}px;
`;

const StyledSocialItemLink = styled(Link)`
  display: flex;

  svg {
    width: 30px;
    height: 30px;
  }

  svg path {
    transition: 0.25s;
  }

  &:hover {
    svg path {
      fill: ${uiKitColors.bgAccentRed};
    }
  }
`;

const SocialList: SocialType[] = [
  {
    title: "github",
    url: "https://github.com/jmewader",
  },
  {
    title: "telegram",
    url: "https://t.me/jmewader",
  },
  {
    title: "linkedin",
    url: "https://www.linkedin.com/in/anastasia-bovanenko",
  },
];

export default function Social() {
  return (
    <StyledSocial>
      {SocialList.map((item) => (
        <li key={item.title}>
          <StyledSocialItemLink href={item.url} target="_blank">
            {ICONS[item.title]}
          </StyledSocialItemLink>
        </li>
      ))}
    </StyledSocial>
  );
}
