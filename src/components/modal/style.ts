import styled from "styled-components";
export const ContainerGrid = styled.div<{ display: boolean }>`

display: ${({display})=> display ? "block" : "none"};
place-content: center;
place-items: center;
`