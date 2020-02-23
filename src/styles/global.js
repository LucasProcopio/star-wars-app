import { createGlobalStyle } from "styled-components";
import "react-perfect-scrollbar/dist/css/styles.css";
import bgImage from "../assets/images/background.jpg";

export default createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing:  border-box;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
  }
  body, input, button {
    font-size: 14px;
    font-family: "Open Sans Condensed", sans-serif;
  }
  body {
    display: flex;
    background-color: #000;

    &::after {
      content: "";
      background-image: url(${bgImage});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: top left;
      background-attachment: fixed;
      opacity: 0.3;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: fixed;
      z-index: -1;
    }
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
`;
