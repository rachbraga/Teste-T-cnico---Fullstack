import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 10px;
  text-align: left;
  div {
    span {
      color: var(--red);
    }
  }
`;

export const InputContainer = styled.div`
  background: var(--greycolor);
  border-radius: 5px;
  border: 0.973988px solid var(--darkgrey);
  color: var(--white);
  padding: 1rem;
  width: 100%;
  display: flex;
  transition: 0.4s;
  padding: 0;
  height: 38px;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
    `}
  input {
    background: var(--greycolor);
    width: 100%;
    align-items: center;
    margin: 5px;
    border: 0;
    color: var(--lightgrey);
  }
`;
