import styled from "styled-components";
import { uiKitModules } from "../constants";
import { StyledContainer } from "../ui/Container";

const StyledTechStack = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  padding: ${uiKitModules.x10}px;
  justify-content: space-between;
`;



export default function TechStack() {
  return (
    <StyledContainer>
      <StyledTechStack>
       
      </StyledTechStack>
    </StyledContainer>
  );
}
