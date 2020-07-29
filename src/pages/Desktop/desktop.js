import React from "react";

import { Main, Content } from "../../components/Desktop";
import { Brand, Title, Description } from "../../components";
// Here is just a temporary screen
function Desktop() {
  return (
    <Main>
      <Content>
        <Brand />
        <Title primary="true">Assistant to Normalize Activities</Title>
      </Content>

      <Description primary="true">
        This service is only available on smartphone.
      </Description>
    </Main>
  );
}

export default Desktop;
