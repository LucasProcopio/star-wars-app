import styled from "styled-components";

export const Container = styled.div`
  background-color: #f1f1f1;
  border-bottom: 2px solid transparent;
  width: 200px;
  margin: 10px auto;
  padding: 5px;
  border-radius: 4px;
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
