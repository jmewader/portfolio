import styled from "styled-components";
import { uiKitModules } from "./constants";
import Image from "next/image";
import Link from "next/link";

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
    title: "Telegram",
    icon: "/telegram.svg",
    alt: "telegram",
    url: "https://t.me/jmewader",
  },
  {
    title: "Github",
    icon: "/github.svg",
    alt: "github",
    url: "https://github.com/jmewader",
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
