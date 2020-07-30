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
				Cada ambiente tem um QR Code para reconhecimento dos protocolos locais.
			</Description>
			<br />
			<Description style={{ color: "#9C999F" }}>Comece por aqui!</Description>
			<Button to="/qrcode">Ler QRCode</Button>
		</Splash>
	);
}

export default Start;
