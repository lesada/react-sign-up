import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 5;

  @media (max-width: 992px) {
    display: none;
  }
  h1 {
    font-size: 87px;
    font-weight: 900;
    color: #343434;
  }
`;
