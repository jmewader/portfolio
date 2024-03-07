import styled from "styled-components";
import { uiKitColors, uiKitFontSizes, uiKitFontWeights, uiKitModules } from "../constants";

export const StyledTitle = styled.h1`
  font-weight: ${uiKitFontWeights.bold};
  font-size: ${uiKitFontSizes["5XL"]}px;
  color: ${uiKitColors.textWhite};
`;

export const StyledSubtitle = styled.h2`
  font-weight: ${uiKitFontWeights.bold};
  font-size: ${uiKitFontSizes["3XL"]}px;
  color: ${uiKitColors.textMain};
  margin: 0 0 ${uiKitModules.x5}px;
`;

export const StyledMainDescriptions = styled.p`
  font-size: ${uiKitFontSizes.S}px;
  color: ${uiKitColors.textSecondary};
`;

export const StyledDescriptions = styled.p`
  font-size: ${uiKitFontSizes.M}px;
`;
