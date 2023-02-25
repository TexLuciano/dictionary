import styled from 'styled-components';

export const Container = styled.div`
  margin: 150px auto;
  max-width: 1500px;
  padding: 0px;
  font-family: Arial, Helvetica, sans-serif;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const Btn = styled.button`
  justify-self: center;
  align-self: center;
  cursor: pointer;
  padding: 5px;
  height: 40px;
  width: 40px;
  svg {
    font-size: 20px;
  }
`;

export const Loading = styled.div`
  place-self: center;
  grid-column: 1/3;
  border: 4px solid white;
  border-radius: 50%;
  border-left-color: transparent;
  width: 50px;
  height: 50px;
  animation: spin89345 1s linear infinite;


@keyframes spin89345 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
`

export const Item = styled.p<{color:string}>`
  font-size: 1.2rem;
  text-transform: uppercase;
  justify-self: start;
  background: ${({color})=> color};
  padding: 8px ;
  border-radius: 8px;
  font-weight: bold;
`;

export const ContainerItem = styled.div`
  align-self: center;
  gap: 10px;
  display: flex;
  flex: 1;

`;

export const ItemGroup = styled.div`
  padding: 10px 10px;
  display: flex;
  border: 2px solid black;
  border-radius: 8px;
  gap: 10px;
  background: rgba(50, 50, 50 ,0.5);
`;

