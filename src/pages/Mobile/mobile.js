import React from "react";

import { Splash } from "../../components/Mobile";
import { Brand, Title } from "../../components/Desktop";

function Mobile() {
  return (
    <Splash>
      <Brand />
      <Title>Welcome to ANA!</Title>
    </Splash>
  );
}

export default Mobile;
