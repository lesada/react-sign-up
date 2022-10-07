import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* flex: 1; */

  background: rgba(255, 255, 255, 0.87);
  backdrop-filter: blur(24px);
  height: 100vh;
  width: 400px;

  h1 {
    font-size: 28px;
    font-weight: 700;
    color: #ff8d8d;
    margin-bottom: 2rem;
  }

  span {
    font-size: 21px;
    font-weight: 400;
    color: #5dc399;
  }

  p {
    font-size: 15px;
    font-weight: 500;
    color: #808080;
    margin-top: 1rem;

    a {
      color: #ff8d8d;
      text-decoration: none;

      &:hover {
        filter: brightness(1.2);
      }
    }
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

  button {
    align-self: start;
    width: 282px;
    height: 60px;
    margin: 1rem 0;

    background-color: #70edb9;
    color: #fff;
    font-weight: 700;
    font-size: 21px;

    border: none;
    border-radius: 8px;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    cursor: pointer;

    transition: transform 0.2s ease-in;
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

export const Terms = styled.div`
  color: #808080;
  font-size: 15px;
  font-weight: 400;
  text-align: center;
  padding: 0 1rem;
`;
