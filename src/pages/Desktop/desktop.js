import React from "react";

import {
  Main,
  Content,
  Brand,
  Title,
  Description,
} from "../../components/Desktop";

function Desktop() {
  return (
    <Main>
      <Content>
        <Brand />
        <Title>Assistant to Normalize Activities</Title>
      </Content>

      <Description>This service is only avaible on smartphone.</Description>
    </Main>
  );
}

export default Desktop;
