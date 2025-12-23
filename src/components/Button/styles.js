import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: #231b1b;
  width:160px;
  padding:10px;
  margin:4px;
  border-radius:8px;

  font-size:1rem;
  font-weight:700;
  color: #eee;  
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 1);
  transition: all 0.1s ease;
  &:hover {
    opacity: 0.8;
  }
  &:active{
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    transform: translateY(2px);
  }
`;
