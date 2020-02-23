import styled from "styled-components";
import { Link } from "react-router-dom";

import { device } from "../../../../styles/breakpoints";

export const Container = styled(Link)`
  display: block;
  background-color: rgba(255, 255, 255, 0.9);
  border-bottom: 2px solid transparent;
  width: 200px;
  margin: 10px auto;
  padding: 5px;
  border-radius: 4px;
  transition: all 0.4s ease-in-out;

  &:hover {
    box-shadow: 2px 1px 4px rgba(255, 255, 255, 0.6);
    cursor: pointer;
  }

  @media ${device.tablet} {
    width: 300px;
  }

  @media ${device.laptopL} {
    width: 500px;
  }
`;

export const CharacterImage = styled.div`
  width: 190px;
  height: 250px;
  background-image: url(${props => (props.img ? props.img : "")});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;

  @media ${device.tablet} {
    width: 290px;
    height: 350px;
  }

  @media ${device.laptopL} {
    width: 490px;
    height: 550px;
  }
`;

export const CharacterName = styled.h4`
  color: #555;
  font-size: 14px;
  font-weight: 300;
  padding-top: 10px;

  @media ${device.tablet} {
    font-size: 20px;
  }

  @media ${device.laptopL} {
    font-size: 34px;
  }
`;
