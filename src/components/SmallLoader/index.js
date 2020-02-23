import React from "react";
import PropTypes from "prop-types";

import { FaJedi } from "react-icons/fa";

import { Spinner } from "./styles";

export default function SmallLoader({ color, message }) {
  return (
    <Spinner color={color}>
      <FaJedi color={color} size={24} />
      {message && <p>{message}</p>}
    </Spinner>
  );
}

SmallLoader.propTypes = {
  color: PropTypes.string,
  message: PropTypes.string,
};
