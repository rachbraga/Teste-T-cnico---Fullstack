import styled from "styled-components";

export const ButtonComponent = styled.button`
  background: #ff427f;
  color: var(--black);
  height: 45px;
  border-radius: 8px;
  border: 2px solid #ff427f;
  margin-top: 16px;
  width: 100%;
  :hover {
    border: 2px solid white;
    cursor: pointer;
  }
`;
