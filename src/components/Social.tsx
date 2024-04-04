import styled from "styled-components";
import { uiKitModules } from "./constants";
import Image from "next/image";
import Link from "next/link";
import IconTelegram from "~src/images/telegram.svg";
import IconGitHub from "~src/images/github.svg";
import IconLinkedin from "~src/images/linkedin.svg";

const StyledSocial = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: ${uiKitModules.x5}px;
`;

const StyledSocialItemLink = styled(Link)`
  display: flex;
`;

const SocialList = [
  {
    title: "Github",
    icon: IconGitHub,
    alt: "github",
    url: "https://github.com/jmewader",
  },
  {
    title: "Telegram",
    icon: IconTelegram,
    alt: "telegram",
    url: "https://t.me/jmewader",
  },
  {
    title: "Linkedin",
    icon: IconLinkedin,
    alt: "linkedin",
    url: "https://www.linkedin.com/in/anastasia-bovanenko",
  },
];

export default function Social() {
  return (
    <StyledSocial>
      {SocialList.map((item) => (
        <li key={item.title}>
          <StyledSocialItemLink href={item.url} target="_blank">
            <Image src={item.icon} alt={item.alt} width={30} height={30} />
          </StyledSocialItemLink>
        </li>
      ))}
    </StyledSocial>
  );
}
