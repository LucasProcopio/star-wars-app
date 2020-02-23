import styled from "styled-components";
import { Link } from "react-router-dom";
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
`;

export const CharacterImage = styled.div`
  width: 190px;
  height: 250px;
  background-image: url(${props => (props.img ? props.img : "")});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
`;

export const CharacterName = styled.h4`
  color: #555;
  font-size: 14px;
  font-weight: 300;
  padding-top: 10px;
`;
