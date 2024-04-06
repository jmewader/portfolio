import styled from "styled-components";
import { uiKitBreakpoints } from "./constants";
import LogoImage from "~src/images/logo.svg";
import LogoGreyImage from "~src/images/logoV2.svg";

const StyledHeaderLogo = styled.div`
  width: 90px;
  height: 70px;

  @media ${uiKitBreakpoints.maxWidth.L} {
    width: 70px;
    height: 50px;
  }
`;

export default function Logo({ isGrey }: { isGrey?: boolean }) {
  return <StyledHeaderLogo>{isGrey ? <LogoGreyImage /> : <LogoImage />}</StyledHeaderLogo>;
}
