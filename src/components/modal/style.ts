import styled from 'styled-components';

export const ContainerGrid = styled.div<{ display: boolean }>`
  display: ${({ display }) => (display ? 'flex' : 'none')};
  place-content: center;
  place-items: center;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.9);
  z-index: 20;
  
`;

export const Container = styled.form`
  text-align: center;
  background: #0e0036;
  padding: 20px;
  position: fixed;
  border-radius: 20px;
  color: #fff;
  display: grid;
  gap: 10px;
  place-content: center;

  h2 {
   text-transform: uppercase;
    grid-column: 1/2;
    font-family: Arial, Helvetica, sans-serif;
  }
  label {
    align-self: start;
    font-weight: bold;
    font-size: 1.2rem;
    padding: 0 5px;
    text-transform: uppercase;
  }

  input {
    width: 300px;
    font-size: 1.2rem;
    border-radius: 5px;
    border: solid 3px transparent;
    border-color: none;
    color: #0e0036;
    outline: none;
    padding: 5px;
    &:focus {
      border: solid 3px rgba(70, 6, 136, 0.6);
    }
  }

  select {
    cursor: pointer;
    outline: none;
    font-size: 1.2rem;
    border-radius: 5px;
    border: solid 3px transparent;
    padding: 5px;

    align-self: end;
    &:focus {
      border: solid 3px rgba(70, 6, 136, 0.6);
    }
  }

 
`;

export const Btn = styled.button`
  cursor: pointer;
  width: 100px;
  height: 40px;
  font-size: 1.2rem;
  transition: 0.3s;
  justify-self: center;
  &:hover {
    border-radius: 5px;
    background: rgba(70, 6, 136, 0.6);
  }
`;

export const BtnX = styled.button`
  position: fixed;
  cursor: pointer;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  transition: 0.3s;
  justify-self: center;
  z-index: 100;
  top: 20px;
  right: 20px;
  &:hover {
    border-radius: 5px;
    background: rgba(70, 6, 136, 0.6);
  }
`;


export const Formdiv = styled.div`
  grid-column: 2;
  display: flex;
  flex-direction: column;
`;
export const FormdivCont = styled.div`
  justify-self: start;
  align-self: start;
  display: flex;
  gap: 10px;
`;
