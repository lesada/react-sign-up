import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* flex: 1; */

  background-color: #ffffffde;
  height: 100vh;
  width: 400px;

  h1 {
    font-size: 28px;
    font-weight: 700;
    color: #ff8d8d;
    margin: 6rem 0 2rem;
  }

  span {
    font-size: 21px;
    font-weight: 400;
    color: #5dc399;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #666666;
    font-weight: 700;
    margin-bottom: 1rem;
  }
`;
