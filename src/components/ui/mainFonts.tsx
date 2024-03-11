import styled from "styled-components";
import { uiKitBreakpoints, uiKitColors, uiKitFontSizes, uiKitFontWeights, uiKitModules } from "../constants";

export const StyledTitle = styled.h1`
  font-weight: ${uiKitFontWeights.bold};
  font-size: ${uiKitFontSizes["5XL"]}px;
  color: ${uiKitColors.textWhite};

  @media ${uiKitBreakpoints.maxWidth.L} {
    font-size: ${uiKitFontSizes["3XL"]}px;
  }

  @media ${uiKitBreakpoints.maxWidth.S} {
    font-size: ${uiKitFontSizes.XL}px;
  }

  @media ${uiKitBreakpoints.maxWidth.XS} {
    font-size: ${uiKitFontSizes.L}px;
  }
`;

export const StyledSubtitle = styled.h2`
  font-weight: ${uiKitFontWeights.bold};
  font-size: ${uiKitFontSizes["3XL"]}px;
  color: ${uiKitColors.textMain};
  margin: 0 0 ${uiKitModules.x5}px;

  @media ${uiKitBreakpoints.maxWidth.L} {
    font-size: ${uiKitFontSizes.XL}px;
    margin: 0 0 ${uiKitModules.x3}px;
  }

  @media ${uiKitBreakpoints.maxWidth.S} {
    font-size: ${uiKitFontSizes.L}px;
  }

  @media ${uiKitBreakpoints.maxWidth.XS} {
    font-size: ${uiKitFontSizes.M}px;
  }
`;

export const StyledMainDescriptions = styled.p`
  font-size: ${uiKitFontSizes.S}px;
  color: ${uiKitColors.textSecondary};

  @media ${uiKitBreakpoints.maxWidth.L} {
    font-size: ${uiKitFontSizes.XS}px;
    text-align: center;
  }

  @media ${uiKitBreakpoints.maxWidth.S} {
    font-size: ${uiKitFontSizes.XXS}px;
  }
`;

export const StyledDescriptions = styled.p`
  font-size: ${uiKitFontSizes.XS}px;
  font-weight: ${uiKitFontWeights.normal};
  color: ${uiKitColors.textSecondaryDark};

  @media ${uiKitBreakpoints.maxWidth.L} {
    font-size: ${uiKitFontSizes.XXS}px;
  }

  @media ${uiKitBreakpoints.maxWidth.S} {
    font-size: ${uiKitFontSizes["3XS"]}px;
  }
`;
