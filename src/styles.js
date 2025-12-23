import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #cacaca;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: #8d8d8dff;
  box-shadow: 0px 2px 8px rgba(56, 56, 56, 1);
  width: 300px;
  border-radius:15px;
`;

export const Row = styled.div`
  margin: 6px;
  display: flex;
  flex-direction: row;
`;
