import styled from "styled-components";


export const ContainerGrid = styled.div`
margin: 0 auto;
display: grid;
place-content: center;


`

export const Container = styled.form`
  text-align:center;
  justify-self: center;
  background: #0e0036;
  padding: 20px;
  display: block;
  position: fixed;
  border-radius: 20px;
  color: #fff;
  display: flex;
  gap: 0px 10px;
  place-content: center;
 
div{
  display: flex;
  flex-direction: column;
}

  h1{
    padding: 10px ;
  }
  label{
    align-self: start;
    font-weight: bold;
    font-size: 1.2rem;
    padding: 0 5px;
    text-transform: uppercase;
    
  }

input{
  width: 300px;
  font-size: 1.2rem;
  border-radius: 5px;
  border: solid 3px transparent;
  border-color:none;
  color: #0e0036;
  outline: none;
  padding: 5px;
  &:focus{
   border: solid 3px rgba(70,6,136,0.6) ;
  }
}

select{
  cursor: pointer;
  outline: none;
  font-size: 1.2rem;
  border-radius: 5px;
  border: solid 3px transparent;
  padding:5px;
  margin: 0 10px;
  align-self: end;
  &:focus{
    border: solid 3px rgba(70,6,136,0.6) ;
  }
}

button{
  cursor: pointer;
  width: 100px;
  height: 40px;
  font-size: 1.2rem;
  transition: 0.3s;
  align-self: end;
  &:hover{
    background: rgba(70,6,136,0.6);
  }
}
`
