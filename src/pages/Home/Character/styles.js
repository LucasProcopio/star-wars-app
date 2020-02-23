import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.mobileM} {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > svg {
    margin-right: 10px;
  }

  > h2 {
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    font-weight: 300;
    padding: 10px 0 10px 0;
  }

  @media ${device.tablet} {
    h2 {
      font-size: 28px;
    }
    svg {
      width: 24px;
      height: 24px;
    }
  }

  @media ${device.laptopL} {
    h2 {
      font-size: 36px;
    }
    svg {
      width: 34px;
      height: 34px;
    }
  }
`;
