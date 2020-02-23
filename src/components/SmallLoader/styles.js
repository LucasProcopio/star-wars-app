import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const Spinner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40%;
  margin: 10px auto;

  > svg {
    animation: rotate 2s linear infinite;
  }

  > p {
    font-size: 16px;
    letter-spacing: 1.2px;
    text-align: center;
    color: ${props => (props.color ? props.color : "#f5f5f5")};
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @media ${device.mobileL} {
    height: 80%;
    margin: 20px 0;
    svg {
      width: 60px;
      height: 60px;
    }
  }
`;
