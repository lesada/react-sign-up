import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 250px;
  height: 40px;

  border: none;
  border-radius: 8px;

  margin: 0.5rem 0;
  padding: 0 1rem;

  background-color: #f5f5f5;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s ease-in;

  &:focus {
    outline: 3px solid #ffa689;
  }

  &:hover {
    transform: translateY(-3px);
  }
`;

export const StatusCircle = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 10px;
  margin-left: 1rem;

  ${StyledInput}:invalid + & {
    background: #fe2f75;
  }
  ${StyledInput}:valid + & {
    background: #70edb9;
  }
  ${StyledInput}:focus + & {
    background: #ffa689;
  }
`;
