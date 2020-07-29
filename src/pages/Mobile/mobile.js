import React from "react";
import { useHistory } from "react-router-dom";

import { Splash } from "../../components/Mobile";
import { Brand, Title } from "../../components";

function Mobile() {
  const history = useHistory();

  setTimeout(() => {
    history.push("/app");
  }, 3000);

  return (
    <Splash primary="true">
      <Brand />
      <Title primary="true">Welcome to ANA!</Title>
    </Splash>
  );
}

export default Mobile;
