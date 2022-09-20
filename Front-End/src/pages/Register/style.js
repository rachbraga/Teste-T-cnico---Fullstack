import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1010px) {
    height: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;
export const DivMenu = styled.div`
  width: 370px;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    background-color: --var(grey);
    color: white;
    width: 80px;
    border: none;
    margin: 10px;
    font-family: "Inter";
    font-size: 15px;
  }
  img {
    width: 200px;
  }
`;
const appearFromRight = keyframes`
from{
    opacity:0;
    transform: translateX(50px);
}
to{
    opacity:1;
    transform: translateX(0px)
    
}
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 1s;
  form {
    max-width: 310px;
    background-color: black;
    border-radius: 5px;
    select {
      max-width: 300px;
    }
    h1 {
      margin-bottom: 8px;
      text-align: center;
      font-size: 40px;
    }
    > div {
      margin-top: 16px;
    }
    p {
      margin: 8px;
      text-align: center;
      font-size: 20px;
    }
    label {
      margin: 10px;
    }
    button {
      /* margin-left: 10%; */
      margin-bottom: 10%;
      width: 80%;
      border: none;
      color: white;
      font-size: 15px;
    }
    @media (min-width: 1010px) {
      form {
        max-width: 370px;
      }
      select {
        max-width: 300px;
      }
    }
  }
`;
