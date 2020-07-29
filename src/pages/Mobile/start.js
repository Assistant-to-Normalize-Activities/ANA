import React from "react";

import { Splash } from "../../components/Mobile";
import { Brand, Description, Button } from "../../components";

function Start() {
  return (
    <Splash>
      <Brand />
      <Description primary="true">
        Start by reading the local QR Code to get the protocal!
      </Description>
      <Button to="/qrcode">Read QRCode</Button>
    </Splash>
  );
}

export default Start;
