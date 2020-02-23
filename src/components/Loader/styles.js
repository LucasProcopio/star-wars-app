import styled from "styled-components";
import loadImg from "../../assets/images/darth_maul.gif";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;

  > p {
    color: rgba(255, 255, 255, 0.8);
    font-weight: 300;
    font-size: 16px;
    letter-spacing: 1.2px;
  }
`;

export const LoadImage = styled.div`
  width: 64px;
  height: 64px;
  margin: 10px 0;
  background-image: url(${loadImg});
  background-size: contain;
  background-repeat: no-repeat;
`;
