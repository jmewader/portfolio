import styled from "styled-components";
import { uiKitBreakpoints } from "./constants";
import LogoImage from "~src/images/logo.svg";
import LogoGreyImage from "~src/images/logoV2.svg";

const StyledHeaderLogo = styled.div`
  display: flex;
  align-items: center;
  width: 90px;
  height: 50px;

  @media ${uiKitBreakpoints.maxWidth.L} {
    width: 70px;
  }
`;

export default function Logo({ isGrey }: { isGrey?: boolean }) {
  return <StyledHeaderLogo>{isGrey ? <LogoGreyImage /> : <LogoImage />}</StyledHeaderLogo>;
}
