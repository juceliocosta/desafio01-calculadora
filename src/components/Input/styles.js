import styled from 'styled-components';

export const InputContainer = styled.div`
background-color: #141414ff;
width:100%;
height: 90px;

display:flex;
align-items:center;
justify-content:center;
border-radius:16px 16px 0 0;

input{
  background-color: #d4d4d4ff;
  width:80%;
  height:40px;
  padding:0 10px;
  
  font-family: monospace;
  text-align: end;
  font-size:22px;

  box-shadow: inset 4px 4px 10px rgba(0, 0, 0, 0.4);
  border-radius:5px;
}
`