import React from "react";

import { Splash } from "../../components/Mobile";
import { Brand, Description, Button } from "../../components";
// This is the page that mobile.js redirects
// On this screen, the user will can take a qrcode picture
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
