import styled from "styled-components";


export const ContainerGrid = styled.div`
display: grid;
place-content: center;
`

export const Container = styled.form<{display:boolean}>`
  background: red;
  padding: 20px;
  display: ${({display})=> display ? "block" : "none"};

`
