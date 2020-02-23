import React from "react";

import { Container, ErrorImage } from "./styles";

export default function Error() {
  return (
    <Container>
      <ErrorImage />
      <p>Archive fetching failure.</p>
      <p>The greatest teacher, failure is.</p>
    </Container>
  );
}
