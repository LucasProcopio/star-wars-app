import styled from "styled-components";
import palpatine from "../../assets/images/palpatine.png";

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
    color: rgba(255, 0, 0, 0.5);
    margin: 5px 0;
    font-weight: normal;
    font-size: 16px;
    letter-spacing: 1.2px;
  }
`;

export const ErrorImage = styled.div`
  width: 64px;
  height: 64px;
  margin: 10px 0;
  background-image: url(${palpatine});
  background-size: contain;
  background-repeat: no-repeat;
`;