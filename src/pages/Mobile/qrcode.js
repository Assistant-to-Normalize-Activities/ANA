import React from "react";

import { Splash } from "../../components/Mobile";
import { Title } from "../../components";
import CamScanner from "../../components/Camera";

function QrCode() {
	return (
		<Splash>
			<Title>Aproxime a câmera para fazer a leitura do código</Title>
			<CamScanner />
		</Splash>
	);
}

export default QrCode;
