import styled from "styled-components";


export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;



`
export const Modal = styled.div<{display:Boolean}>`
display: ${({display})=> display ? "block" : "none"};


`

export const Item = styled.div`
display: flex;
gap: 10px;
`